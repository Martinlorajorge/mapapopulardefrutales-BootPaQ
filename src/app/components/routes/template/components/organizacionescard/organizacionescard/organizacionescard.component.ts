import { Component, Input, OnInit } from '@angular/core';
import { Organizacion } from 'src/app/interfaces/organizacion';

@Component({
  selector: 'app-organizacionescard',
  templateUrl: './organizacionescard.component.html',
  styleUrls: ['./organizacionescard.component.scss']
})
export class OrganizacionescardComponent implements OnInit {
  @Input() organizacion:Organizacion;
  constructor() { }

  ngOnInit(): void {
    
  }

}
