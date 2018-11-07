import { Injectable } from '@angular/core';
import { Course } from './course';
import { COURSES } from './course-mock';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  courses: Array<Course>;
  url: String = 'http://localhost:8070/CoursePony';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type' : 'application/json'
    })
  };
  constructor(private http: HttpClient, private router : Router ) { 
    this.courses = [];
    //this.courses = COURSES;
  }
  getAllCourse(): Observable<Array<Course>> {
    return this.http.get<Array<Course>>(this.url + '/Courses/', this.httpOptions );
  }

  addCourse( race:Course ): void{
    this.http.post<Array<Course>>(this.url + '/Courses/', race , this.httpOptions ).subscribe(() => this.router.navigate(['/']));
  }

}
