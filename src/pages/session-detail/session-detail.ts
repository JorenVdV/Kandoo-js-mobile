import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Session } from '../../models/session';

/*
  Generated class for the SessionDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-session-detail',
  templateUrl: 'session-detail.html'
})
export class SessionDetailPage {
  session : Session;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SessionDetailPage');
  }

}
