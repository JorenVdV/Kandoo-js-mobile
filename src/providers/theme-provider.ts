import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { AuthService } from './auth-service';
import { URLService } from './url-service';

import { Theme } from '../models/theme';

/*
  Generated class for the ThemeProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ThemeProvider {

  constructor(public http: Http, private auth:AuthService, private urlService:URLService) {
  }

  readTheme(id: string): Observable<Theme> {
    return this.http
      .get(this.urlService.getURL(`theme/${id}`),
          {headers: this.urlService.getSignedHeaders()})
      .map((res: Response) => res.json().theme)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  readThemeSessions(id: string): Observable<Theme>{
    return this.http
      .get(this.urlService.getURL(`user/${this.auth.getUserID()}/sessions`),
          {headers: this.urlService.getSignedHeaders()})
      .map((res:Response) => res.json().sessions)
      .catch((error:any)=> Observable.throw(error.json().error || 'Server error'));
  }

  readThemes(): Observable<Theme[]> {
        return this.http
            .get(this.urlService.getURL(`user/${this.auth.getUserID()}/themes`),
                {headers: this.urlService.getSignedHeaders()})
            .map((res: Response) => res.json().themes)
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

}
