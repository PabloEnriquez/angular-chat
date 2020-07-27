import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserMessage, NewUser } from 'src/app/models/models';
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

  activeUserSub: Subscription;
  msgsSub: Subscription;

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
      // newMessage.isMine = false;
      this.messages.push(newMessage);
    });
  }

  sendMyMessage(): void {
    if ( this.userMsg ) {
      const newMsg: UserMessage = {
        userName: this.activeUserData.userName,
        message: this.userMsg,
        // isMine: true,
        userId: this.activeUserData.userId
      };
      this.socketService.sendUserMessage(newMsg);
      // this.messages.push(newMsg);
      this.userMsg = '';
    }
  }

  ngOnDestroy(): void {
    this.msgsSub.unsubscribe();
    this.activeUserSub.unsubscribe();
  }

}
