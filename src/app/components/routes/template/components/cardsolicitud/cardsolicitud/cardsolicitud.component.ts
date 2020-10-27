import { Component, Input, OnInit } from '@angular/core';
import { Solicitud } from 'src/app/interfaces/solicitud';

@Component({
  selector: 'app-cardsolicitud',
  templateUrl: './cardsolicitud.component.html',
  styleUrls: ['./cardsolicitud.component.scss']
})
export class CardsolicitudComponent implements OnInit {
  @Input() solicitud: Solicitud;
  constructor() { }

  ngOnInit(): void {
  }

}
