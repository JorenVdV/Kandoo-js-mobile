import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Session} from "../../../models/session";
import {User} from "../../../models/user";
import {AuthService} from "../../../providers/auth-service";
import {SessionProvider} from "../../../providers/session-provider";

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
  // nextVoter: User;

  constructor(public navCtrl: NavController,
              private auth: AuthService,
              private sessionProvider: SessionProvider,
              public navParams: NavParams) {
    this.session = this.navParams.data;
    this.creator = this.session.participants.find(u=>u._id===this.session.creator);
    // this.nextVoter = this.session.participants.find(u=>u._id===this.session.currentUser)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SessionInformationPage');
  }

  getColorCircleType(){
    return this.session.circleType === 'threat'?'red5':'blue5';
  }

  getColorStatus(){
    switch (this.session.status){
      case 'created': return 'primary';
      case 'started': return 'secondary';
      case 'paused': return 'warning';
      case 'finished': return 'danger';
      default: return '';
    }
  }

  isCurrentUserOrganiser(){
    return this.session.theme.organisers.includes(this.auth.getUserID());
  }

  startSession(){
    this.sessionProvider.startSession(this.session._id).subscribe(
        data => this.session.status = 'started',
        err => console.error(err)
    )
  }

}
