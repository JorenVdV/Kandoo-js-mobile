import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from '../models/user';
import { URLService } from '../providers/url-service';

/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

@Injectable()
export class AuthService {
  currentUser: any;
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http, private urlService: URLService) {}

  login(emailAddress: string, password: string) {
    return this.http.post(this.urlService.getURL(`login`), 
      JSON.stringify({
        emailAddress: emailAddress,
        password: password
      }), {headers: this.urlService.getHeaders()})
    .map((response: Response) => {
      let user = response.json().user;
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      this.currentUser = user;
      if (response.status == 200)
        return response;
      });
  }

  public register(user:any) {
    return this.http.post(this.urlService.getURL('register'), user, this.jwt());
  }

    public getUserInfo():User {
        return this.currentUser;
    }

    public logout() {
        return Observable.create(observer => {
            this.currentUser = null;
            observer.next(true);
            observer.complete();
        });
    }

    public LoggedIn() {
        return this.currentUser != null;
    }

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({'Authorization': 'Bearer ' + currentUser.token});
            return new RequestOptions({headers: headers});
        }
    }

    public changePassword(oldPassword, newPassword) {
        this.currentUser.password = newPassword;
        return this.http.put(this.urlService.getURL(`user/${this.currentUser._id}/update`),
            JSON.stringify({
                password: newPassword,
                originalPassword: oldPassword
            }), {headers: this.headers})
            .map((response:Response) => {
                this.setUserWithResponse(response);
            })
    }

    public getUserID(){
        return this.currentUser._id;
    }
    
    public updateUser(user:User) {
        return this.http.put(this.urlService.getURL(`user/${this.currentUser._id}/update`),
            JSON.stringify(user), {headers: this.headers})
            .map((response:Response) => {
                this.currentUser = response.json();
            })
    }

    private setUserWithResponse(response:Response) {
        this.currentUser = response.json().user;
    }
}
