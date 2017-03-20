import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Session} from "../../../models/session";
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
    private votes: any;//{cardId:string, userId:string, time:any}[];

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private auth: AuthService,
                private gamedata: GameData) {
        this.votes = [];
        this.session = this.navParams.data;
        if (this.session.currentUser) {
            let currUserIndex = this.session.participants.findIndex(user => user._id.toString() === this.auth.getUserID().toString());
            let nextUserIndex = (currUserIndex < this.session.participants.length - 1) ? currUserIndex + 1 : 0;
            this.gamedata.setup(this.session._id, this.session.participants[nextUserIndex]._id);
            this.gamedata.circleCards.subscribe(
                data => {
                    let dataParsed = {cardId: data.cardID, user: data.user, time: data.time};
                    if (this.votes.find(v => v.time === dataParsed.time) ? false : true) {//om een of andere reden werkt een include hier niet?!
                        this.votes.push(dataParsed);
                        this.setPriority(data.cardID);
                        this.session.currentUser = data.nextUser;
                    }
                },
                error => console.error(error)
            );
            this.gamedata.circleTurn.subscribe(
                data => {
                    let currUserIndex = this.session.participants.findIndex(user => user._id == data.userID);
                    this.session.currentUser = this.session.participants[currUserIndex];
                },
                error => console.error(error)
            );
        }
    }


    ionViewDidLoad() {
        console.log('ionViewDidLoad GamePage');
    }

    voteOnCard(cardId) {
        if (!this.isCurrentUsersTurn()) return;
        this.gamedata.playturn(cardId);
        this.gamedata.nextUser();
    }

    canCurrentUserPlay() {
        return this.session.status === 'started' && this.isCurrentUsersTurn();
    }

    isCurrentUsersTurn() {
        return this.auth.getUserID() === this.session.currentUser._id;
    }

    public getGameInfo() {
        if (this.session.status === 'created') return 'The session is not started yet.';
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
        return (this.session.circleType === 'threat' ? 'red' : 'blue') + priority;
    }

    isPriorityMaxed(priority) {
        return this.session.amountOfCircles <= priority - 1;
    }

    getHeaderColor() {
        if (this.session.status === 'created') return 'primary';
        return this.isCurrentUsersTurn() ? "secondary" : "danger";
    }

    private getVotesOfCard(cardId) {
        return this.votes.filter(v => v.cardId === cardId).length;
    }

    private setPriority(cardId) {
        //let test = this.session.cardPriorities.find(c=> c.card._id === cardId)
        //console.log(test)
        this.session.cardPriorities.find(c => c.card._id === cardId).priority = this.getVotesOfCard(cardId);
    }
}
