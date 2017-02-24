import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {User} from '../models/user';

/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

@Injectable()
export class AuthService {
  currentUser: any;

  constructor(private http: Http ) {}


  /*
  login(emailAddress: string, password: string) {
    return this.http.post('http://api.teamjs.xyz/login', JSON.stringify({
      emailAddress: emailAddress,
      password: password
    }))
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        console.log(response);
        let user = response.json();
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
      });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

  */


  public login(credentials){
    if( credentials.email == null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return this.http.post('http://api.teamjs.xyz/login',
      JSON.stringify({
        emailAddress: credentials.email,
        password: credentials.password
      })).map((response:Response) => {
        console.log(response);
        this.currentUser = response.json();
        console.log(this.currentUser);
      })
    }
  }

  public register(user:User) {
    return this.http.post('http://api.teamjs.xyz/register', user, this.jwt());
    /*
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      // At this point store the credentials to your backend!
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }*/
  }

  public getUserInfo() : User {
    return this.currentUser;
  }
 
  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }

  private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }

}
