import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Card} from "../../../models/card";
import {AuthService} from "../../../providers/auth-service";
import {SessionProvider} from "../../../providers/session-provider";

/*
 Generated class for the SessionCardsSelect page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-session-cards-select',
    templateUrl: 'session-cards-select.html'
})
export class SessionCardsSelectPage {
    private cards:{card:Card, add:boolean}[];
    private sessionId: string;

    constructor(public navCtrl:NavController,
                public navParams:NavParams,
                public sessionProvider:SessionProvider,
                public auth:AuthService) {
        this.sessionId = navParams.data.sessionId;
        this.cards = [];
        navParams.data.sessionCards.forEach((card)=> {
            this.cards.push({
                card: card,
                add: navParams.data.pickedCards.includes(c => c.userId === this.auth.getUserID() &&
                    c.cards.includes(cid => cid === card._id))
            })
            console.log(navParams.data.pickedCards.filter(pc => pc.userId === this.auth.getUserID()).cards.includes(card.id))
        });

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SessionCardsSelectPage');
    }
    
    safePickedCards(){
        this.sessionProvider.pickCards(this.sessionId,
            this.cards
                .filter(c=>c.add)
                .map(c=>c.card._id))
            .subscribe(
                data => console.log(data),
                err => console.error(err)
        );
    }

}
