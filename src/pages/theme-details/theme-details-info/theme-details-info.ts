import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Theme } from '../../../models/theme';

/*
  Generated class for the ThemeDetailsInfo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-theme-details-info',
  templateUrl: 'theme-details-info.html'
})
export class ThemeDetailsInfoPage {


  theme = new Theme;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.theme = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThemeDetailsInfoPage');
  }

}
