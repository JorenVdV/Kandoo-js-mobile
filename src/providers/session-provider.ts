import { Injectable } from '@angular/core';
import {Headers, Http, Response, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";

import { URLService } from '../providers/url-service';
import { AuthService } from '../providers/auth-service';
import { Session } from "../models/session";
import { Theme } from "../models/theme";
import { Card } from "../models/card";

/*
  Generated class for the SessionProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SessionProvider {
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(public http: Http, private urlService: URLService, private auth:AuthService) {
  }

  createSession(session: Session, themeID:string): Observable<Session>{
      if(!session.cardsCanBeAdded){
        session.cardsCanBeAdded = false
      }

      return this.http
        .post(this.urlService.getURL(`theme/${themeID}/session`), JSON.stringify(
          {
              title: session.title,
              description: session.description,
              circleType: session.circleType,
              minCardsPerParticipant: session.minCardsPerParticipant,
              maxCardsPerParticipant: session.maxCardsPerParticipant,
              cardsCanBeReviewed: session.cardsCanBeReviewed,
              cardsCanBeAdded: session.cardsCanBeAdded,
              creator: this.auth.getUserID()

          }), {headers: this.urlService.getHeaders()})
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  readSession(id: string): Observable<Session> {
    return this.http
      .get(this.urlService.getURL(`session/${id}`))
      .map((res: Response) => res.json().session)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  readSessions(id: string): Observable<Session[]> {
    return this.http
      .get(this.urlService.getURL(`theme/${id}/sessions`))
      .map((res: Response) => res.json().sessions)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  readParticipantSessions(): Observable<Session[]> {
    return this.http
      .get(this.urlService.getURL(`user/${this.auth.getUserID()}/sessions/participating`))
      .map((res: Response) => res.json().sessions)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  readThemeSessions(id: string): Observable<Session[]> {
    return this.http
      .get(this.urlService.getURL(`theme/${id}/sessions`))
      .map((res: Response) => res.json().sessions)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  readInvitedSessions(): Observable<Session[]> {
    return this.http
      .get(this.urlService.getURL(`user/${this.auth.getUserID()}/sessions/invited`))
      .map((res: Response) => res.json().sessions)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  acceptInvite(session: Session): Observable<Session[]> {
    return this.http
      .put (this.urlService.getURL(`session/${session._id}/accept`), 
        JSON.stringify({userId: this.auth.getUserID()}),
        {headers: this.urlService.getHeaders()})
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

    //todo remove this function
    public getSession(){
        return this.http.get(this.urlService.getURL(`session/58c11715d39fc40004d02569`));
    }
}