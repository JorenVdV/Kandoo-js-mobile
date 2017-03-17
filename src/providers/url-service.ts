import { Injectable } from '@angular/core';
import {Headers, Http} from "@angular/http";
import 'rxjs/add/operator/map';

/*
  Generated class for the URL provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class URLService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private url:string = "https://kandoo-js-backend.herokuapp.com/";
  private firebase:string = "https://kandoechat.firebaseio.com/";

  constructor(public http: Http) {
  }

  public getURL(appendix:string){
    return this.url+appendix;
  }

  public getFireUrl(appendix:string){
    return this.firebase+appendix
  }

  public getHeaders(){
    return this.headers;
  }

}
