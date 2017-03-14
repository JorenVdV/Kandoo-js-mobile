import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Theme } from '../../../models/theme';
import { ThemeProvider } from '../../../providers/theme-provider';

/*
  Generated class for the Theme page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-theme',
  templateUrl: 'theme-list.html'
})
export class ThemeListPage {
  themes: Theme[];
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private themeprov:ThemeProvider) {
      this.themeprov.readThemes().subscribe(
        themes => {
          this.themes = themes
        },
        err => {
          console.log(err);
        }
      );
     }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThemePage');
  }

}
