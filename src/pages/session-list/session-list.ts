import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SessionProvider } from '../../providers/session-provider';
import { Session } from '../../models/session';

import { SessionDetailPage } from '../session-detail/session-detail';

/*
  Generated class for the Session page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-session',
  templateUrl: 'session-list.html'
})
export class SessionListPage {
  sessions: Session[];
  themeId: string;
  session = new Session();
  userId: string;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private sessionprov:SessionProvider ) {
      this.getSessions();
  }

  getSessions(): void {
    this.sessionprov.readParticipantSessions().subscribe(
      sessions => {
        this.sessions = sessions
      },
      err => { console.log(err); }
    
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SessionPage');
  }

  selectSession(session:Session){
    this.navCtrl.push(SessionDetailPage, {session:Session});
  }

}
