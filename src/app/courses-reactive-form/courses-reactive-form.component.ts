import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PONIES } from '../ponies-mock';
import { Pony } from '../pony';
import { PonyService } from '../pony.service';

@Component({
  selector: 'app-courses-reactive-form',
  templateUrl: './courses-reactive-form.component.html',
  styleUrls: ['./courses-reactive-form.component.css']
})
export class CoursesReactiveFormComponent implements OnInit {

  listPony: Array<Pony>;
  selectedPony: Array<Pony>;
  courseForm = this.fb.group({
    ponies: [ null , Validators.required],
    location: ['Montpellier', Validators.required],
    date: [new Date(), Validators.required]
  });

  constructor(private fb: FormBuilder, private servicep: PonyService, private services: CourseService, private router: Router ) { 
    this.servicep.getAllPonies().subscribe( p => this.listPony = p );
    this.selectedPony = [];
  }

  ngOnInit() {
  }


  onSubmit(): void{

    const dateFinal = new Date( this.courseForm.value.date.year, this.courseForm.value.date.month, this.courseForm.value.date.day );
    
    const c: Course = this.courseForm.value;
    console.log(c);
    c.ponies = this.selectedPony;
    c.date = dateFinal;
    this.services.addCourse(c);
    this.selectedPony.forEach((x) => c.ponies.push(x));
    
  }

}
