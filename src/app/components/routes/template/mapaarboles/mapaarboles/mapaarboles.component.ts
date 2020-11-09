import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleComponent } from '../../maps/google/google.component';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-mapaarboles',
  templateUrl: './mapaarboles.component.html',
  styleUrls: ['./mapaarboles.component.scss']
})
export class MapaarbolesComponent implements OnInit {

  constructor(public googleComponent: GoogleComponent) { }

  @ViewChild(GoogleComponent) mapaGoogle;



  ngOnInit(): void {
  }

}
