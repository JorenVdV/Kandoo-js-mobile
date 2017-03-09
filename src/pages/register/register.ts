import { Component } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { UserService } from '../../providers/user.service';
import { AuthService } from '../../providers/auth-service';
import { LoginPage } from '../login/login';

/*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  createSuccess = false;
  registerCredentials = {
    firstname: '',
    lastname: '', 
    organisation: '',
    emailAddress: '', 
    password: ''
  };

  constructor(private nav: NavController, private authService: AuthService, private alertCtrl: AlertController) {}


  public register() {
    this.authService.register(this.registerCredentials)
    .map(response => {
      if(response.status === 201){return response;}
    })
      .subscribe(       
        response => {
          this.showPopup("Success", "Account created.");
          this.nav.popToRoot();
        }, error => {
          this.showPopup("Error", "Problem creating account.");
        }
      );
    
    /*this.auth.register(this.registerCredentials).subscribe(success => {
      if (success) {
        this.createSuccess = true;
          this.showPopup("Success", "Account created.");
      } else {
        this.showPopup("Error", "Problem creating account.");
      }
    },
    error => {
      this.showPopup("Error", error);
    });*/
  }
 
  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
       {
         text: 'OK',
         handler: data => {
           if (this.createSuccess) {
             this.nav.popToRoot();
           }
         }
       }
     ]
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
