import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PonyComponent } from './pony/pony.component';
import { PoniesComponent } from './ponies/ponies.component';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses/courses.component';
import { PonyFormComponent } from './pony-form/pony-form.component';
import { CourseFormComponent } from './course-form/course-form.component';

import {TooltipModule} from 'primeng/tooltip';
import {AccordionModule} from 'primeng/accordion'; 
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PickListModule} from 'primeng/picklist';
import { PonyReactiveFormComponent } from './pony-reactive-form/pony-reactive-form.component';
import { CoursesReactiveFormComponent } from './courses-reactive-form/courses-reactive-form.component';

const routes: Routes = [
  { path:'', component: CoursesComponent },
  { path:'Ponies', component: PoniesComponent },
  { path:'AddPony', component: PonyReactiveFormComponent },
  { path:'AddCourse', component: CourseFormComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PonyComponent,
    PoniesComponent,
    CourseComponent,
    CoursesComponent,
    PonyFormComponent,
    CourseFormComponent,
    PonyReactiveFormComponent,
    CoursesReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    NgbModule,
    AccordionModule,
    BrowserAnimationsModule,
    TooltipModule,
    PickListModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }