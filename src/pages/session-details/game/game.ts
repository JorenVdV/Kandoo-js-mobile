import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Session} from "../../../models/session";
import {SessionProvider} from "../../../providers/session-provider";
import {AuthService} from "../../../providers/auth-service";

/*
 Generated class for the Game page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-game',
    templateUrl: 'game.html'
})
export class GamePage {
    private session = new Session;
    private secondsLeft : number;
    private timer:any;

    constructor(public navCtrl:NavController, public navParams:NavParams, private sessionProvider:SessionProvider, private auth:AuthService) {
        this.session = this.navParams.data;
        this.secondsLeft = this.session.turnDuration/1000;
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad GamePage');
        this.startGame();
    }

    voteOnCard(cardId?) {
        if (!this.isCurrentUsersTurn()) return;
        this.sessionProvider.playTurn(this.session._id, cardId).subscribe(
            data => {
                console.log(data)
                this.session.cardPriorities = data.cardPriorities;
                this.session.currentUser = data.currentUser;
            },
            err => console.error(err)
        );
    }
    
    canCurrentUserPlay(){
        return this.session.status === 'started' && this.isCurrentUsersTurn();
    }

    isCurrentUsersTurn() {
        return this.auth.getUserID() === this.session.currentUser._id;
    }

    public getGameInfo() {
        if (this.isCurrentUsersTurn()) {
            return 'It is your turn';
        }
        else {
            let user = this.session.participants.find(u => u._id === this.session.currentUser._id);
            return user.firstname + " " + user.lastname + "'s turn";
        }
    }

    comp(a, b) {
        return b.priority - a.priority
    }

    getCardColorCode(priority) {
        return (this.session.circleType === 'threat'?'red':'blue')+priority;
    }
    
    isPriorityMaxed(priority){
        return this.session.amountOfCircles <= priority;
    }

    startGame(){
        if(!this.isCurrentUsersTurn())return;
        this.timer = setInterval(()=>{
            this.secondsLeft--;
            if(this.secondsLeft <=0 ){this.endGame();}
        }, 1000)
    }

    endGame(){
        clearInterval(this.timer);
        this.voteOnCard();
    }

    getHeaderColor(){
        if(this.isCurrentUsersTurn()) return "secondary";
        return "danger";
    }
}
