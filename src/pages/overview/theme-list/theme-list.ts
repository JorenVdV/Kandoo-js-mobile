import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';

import { Theme } from '../../../models/theme';
import { ThemeProvider } from '../../../providers/theme-provider';
import { ThemeDetailsPage } from '../../theme-details/theme-details';

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
     private themeprov:ThemeProvider,
     private appCtrl: App) {
      this.loadThemes();
     }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ThemePage');
  }

  selectTheme(theme:Theme){
    this.appCtrl.getRootNav().push(ThemeDetailsPage, {theme:theme});
  }
  
  doRefresh(refresher){
    this.loadThemes();
    refresher.complete();
  }

  private loadThemes(){
    this.themeprov.readThemes().subscribe(
        themes => {
          this.themes = themes
        },
        err => {
          console.log(err);
        }
      );
  }

}
