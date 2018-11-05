import { Component, OnInit, Input } from '@angular/core';
import { Pony } from './../pony';

@Component({
  selector: 'app-pony',
  templateUrl: './pony.component.html',
  styleUrls: ['./pony.component.css']
})
export class PonyComponent implements OnInit {
  @Input() pony: Pony;
  constructor() { // Appelé une seul foit au lancement de l'appli

    //this.pony = new Pony( 'Rainbow', 6, 'black', 10 );

   }

  ngOnInit() {
  }

}
