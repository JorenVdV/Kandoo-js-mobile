import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { AuthService } from '../providers/auth-service';
import { ChangeAccountDetailsPage } from '../pages/change-account-details/change-account-details';
import { AccountDetailsPage } from '../pages/account-details/account-details';
import { OverviewPage } from '../pages/overview/overview';
import {ChangeAccountPasswordPage} from "../pages/change-account-password/change-account-password";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    AccountDetailsPage,
    ChangeAccountDetailsPage,
    ChangeAccountPasswordPage,
    OverviewPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    AccountDetailsPage,
    ChangeAccountDetailsPage,
    ChangeAccountPasswordPage,
    OverviewPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, AuthService]
})
export class AppModule {}
