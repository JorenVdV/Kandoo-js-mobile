import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';

import { Session } from '../../../models/session';
import { SessionProvider } from '../../../providers/session-provider';
import { InvitedSessionDetailsPage} from '../../invited-session-details/invited-session-details';

/*
  Generated class for the InvitedSession page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-invited-session',
  templateUrl: 'invited-session-list.html'
})
export class InvitedSessionListPage {

  sessions:Session[];
  constructor(public navCtrl: NavController, 
  public navParams: NavParams,
  private sessionprov: SessionProvider,
  private app: App) {
    this.sessionprov.readInvitedSessions()
    .subscribe(
      sessions => {
        this.sessions = sessions;
      }, error => {
        console.log(error);
      }
    )
  }

  ionViewDidLoad() {
  }

  selectSession(session:Session){
    this.app.getRootNav().push(InvitedSessionDetailsPage, {session:session});
  }

}
