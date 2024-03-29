import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

import { Session } from '../../models/session';
import { SessionProvider } from '../../providers/session-provider';

/*
  Generated class for the InvitedSessionDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-invited-session-details',
  templateUrl: 'invited-session-details.html'
})
export class InvitedSessionDetailsPage {
  session:Session;
  constructor(public navCtrl: NavController, 
  public navParams: NavParams,
  private sessionprov: SessionProvider,
  public menuctrl: MenuController) {
    this.session = this.navParams.get('session');
    this.menuctrl.swipeEnable(false);
  }

  ionViewDidLoad() {
  }


  acceptInvite(){
    this.sessionprov.acceptInvite(this.session).subscribe(
      () => {
        this.navCtrl.pop();
      } 
    );
  }

}
