import {Component, Input} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {GamePage} from "./game/game";
import {PlayersPage} from "./session-players/session-players";
import {Session} from "../../models/session";
import {SessionService} from "../../providers/session-service";
import {SessionInformationPage} from "./session-information/session-information";

/*
 Generated class for the SessionDetails page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-session-details',
    templateUrl: 'session-details.html'
})
export class SessionDetailsPage {
    gameRoot:any = GamePage;
    playersRoot:any = PlayersPage;
    informationRoot:any = SessionInformationPage;

    session = new Session;
    constructor(public navCtrl:NavController, public navParams:NavParams, public sessionService:SessionService) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SessionDetailsPage');
        this.sessionService.getSession().subscribe(
            data => {
                this.session = data.json().session;
                console.log(this.session)
            },
            err => console.log(err)
        )
    }

}
