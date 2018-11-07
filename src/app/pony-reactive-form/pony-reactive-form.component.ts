import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PonyService } from '../pony.service';
import { Pony } from '../pony';
import { Router, Route, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pony-reactive-form',
  templateUrl: './pony-reactive-form.component.html',
  styleUrls: ['./pony-reactive-form.component.css']
})
export class PonyReactiveFormComponent implements OnInit {

  pony : Pony;
  add: boolean;
  ponyForm = this.fb.group({
    name: ['nom', Validators.required],
    age: ['0', Validators.required],
    color: ['vert', Validators.required],
    weight: ['0', Validators.required]
  });

  constructor(private router: ActivatedRoute, private fb: FormBuilder, private services: PonyService, private route: Router ) {
   }

  ngOnInit() {
    if( this.router.snapshot.paramMap.get('id') === null ){
      this.add = true;
    } else {
      this.add = false;
      const id = parseInt( this.router.snapshot.paramMap.get('id') ,0);
      this.services.getPony(id).subscribe( p => this.ponyForm.setValue({
        name: [p.name],
        age: [p.age],
        color: [p.color],
        weight: [p.weight]
      }));
    }
  }
  
  onSubmit(): void{
    if ( this.add ){
     const p: Pony = this.ponyForm.value;
      this.services.addPony(p);
      //this.route.navigate(['/Ponies/']);
    } else {
      const p: Pony = this.ponyForm.value;
      const idPony = parseInt(this.router.snapshot.paramMap.get('id') , 0);
      this.services.uptdatePony(idPony, p);
    }
    

  }

}
