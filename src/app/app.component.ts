import { Component } from '@angular/core';

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
    this.ngOnInit();
  }
}
