import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {AuthService} from "../../providers/auth-service";
import {LoginPage} from "../login/login";
import {HomePage} from "../home/home";
import {AccountDetailsPage} from "../account-details/account-details";
import {User} from "../../models/user";

/*
 Generated class for the ChangeAccountDetails page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-change-account-details',
  templateUrl: 'change-account-details.html'
})
export class ChangeAccountDetailsPage {
  private user: User;
  private lastUpdatedUser: User;


  constructor(public navCtrl:NavController, public navParams:NavParams, private auth:AuthService) {
    if (!this.auth.LoggedIn()){
      this.navCtrl.setRoot(LoginPage);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangeAccountDetailsPage');
    this.user = this.auth.getUserInfo();
    this.lastUpdatedUser = this.user;
  }

  saveChanges() {
    if(this.user === this.lastUpdatedUser){
      //juiste manier?
      
    }
    else {
      this.auth.updateUser(this.user).subscribe(
          data => {
            this.navCtrl.setRoot(AccountDetailsPage)
          },
          err => console.log(err));
    }
  }
}
