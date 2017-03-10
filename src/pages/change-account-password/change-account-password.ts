import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AccountDetailsPage} from "../account-details/account-details";
import {AuthService} from "../../providers/auth-service";
import {LoginPage} from "../login/login";

/*
  Generated class for the ChangeAccountPassword page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-change-account-password',
  templateUrl: 'change-account-password.html'
})
export class ChangeAccountPasswordPage {
  email:string;
  oldPassword:string;
  newPassword:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth:AuthService) {
    if (!this.auth.LoggedIn()){
      this.navCtrl.setRoot(LoginPage);
    }
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangeAccountPasswordPage');
    this.email = this.auth.getUserInfo().emailAddress;
  }

  changePassword() {
    this.auth.changePassword(this.oldPassword, this.newPassword).subscribe(
        data => {
          this.navCtrl.setRoot(AccountDetailsPage)
        },
        err => {console.log(err)}
    );
  }

}
