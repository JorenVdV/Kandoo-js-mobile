import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, MenuController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
// import { SocketService } from '../../providers/socket-service';

import { RegisterPage } from '../register/register';
import { OverviewPage } from '../overview/overview';


/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  loading: Loading;
  registerCredentials = {email: '', password: ''}

  constructor(private nav: NavController, 
    private auth: AuthService, 
    private alertCtrl: AlertController, 
    private loadingCtrl: LoadingController,
    public menuctrl: MenuController
    ) {
      this.menuctrl.swipeEnable(false);
      if(this.auth.LoggedIn()){
        this.nav.setRoot(OverviewPage);
      }
    }


  public createAccount() {
    this.nav.push(RegisterPage);
  }

  public login() {
    this.showLoading()
    this.auth.login(this.registerCredentials.email, this.registerCredentials.password)
    .subscribe(
      data => {
        setTimeout(() => {
          this.loading.dismiss();
          this.nav.setRoot(OverviewPage);
        });
      },
      error => {
        this.showError(error);
      });
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }

  showError(text) {
    setTimeout(() => {
      this.loading.dismiss();
    });

    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }


  ionViewDidLoad() {
  }

}
