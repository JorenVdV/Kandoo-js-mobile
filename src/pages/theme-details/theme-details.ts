import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';

import { ThemeDetailsInfoPage } from './theme-details-info/theme-details-info';
import { ThemeDetailsSessionsPage } from './theme-details-sessions/theme-details-sessions';

import { Theme } from '../../models/theme';

/*
  Generated class for the ThemeDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-theme-details',
  templateUrl: 'theme-details.html'
})
export class ThemeDetailsPage {
  infoRoot:any = ThemeDetailsInfoPage;
  sessionRoot:any = ThemeDetailsSessionsPage;

  theme:Theme;
  constructor(public navCtrl: NavController,
   public navParams: NavParams,
   private app:App) {
     this.theme = this.navParams.get('theme');
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThemeDetailsPage');
    
  }



}
