import { Component, ViewChild  } from '@angular/core';
import { NavController, NavParams, Content } from 'ionic-angular';

import { Session } from '../../../models/session';
import { ChatMessage } from '../../../models/chatmessage';

import { ChatData } from '../../../providers/chat-data';
import { AuthService } from '../../../providers/auth-service';

/*
  Generated class for the SessionChat page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-session-chat',
  templateUrl: 'session-chat.html'
})
export class SessionChatPage {
  @ViewChild(Content) content: Content;
  public messages: any[] = [];
  public user: string;
  public session: Session;
  text: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public chatdata: ChatData,
    public auth: AuthService) {
      
      this.user = this.auth.getUserInfo().firstname+' '+this.auth.getUserInfo().lastname;
      this.session = this.navParams.data;
      this.chatdata.setup(this.session._id);
      this.chatdata.messages.subscribe(
        data => {
          this.messages.push(data);
          if(this.content)this.content.scrollToBottom(0);
        },
        error => console.log(error)
        );
  }

  addMessage(){
    this.chatdata.sendmessage(new ChatMessage(this.user, this.text));
    this.text='';
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad SessionChatPage');
  }

  ngAfterViewChecked(){
     if(this.content)this.content.scrollToBottom();
  }

}
