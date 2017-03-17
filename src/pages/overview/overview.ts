import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AccountDetailsPage } from '../account-details/account-details';
import { SessionListPage } from './session-list/session-list';
import { ThemeListPage } from './theme-list/theme-list';
import { InvitedSessionListPage } from './invited-session-list/invited-session-list';
/*
  Generated class for the Overview page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-overview',
  templateUrl: 'overview.html'
})
export class OverviewPage {

  tab1Root: any = ThemeListPage;
  tab2Root: any = SessionListPage;
  tab3Root: any = InvitedSessionListPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    // console.log('ionViewDidLoad OverviewPage');
  }

  private openAccount(){
    this.navCtrl.push(AccountDetailsPage);
  }

}
