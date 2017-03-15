import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Session} from "../../../models/session";
import {SessionProvider} from "../../../providers/session-provider";
import {AuthService} from "../../../providers/auth-service";

/*
  Generated class for the Game page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})
export class GamePage {
  private session = new Session;

  constructor(public navCtrl: NavController, public navParams: NavParams, private sessionProvider: SessionProvider, private auth:AuthService) {
    this.session = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
  }
  
  voteOnCard(cardId){
    if(!this.isCurrentUsersTurn()) return;
    this.sessionProvider.playTurn(this.session._id, cardId).subscribe(
        //todo
    );
  }
  
  isCurrentUsersTurn(){
    return this.auth.getUserID() === this.session.currentUser;
  }

  public getGameInfo(){
    if(this.isCurrentUsersTurn()){
      return 'It is your turn';
    }
    else {
      let user = this.session.participants.find(u => u._id === this.session.currentUser)
      return user.firstname + " " + user.lastname +"'s turn"
    }
  }

  comp(a,b){return b.priority-a.priority}

}
