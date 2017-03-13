import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ChangeAccountDetailsPage } from '../pages/change-account-details/change-account-details';
import { AccountDetailsPage } from '../pages/account-details/account-details';
import { OverviewPage } from '../pages/overview/overview';
import { ChangeAccountPasswordPage } from "../pages/change-account-password/change-account-password";
import { SessionListPage } from '../pages/session-list/session-list';
import { ThemeListPage } from '../pages/theme-list/theme-list';
import { InvitedSessionListPage } from '../pages/invited-session-list/invited-session-list';
import { SessionDetailPage } from '../pages/session-detail/session-detail';

import { AuthService } from '../providers/auth-service';
import { URLService } from '../providers/url-service';
import { UserService } from '../providers/user-service';
import { SocketService } from '../providers/socket-service';
import { SessionProvider } from '../providers/session-provider';
import { ThemeProvider } from '../providers/theme-provider';


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
    SessionListPage,
    ThemeListPage,
    InvitedSessionListPage,
    SessionDetailPage
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
    SessionListPage,
    ThemeListPage,
    InvitedSessionListPage,
    SessionDetailPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
     AuthService, URLService, UserService, SocketService,
    SessionProvider, ThemeProvider]
})
export class AppModule {}
