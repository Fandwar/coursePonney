import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PonyService } from '../pony.service';
import { Pony } from '../pony';

@Component({
  selector: 'app-pony-by-id',
  templateUrl: './pony-by-id.component.html',
  styleUrls: ['./pony-by-id.component.css']
})
export class PonyByIdComponent implements OnInit {
  pony: Pony;
  constructor( private route: ActivatedRoute, private service: PonyService ) { 
    this.pony = new Pony();
   }

  ngOnInit() {
    const id = parseInt( this.route.snapshot.paramMap.get('id'), 0);
    this.service.getPony(id).subscribe( p => this.pony = p );
  }

}
