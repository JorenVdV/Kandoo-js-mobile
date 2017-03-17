import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { MyApp } from './app.component';


import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ChangeAccountDetailsPage } from '../pages/change-account-details/change-account-details';
import { AccountDetailsPage } from '../pages/account-details/account-details';
import { OverviewPage } from '../pages/overview/overview';
import { ChangeAccountPasswordPage } from "../pages/change-account-password/change-account-password";
import { SessionListPage } from '../pages/overview/session-list/session-list';
import { ThemeListPage } from '../pages/overview/theme-list/theme-list';
import { InvitedSessionListPage } from '../pages/overview/invited-session-list/invited-session-list';
import { SessionDetailsPage } from '../pages/session-details/session-details';
import { SessionChatPage } from '../pages/session-details/session-chat/session-chat';
import { GamePage } from '../pages/session-details/game/game';
import { PlayersPage } from '../pages/session-details/session-players/session-players';
import { SessionInformationPage } from '../pages/session-details/session-information/session-information';
import { ThemeDetailsPage } from '../pages/theme-details/theme-details';
import { ThemeDetailsInfoPage } from '../pages/theme-details/theme-details-info/theme-details-info';
import { ThemeDetailsSessionsPage } from '../pages/theme-details/theme-details-sessions/theme-details-sessions';

import { SocketService } from '../providers/socket-service';
import { AuthService } from '../providers/auth-service';
import { URLService } from '../providers/url-service';
import { UserService } from '../providers/user-service';
import { SessionProvider } from '../providers/session-provider';
import { ThemeProvider } from '../providers/theme-provider';
import { ChatData } from '../providers/chat-data';
import { GameData } from '../providers/game-data';

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
    SessionDetailsPage,
    GamePage,
    PlayersPage,
    SessionInformationPage,
    SessionListPage,
    ThemeListPage,
    InvitedSessionListPage,
    ThemeDetailsPage,
    ThemeDetailsInfoPage,
    ThemeDetailsSessionsPage,
    SessionChatPage
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
    SessionDetailsPage,
    GamePage,
    PlayersPage,
    SessionInformationPage,
    SessionListPage,
    ThemeListPage,
    InvitedSessionListPage,
    ThemeDetailsPage,
    ThemeDetailsInfoPage,
    ThemeDetailsSessionsPage,
    SessionChatPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
     AuthService, 
     URLService, 
     UserService, 
     SocketService,
     SessionProvider, 
     ThemeProvider, 
     Storage, 
     ChatData,
     GameData
     ]
})
export class AppModule {}
