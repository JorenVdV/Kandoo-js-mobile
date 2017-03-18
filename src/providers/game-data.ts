import { Injectable } from '@angular/core';
import {Headers, Http, Response, RequestOptions} from '@angular/http';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";

import { AuthService } from './auth-service';
import { URLService } from './url-service';

import firebase from 'firebase';

/*
  Generated class for the GameData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GameData {
  private _sessionID: string;

  private _circleCardRef: any;
  private _circleCards$: any;

  private _nextPlayerID: string;
  private _circleTurnRef: any;
  private _circleTurn$: any;

  constructor(public http: Http,
    private auth: AuthService,
    private url: URLService) {
  }
   
  setup(sessionID:string, nextPlayerID:string){

    //handle card updates
    this._circleCardRef = firebase.database().ref(`circleCard/${sessionID}/turns`);
    this._circleCardRef.on('child_added', this.handleCardUpdate, this);
    this._circleCards$ = new ReplaySubject();

    // handle change of turns
    this._nextPlayerID = nextPlayerID;
    this._circleTurnRef = firebase.database().ref(`circleCard/${sessionID}/current`);
    this._circleTurnRef.on('child_added', this.handleTurnUpdate, this);
    this._circleTurn$ = new ReplaySubject();
  }

  get circleCards(){
    return this._circleCards$;
  }

  get circleTurn(){
    return this._circleTurn$;
  }

  handleCardUpdate(snap){
    try{
      this._circleCards$.next(snap.val());
    }catch(error){
      console.log(error);
    }
  }

  handleTurnUpdate(snap){
    try{
      this._circleTurn$.next(snap.val());
    }catch(error){
      console.log(error);
    }
  }


  playturn(cardID:string){
    this.http.put(
        this.url.getURL(`session/${this._sessionID}/turn`),
        JSON.stringify({userID:this.auth.getUserID(),cardID:cardID}),
        {headers: this.url.getHeaders()}
      )
      .map((res:Response) => res.json())
      .catch((error:any) =>  Observable.throw(error.json().error || 'Server error'))
      .subscribe();

    return this._circleCardRef.push({userID:this.auth.getUserID(),cardID:cardID}).key;
  }

  nextUser(){
    return this._circleTurnRef.push({userID:this._nextPlayerID}).key;
  }

}
