import { Component } from '@angular/core';

import { NavController, MenuController } from 'ionic-angular';
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
    public auth: AuthService,
    public menuctrl: MenuController) {
      this.menuctrl.swipeEnable(false);
  }

  private login(){
    this.navCtrl.push(LoginPage);
  }

  private register() {
    this.navCtrl.push(RegisterPage);
  }

  

}
