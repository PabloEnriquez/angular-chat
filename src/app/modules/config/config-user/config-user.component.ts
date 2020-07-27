import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { SocketService } from '../../../services/socket.service';
import { NewUser } from 'src/app/models/models';

@Component({
  selector: 'app-config-user',
  templateUrl: './config-user.component.html',
  styleUrls: ['./config-user.component.sass']
})
export class ConfigUserComponent implements OnInit, OnDestroy {

  userData: NewUser = { userId: null, userName: '' };
  activeUserSub: Subscription;

  constructor(
    private socketService: SocketService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.socketService.getActiveUserName();
    this.activeUserSub = this.socketService.userData$.subscribe(userData => {
      if ( userData ) {
        this.userData = userData;
      }
    });
  }

  getRandomId(): number {
    return Math.floor((1 + Math.random()) * 0x10000);
  }

  onSave(): void {
    const newData: NewUser = {
      userId: this.userData && this.userData.userId ? this.userData.userId : this.getRandomId(),
      userName: this.userData.userName
    };
    this.socketService.setActiveUserName(newData);
    this.snackBar.open('Guardado exitoso', 'Cerrar', {
      duration: 500,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  ngOnDestroy(): void {
    this.activeUserSub.unsubscribe();
  }

}
