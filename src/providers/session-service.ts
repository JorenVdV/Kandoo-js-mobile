import {Injectable} from "@angular/core";
import {URLService} from "./url-service";
import {Http, Headers, RequestOptions, Response} from '@angular/http';

@Injectable()
export class SessionService {

    constructor(private http:Http, private urlService:URLService) {
    }

    public getSession(){
        return this.http.get(this.urlService.getURL(`session/58c11715d39fc40004d02569`));
    }
}