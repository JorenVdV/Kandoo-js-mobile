import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import firebase from 'firebase';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { AccountDetailsPage } from '../pages/account-details/account-details';
import { ChangeAccountDetailsPage } from '../pages/change-account-details/change-account-details'
import { OverviewPage } from '../pages/overview/overview';
import { ChangeAccountPasswordPage} from "../pages/change-account-password/change-account-password";

import {SessionDetailsPage} from "../pages/session-details/session-details";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // Setup firebase
    const firebaseConfig = {
      apiKey: "AIzaSyBuGaEfvvLewMVp7VA8qEp9WbHWDKTKO-s",
      authDomain: "kandoechat.firebaseapp.com",
      databaseURL: "https://kandoechat.firebaseio.com",
      storageBucket: "kandoechat.appspot.com",
      messagingSenderId: "812779979995"
    };
    firebase.initializeApp(firebaseConfig);

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Overview', component:  OverviewPage},
      { title: 'Login', component: LoginPage },
      { title: 'Account', component: ChangeAccountDetailsPage},
      { title: 'AccountDetails', component: AccountDetailsPage},
      { title: 'SessionDetails', component: SessionDetailsPage}
      //{ title: 'Register', component: RegisterPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
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
