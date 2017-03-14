import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Session } from "../../../models/session";


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
  private session : Session;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
    this.session = this.navParams.data;
    console.log(this.session);
  }

}
