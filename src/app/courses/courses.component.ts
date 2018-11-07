import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: Array<Course> =[];
  constructor( private service: CourseService ) { 
    this.service.getAllCourse().subscribe(c => this.courses = c);
  }
  ngOnInit() {
  }

  

}
