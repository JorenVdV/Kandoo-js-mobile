import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from "../models/user";
import { URLService } from '../providers/url-service';

@Injectable()
export class UserService {

    constructor(private http: Http, private urlService: URLService) { }

    getAll() {
        return this.http.get(this.urlService.getURL('users/'), this.jwt()).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete(this.urlService.getURL('users/'+id), this.jwt()).map((response: Response) => response.json());
    }

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}
