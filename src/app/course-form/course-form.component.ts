import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';
import { Router } from '@angular/router';
import { PonyService } from '../pony.service';
import { PoniesComponent } from '../ponies/ponies.component';
import { Pony } from '../pony';


@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
  model: Course;
  listPony : Array<Pony>;
  dateModel;
  date: {year: number, month: number, day: number};
  constructor(private servicep: PonyService, private service: CourseService, private router : Router ) { 
    this.model = new Course() ; 
    this.servicep.getAllPonies().subscribe( p => this.listPony = p );
  }

  ngOnInit() {
  }

  onSubmit(){
    this.model.date = new Date(this.dateModel.year, this.dateModel.month, this.dateModel.day );
    this.service.addCourse( this.model );
    this.router.navigate(['/'])
  }

}
