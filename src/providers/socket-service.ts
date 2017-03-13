import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import * as io from 'socket.io-client';

/*
  Generated class for the SocketService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SocketService {
  private baseURL = 'http://localhost:8000';
  private socket;

  constructor(){
    this.socket = io(this.baseURL, {transports: ['websocket']});
  }

  sendMessage(name, message) {
    this.socket.emit(name, message);
  }

  listen() {
    return new Observable(observer => {
      this.socket.on('messages', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
  }

}
