import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { UserMessage } from '../models/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  socket: any;

  constructor() {
    this.socket = io(environment.SOCKET_ENDPOINT);
  }

  sendUserMessage = (msg: UserMessage): void =>  {
    this.socket.emit('user-message', msg);
  }

  getMessagesList = (): Observable<UserMessage> => {
    return new Observable(observer => {
      this.socket.on('user-message', (userMsg: UserMessage) => {
        observer.next(userMsg);
      });
    });
  }
}
