import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  model : User;
  identifiant: string;

  constructor( private router: Router, private app : AppComponent ) { 
    this.model = new User();
   }

  ngOnInit() {
  }


  onSubmit():void{
    console.log(this.model.login);
    console.log(this.model.pass);
    if( this.model.login === 'toto' && this.model.pass === 'pass' ){
      sessionStorage.setItem('user', this.model.login);
      this.identifiant = sessionStorage.getItem('user');
      this.app.ngOnInit();

    } else{
      console.log('Connection raté');
    }
    

  }

}
