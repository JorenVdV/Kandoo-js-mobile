import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { AccountDetailsPage } from '../pages/account-details/account-details';
import { ChangeAccountDetailsPage } from '../pages/change-account-details/change-account-details'
import { OverviewPage } from '../pages/overview/overview';
import {ChangeAccountPasswordPage} from "../pages/change-account-password/change-account-password";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Overview', component:  OverviewPage},
      { title: 'Login', component: LoginPage },
      { title: 'Account', component: ChangeAccountDetailsPage},
      { title: 'AccountDetails', component: AccountDetailsPage},
      { title: 'ChangePassword', component: ChangeAccountPasswordPage}
      //{ title: 'Register', component: RegisterPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
