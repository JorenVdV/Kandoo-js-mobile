import {Component, Input} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {GamePage} from "./game/game";
import { SessionChatPage } from './session-chat/session-chat';
import {Session} from "../../models/session";
import {SessionInformationPage} from "./session-information/session-information";
import {SessionProvider} from "../../providers/session-provider";
import {SessionCardsSelectPage} from "./session-cards-select/session-cards-select";

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
    cardsRoot:any = SessionCardsSelectPage;
    chatRoot:any = SessionChatPage;
    informationRoot:any = SessionInformationPage;

    public session = new Session;
    constructor(public navCtrl:NavController, public navParams:NavParams) {
        this.session = this.navParams.data;
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SessionDetailsPage');
    }

}
