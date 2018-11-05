import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-reactive-form',
  templateUrl: './courses-reactive-form.component.html',
  styleUrls: ['./courses-reactive-form.component.css']
})
export class CoursesReactiveFormComponent implements OnInit {

  courseForm = this.fb.group({
    name: ['nom', Validators.required],
    age: ['0', Validators.required],
    color: ['vert', Validators.required],
    weight: ['0', Validators.required]
  });

  constructor(private fb: FormBuilder, private services: CourseService, private router: Router ) { }

  ngOnInit() {
  }


  onSubmit(): void{

    const c: Course = this.courseForm.value;
    c.id = 0;
    console.log(c);
    this.services.addCourse(c);
    this.router.navigate(['/Courses']);

  }

}
