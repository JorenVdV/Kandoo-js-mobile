import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Card} from "../../../models/card";
import {AuthService} from "../../../providers/auth-service";
import {SessionProvider} from "../../../providers/session-provider";
import {Session} from "../../../models/session";

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
    private session: Session;
    private cards:{card:Card, add:boolean}[];
    private sessionId: string;

    constructor(public navCtrl:NavController,
                public navParams:NavParams,
                public sessionProvider:SessionProvider,
                public auth:AuthService) {
        this.session = navParams.data.session;
        this.sessionId = navParams.data.sessionId;
        this.cards = [];
        navParams.data.sessionCards.forEach((card)=> {
            let pickedCardsOfUser = navParams.data.pickedCards.find(pc => pc.userId === this.auth.getUserID());
            this.cards.push({
                card: card,
                add: pickedCardsOfUser?pickedCardsOfUser.cards.includes(card._id):false
            })
        });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SessionCardsSelectPage');
    }
    
    savePickedCards(){
        this.sessionProvider.pickCards(this.sessionId,
            this.cards
                .filter(c=>c.add)
                .map(c=>c.card._id))
            .subscribe(
                data => {},
                err => console.error(err)
        );
    }

}
