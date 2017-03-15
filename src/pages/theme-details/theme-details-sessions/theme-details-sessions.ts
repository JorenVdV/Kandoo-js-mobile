import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Theme } from '../../../models/theme';
import { Session } from '../../../models/session';
import { SessionProvider } from '../../../providers/session-provider';

/*
  Generated class for the ThemeDetailsSessions page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-theme-details-sessions',
  templateUrl: 'theme-details-sessions.html'
})
export class ThemeDetailsSessionsPage {

  theme: Theme;
  sessions:Session[];
  constructor(public navCtrl: NavController, 
  public navParams: NavParams,
  private sessionprov: SessionProvider) {
    this.theme = this.navParams.data;
    this.sessionprov.readThemeSessions(this.theme._id)
      .subscribe(
        sessions => {
        this.sessions = sessions
        },
        err => { console.log(err); }
      );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThemeDetailsSessionsPage');
  }

}
