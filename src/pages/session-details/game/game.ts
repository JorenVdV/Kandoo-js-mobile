import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Session} from "../../../models/session";
import {SessionProvider} from "../../../providers/session-provider";
import {AuthService} from "../../../providers/auth-service";
import {GameData} from "../../../providers/game-data";

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
    private votes : {cardId:string, userId: string, time: Date}[];

    constructor(
        public navCtrl:NavController,
        public navParams:NavParams,
        private sessionProvider:SessionProvider,
        private auth:AuthService,
        private gamedata:GameData        
        ) {
        this.votes = [];
        this.session = this.navParams.data;
        this.gamedata.setup(this.session._id, this.session.currentUser._id);
        this.gamedata.circleCards.subscribe(
            data => {
                this.votes.push({cardId:data.cardID, userId:data.userID, time:data.time});
            },
            error => console.log(error)
        );
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad GamePage');
    }

    voteOnCard(cardId?) {
        if (!this.isCurrentUsersTurn()) return;
        this.gamedata.playturn(cardId);
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

    getHeaderColor(){
        return this.isCurrentUsersTurn()?"secondary":"danger";
    }

    getVotes(cardId){
        //todo
        console.log(this.votes)
        console.log(cardId)
        console.log(this.votes.filter(v=> v.cardId === cardId));
        return this.votes.filter(v=> v.cardId === cardId).length;
    }
}
