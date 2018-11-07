import { Injectable } from '@angular/core';
import { Pony } from './pony';
import { Observable, of } from 'rxjs';
import { PONIES } from './ponies-mock';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PonyService {
  ponies: Array<Pony>;
  url: String = 'http://localhost:8070/CoursePony';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type' : 'application/json'
    })
  };
  constructor(private http: HttpClient, private router : Router ) { 
    this.ponies = [];
    //this.ponies = PONIES;
  } 
  getAllPonies(): Observable<Array<Pony>> {
    return this.http.get<Array<Pony>>(this.url + '/Ponies/', this.httpOptions );
  }

  addPony( pony:Pony ) :void {
    this.http.post<Array<Pony>>(this.url + '/Ponies/', pony , this.httpOptions ).subscribe(() => this.router.navigate(['/Ponies']));
  }
  
}
