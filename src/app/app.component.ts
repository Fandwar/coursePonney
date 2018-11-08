import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mon petit ponney';
  identifiant: string;
  ngOnInit(){
    this.identifiant = sessionStorage.getItem('user');
  }

  deconect( ){
    sessionStorage.removeItem('user');
  }
}
