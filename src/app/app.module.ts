import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ChangeAccountDetailsPage } from '../pages/change-account-details/change-account-details';
import { AccountDetailsPage } from '../pages/account-details/account-details';
import { OverviewPage } from '../pages/overview/overview';
import {ChangeAccountPasswordPage} from "../pages/change-account-password/change-account-password";
import { SessionPage } from '../pages/session/session';
import { ThemePage } from '../pages/theme/theme';

import { AuthService } from '../providers/auth-service';
import { URLService } from '../providers/url-service';
import { UserService } from '../providers/user-service';
import {SessionDetailsPage} from "../pages/session-details/session-details";
import {GamePage} from "../pages/session-details/game/game";
import {PlayersPage} from "../pages/session-details/session-players/session-players";
import {SessionService} from "../providers/session-service";
import {SessionInformationPage} from "../pages/session-details/session-information/session-information";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    AccountDetailsPage,
    ChangeAccountDetailsPage,
    ChangeAccountPasswordPage,
    OverviewPage,
    SessionPage,
    SessionDetailsPage,
    GamePage,
    PlayersPage,
    SessionInformationPage,
    ThemePage
  ],
  imports: [
    IonicModule.forRoot(MyApp,{tabsPlacement:'bottom'})
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
    OverviewPage,
    SessionPage,
    SessionDetailsPage,
    GamePage,
    PlayersPage,
    SessionInformationPage,
    ThemePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, AuthService, URLService, UserService, SessionService]
})
export class AppModule {}
