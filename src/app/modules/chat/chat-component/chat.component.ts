import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserMessage, NewUser, TypingEvent } from 'src/app/models/models';
import { SocketService } from 'src/app/services/socket.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.sass']
})
export class ChatComponent implements OnInit, OnDestroy {

  userMsg = '';
  messages: UserMessage[] = [];
  activeUserData: NewUser;
  typingState: TypingEvent = {
    isTyping: false,
    userName: ''
  };

  activeUserSub: Subscription;
  msgsSub: Subscription;
  typingSub: Subscription;

  constructor(
    private socketService: SocketService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.socketService.getActiveUserName();
    this.activeUserSub = this.socketService.userData$.subscribe(userData => {
      if ( userData ) {
        this.activeUserData = userData;
      } else {
        this.router.navigate(['config']);
      }
    });
    this.msgsSub = this.socketService.getMessagesList().subscribe((newMessage: UserMessage) => {
      this.messages.push(newMessage);
    });
    this.typingSub = this.socketService.getTypingState().subscribe((userNameTyping: TypingEvent) => {
      this.typingState = {...userNameTyping};
    });
  }

  sendMyMessage(): void {
    if ( this.userMsg ) {
      const newMsg: UserMessage = {
        userName: this.activeUserData.userName,
        message: this.userMsg,
        userId: this.activeUserData.userId
      };
      this.socketService.sendUserMessage(newMsg);
      this.userMsg = '';
      this.socketService.setTypingUser({ isTyping: false, userName: this.userMsg });
    }
  }

  typingChange(typeEvent: string): void {
    const typing: TypingEvent = {
      isTyping: null,
      userName: this.activeUserData.userName
    };
    if ( typeEvent.length > 0 ) {
      typing.isTyping = true;
    } else {
      typing.isTyping = false;
    }
    this.socketService.setTypingUser(typing);
  }

  ngOnDestroy(): void {
    this.msgsSub.unsubscribe();
    this.activeUserSub.unsubscribe();
    this.typingSub.unsubscribe();
  }

}
