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
  private _headers = new Headers({'Content-Type': 'application/json'});
  private _signedHeaders : Headers;
  private _url:string = "https://kandoo-js-backend.herokuapp.com/";

  constructor(public http: Http) {
  }

  public getURL(appendix:string){
    return this._url+appendix;
  }

  public getHeaders(){
    return this._headers;
  }

  public setSignedheaders(token:string){
    this._signedHeaders = new Headers({
      'Content-Type': 'application/json',
      'X-Access-Token' : token
    })
  }

  public removeSignedHeader(){
    this._signedHeaders = null;
  }

  public getSignedHeaders(){
    return this._signedHeaders == undefined? this.getHeaders(): this._signedHeaders;
  }

}
