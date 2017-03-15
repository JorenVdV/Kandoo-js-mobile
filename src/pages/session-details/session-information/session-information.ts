import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Session} from "../../../models/session";
import {User} from "../../../models/user";

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
  creator : User;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.session = this.navParams.data;
    this.creator = this.session.participants.find(u=>u._id===this.session.creator);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SessionInformationPage');
  }

  getColorCircleType(){
    return this.session.circleType === 'threat'?'red5':'blue5';
  }

  getColorStatus(){
    switch (this.session.status){
      case 'started': return 'secondary';
      
    }
  }

}
