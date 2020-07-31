import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from './../../environments/environment';
import { UserMessage, NewUser, TypingEvent } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  socket: any;

  userData$ = new BehaviorSubject<NewUser>(null);

  constructor() {
    console.log(environment.SOCKET_ENDPOINT);
    this.socket = io(environment.SOCKET_ENDPOINT);
    // this.socket.on('connect_error', () => {
    //   console.log('error con node');
    // });
  }

  sendUserMessage(msg: UserMessage): void {
    this.socket.emit('user-message', msg);
  }

  getMessagesList(): Observable<UserMessage> {
    return new Observable(observer => {
      this.socket.on('user-message', (userMsg: UserMessage) => {
        observer.next(userMsg);
      });
    });
  }

  getActiveUserName(): void {
    if ( sessionStorage.getItem('userData') ) {
      const userData = JSON.parse(sessionStorage.getItem('userData'));
      this.userData$.next(userData);
    } else {
      this.userData$.next(null);
    }
  }

  setActiveUserName(newUserData: NewUser): void {
    // this.socket.emit('set-username', newUserData);
    const dataToSave = JSON.stringify(newUserData);
    sessionStorage.setItem('userData', dataToSave);
    this.userData$.next(newUserData);
  }

  getTypingState(): Observable<TypingEvent> {
    return new Observable(observer => {
      this.socket.on('typing', (userTyping: TypingEvent) => {
        observer.next(userTyping);
      });
    });
  }

  setTypingUser(typingEvent: TypingEvent): void {
    this.socket.emit('typing', typingEvent);
  }

}
