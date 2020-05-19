import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'unknown';
  

  constructor( private router: Router ) {
  }

  exibeNavBar() {
    return this.router.url !== '/login' && this.router.url !== '/';
  }
  
}
