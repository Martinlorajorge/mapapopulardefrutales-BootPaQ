import { Component, Input, OnInit } from '@angular/core';
import { Solicitud } from 'src/app/interfaces/solicitud';

@Component({
  selector: 'app-cardconforg',
  templateUrl: './cardconforg.component.html',
  styleUrls: ['./cardconforg.component.scss']
})
export class CardconforgComponent implements OnInit {
  @Input() solicitud: Solicitud;
  constructor() { }

  ngOnInit(): void {
  }

}
