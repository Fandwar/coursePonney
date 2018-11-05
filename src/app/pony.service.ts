import { Injectable } from '@angular/core';
import { Pony } from './pony';
import { Observable, of } from 'rxjs';
import { PONIES } from './ponies-mock';

@Injectable({
  providedIn: 'root'
})
export class PonyService {
  ponies: Array<Pony>;
  constructor() { 
    this.ponies = [];
    this.ponies = PONIES;
  }

  getAllPonies(): Observable<Array<Pony>> {
    return of(this.ponies);
  }

  addPony( pony:Pony ) :void {
    this.ponies.push(pony);
  }
  
}
