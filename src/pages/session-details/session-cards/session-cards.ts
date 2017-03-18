import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SessionCardsSelectPage } from '../session-cards-select/session-cards-select';

/*
  Generated class for the SessionCards page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-session-cards',
  templateUrl: 'session-cards.html'
})
export class SessionCardsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('kek');
  }

  private Edit(){
    this.navCtrl.push(SessionCardsSelectPage);
  }

}
