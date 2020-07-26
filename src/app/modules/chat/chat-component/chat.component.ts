import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserMessage } from 'src/app/models/models';
import { SocketService } from 'src/app/services/socket.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.sass']
})
export class ChatComponent implements OnInit, OnDestroy {

  userMsg = '';
  messages: UserMessage[] = [];

  msgsSub: Subscription;

  constructor(
    private socketService: SocketService
  ) { }

  ngOnInit(): void {
    this.msgsSub = this.socketService.getMessagesList().subscribe((newMessage: UserMessage) => {
      newMessage.isMine = false;
      this.messages.push(newMessage);
    });
  }

  sendMyMessage(): void {
    const newMsg: UserMessage = {
      userName: 'Pablo E',
      message: this.userMsg,
      isMine: true
    };
    this.socketService.sendUserMessage(newMsg);
    this.messages.push(newMsg);
    this.userMsg = '';
  }

  ngOnDestroy(): void {
    this.msgsSub.unsubscribe();
  }

}
