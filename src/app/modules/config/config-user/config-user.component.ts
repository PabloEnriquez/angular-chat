import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../../services/socket.service';

@Component({
  selector: 'app-config-user',
  templateUrl: './config-user.component.html',
  styleUrls: ['./config-user.component.sass']
})
export class ConfigUserComponent implements OnInit {

  constructor(
    private socketService: SocketService
  ) { }

  ngOnInit(): void {

  }

}
