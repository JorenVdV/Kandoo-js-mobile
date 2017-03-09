import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { LoginPage } from '../login/login';
import { AccountDetailsPage } from '../account-details/account-details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public auths: AuthService) {

  }

  openAccount(){
    if(this.auths.LoggedIn()){
      this.navCtrl.setRoot(AccountDetailsPage);
    }else{
      this.navCtrl.setRoot(LoginPage);
    }
  }

}
