import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  @Input() race:Course;
  @Output() onClick = new EventEmitter<Course>();
  constructor( private service: CourseService ) { 
    //this.race = new Course( 'Le chateau', new Date('12-12-2012') );
   }

  ngOnInit() {
    this.service.getAllCourse();
  }


  addVote( course: Course ){
    this.onClick.emit( course );
  }

}
