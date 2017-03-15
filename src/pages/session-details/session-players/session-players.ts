import {Component, Input} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Session} from "../../../models/session";
import {User} from "../../../models/user";

/*
  Generated class for the SessionPlayers page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-session-players',
  templateUrl: 'session-players.html'
})
export class PlayersPage {
  private players : User[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.players = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SessionPlayersPage');
  }

}
