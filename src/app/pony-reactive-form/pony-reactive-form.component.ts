import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PonyService } from '../pony.service';
import { Pony } from '../pony';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pony-reactive-form',
  templateUrl: './pony-reactive-form.component.html',
  styleUrls: ['./pony-reactive-form.component.css']
})
export class PonyReactiveFormComponent implements OnInit {

  ponyForm = this.fb.group({
    name: ['nom', Validators.required],
    age: ['0', Validators.required],
    color: ['vert', Validators.required],
    weight: ['0', Validators.required]
  });

  constructor(private fb: FormBuilder, private services: PonyService, private router: Router ) { }

  ngOnInit() {
  }
  
  onSubmit(): void{

    const p: Pony = this.ponyForm.value;
    p.id = 0;
    console.log(p);
    this.services.addPony(p);
    this.router.navigate(['/Ponies']);

  }

}
