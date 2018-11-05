import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  @Input() race:Course;
  constructor() { 
    //this.race = new Course( 'Le chateau', new Date('12-12-2012') );
   }

  ngOnInit() {
  }

}
