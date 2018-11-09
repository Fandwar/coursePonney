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
  votes: Array<number>;

  constructor( private service: CourseService ) { 
    this.votes = new Array<number>();
    this.service.getAllCourse().subscribe(c => {
      this.courses = c;
      for( const i in this.courses ){
        this.votes.push(0);
      }
    });
    
  }
  ngOnInit() {
  }

  onClickParent( course: Course ){
    console.log( "on à voté" );
    const index = this.courses.indexOf(course);
    this.votes[index] += 1;
  }
  

}
