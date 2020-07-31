import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Chat Web';

  constructor(private router: Router) {
    console.log(this.router.url.includes('hola'));
  }

  getRouter(): any {
    return this.router;
  }
}
