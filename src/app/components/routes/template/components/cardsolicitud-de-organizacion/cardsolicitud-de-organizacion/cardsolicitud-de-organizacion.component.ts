import { Component, Input, OnInit } from '@angular/core';
import { Solicitud } from 'src/app/interfaces/solicitud';

@Component({
  selector: 'app-cardsolicitud-de-organizacion',
  templateUrl: './cardsolicitud-de-organizacion.component.html',
  styleUrls: ['./cardsolicitud-de-organizacion.component.scss']
})
export class CardsolicitudDeOrganizacionComponent implements OnInit {
  @Input() solicitud: Solicitud;
  constructor() { }

  ngOnInit(): void {
  }

}
