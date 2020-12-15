import { Component, Input, OnInit } from '@angular/core';
import { Organizacion } from 'src/app/interfaces/organizacion';

@Component({
  selector: 'app-organizacioncard',
  templateUrl: './organizacioncard.component.html',
  styleUrls: ['./organizacioncard.component.scss']
})
export class OrganizacioncardComponent implements OnInit {
  @Input() organizacion:Organizacion;
  constructor() { }

  ngOnInit(): void {
  }

}
