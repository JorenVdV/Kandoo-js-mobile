import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { OverviewPage } from '../overview/overview';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public auths: AuthService) {
      if(this.auths.LoggedIn){
        this.navCtrl.setRoot(OverviewPage);
      }
  }

  private login(){
    this.navCtrl.push(LoginPage);
  }

  private register() {
    this.navCtrl.push(RegisterPage);
  }

  

}
