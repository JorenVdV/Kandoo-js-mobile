import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Session} from "../../../models/session";

/*
  Generated class for the SessionInformation page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-session-information',
  templateUrl: 'session-information.html'
})
export class SessionInformationPage {
  session = new Session;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SessionInformationPage');
    this.session = this.navParams.data;
    console.log(this.navParams);
    console.log(this.session)
  }

}
