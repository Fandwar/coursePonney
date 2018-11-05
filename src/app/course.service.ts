import { Injectable } from '@angular/core';
import { Course } from './course';
import { COURSES } from './course-mock';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  courses: Array<Course>;
  constructor() { 
    this.courses = [];
    this.courses = COURSES;
  }
  getAllCourse(): Observable<Array<Course>> {
    return of(this.courses);
  }

  addCourse( race:Course ): void{
    this.courses.push(race);
  }

}
