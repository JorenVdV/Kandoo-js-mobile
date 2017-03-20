import {Component} from '@angular/core';
import {NavController, NavParams, MenuController} from 'ionic-angular';
import {AuthService} from "../../providers/auth-service";
import {LoginPage} from "../login/login";
import {HomePage} from "../home/home";
import {AccountDetailsPage} from "../account-details/account-details";
import {User} from "../../models/user";

/*
 Generated class for the ChangeAccountDetails page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-change-account-details',
    templateUrl: 'change-account-details.html'
})
export class ChangeAccountDetailsPage {
    private user = new User;
    
    constructor(public navCtrl:NavController,
    public navParams:NavParams, 
    private auth:AuthService,
    public menuctrl: MenuController) {
        this.menuctrl.swipeEnable(false);
        if (!this.auth.LoggedIn()) {
            this.navCtrl.setRoot(LoginPage);
        }
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ChangeAccountDetailsPage');
        this.user = this.auth.getUserInfo();
    }

    saveChanges() {
        //check if model changed
        this.auth.updateUser(this.user).subscribe(
            data => {
                this.navCtrl.setRoot(AccountDetailsPage)
            },
            err => console.log(err));
    }
}
