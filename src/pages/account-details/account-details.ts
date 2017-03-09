import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';

import { ChangeAccountDetailsPage } from '../change-account-details/change-account-details'
import { LoginPage } from '../login/login';

import { User } from '../../models/user';
/*
  Generated class for the AccountDetails page.

  See http://ionicframework.com/docs/v2/comp
  onents/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-account-details',
  templateUrl: 'account-details.html'
})
export class AccountDetailsPage {
  public user : User;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private auths: AuthService) {
    if (!this.auths.LoggedIn()){
      this.navCtrl.setRoot(LoginPage);
    } 
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountDetailsPage');
  }

  public Edit(){
    this.navCtrl.setRoot(ChangeAccountDetailsPage)
  }

}
