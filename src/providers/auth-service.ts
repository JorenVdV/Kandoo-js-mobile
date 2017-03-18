import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

import { User } from '../models/user';
import { URLService } from '../providers/url-service';


@Injectable()
export class AuthService {
  private _currentUser: any;
  private _currentUserData: any;
  private _loggedIn = false;
//   private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http, private urlService: URLService, private storage: Storage) {
    this.storage.ready().then(()=> {
        // retrieve email and password
        this.storage.get('user').then(
            data => {
                let {emailAddress,password} = JSON.parse(data);
                this._loggedIn = true;
                this.login(emailAddress, password);
            }, error => console.log(error)
        )}
    )
  }

    login(emailAddress: string, password: string) {
        // store credentials 
        this.storage.ready().then(
            ()=>this.storage.set('user', JSON.stringify({ emailAddress: emailAddress, password: password}))
        );

        // retrieve id and token
        return this.http.post(this.urlService.getURL(`login`), 
            JSON.stringify({ emailAddress: emailAddress, password: password}),
            {headers: this.urlService.getHeaders()})
        .map((response: Response) => {
            let user = response.json();
            this._currentUser = user;
            // set signed headers for token usage
            this.urlService.setSignedheaders(this._currentUser.token);

            // retrieve current user data
            this.http.get( this.urlService.getURL(`user/${this._currentUser.userId}`),
                {headers:this.urlService.getSignedHeaders()})
            .map((response:Response) => {
                let userData = response.json().user;
            }).subscribe();  
        if (response.status == 200)
            return response;
        });
    }

    public register(user:any) {
        return this.http.post(this.urlService.getURL('register'), user, this.jwt());
    }

    public getUserInfo():User {
        return this._currentUserData;
    }

    public logout() {
        return Observable.create(observer => {
            this._currentUser = null;
            this._currentUserData = null;
            this.storage.ready().then(()=>{
                this.storage.remove('user');
                this.storage.remove('userData');
            });
            this.urlService.removeSignedHeader();
            observer.next(true);
            observer.complete();
        });
    }

    public LoggedIn() {
        return this._currentUser != undefined;
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
        return this.http.put(
            this.urlService.getURL(`user/${this._currentUser._id}/update`),
            JSON.stringify({password: newPassword,originalPassword: oldPassword}),
            {headers: this.urlService.getSignedHeaders()}
        ).map((response:Response) => {
            this._currentUserData = response.json().user;
            this.storage.ready().then(()=> this.storage.set('userData', JSON.stringify(this._currentUserData)));
        })
    }

    public getUserID(){
        return this._currentUser.userId;
    }
    
    public updateUser(user:User) {
        return this.http.put(this.urlService.getURL(`user/${this._currentUser.userId}/update`),
        JSON.stringify(user),
        {headers:this.urlService.getSignedHeaders()}
        ).map((response:Response) => {
            this._currentUserData = response.json().user;
            this.storage.ready().then(()=> this.storage.set('userData', this._currentUserData));
        })
    }
}
