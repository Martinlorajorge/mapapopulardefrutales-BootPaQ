import { Component, Input, OnInit } from '@angular/core';
import { Solicitud } from 'src/app/interfaces/solicitud';

@Component({
  selector: 'app-detalleorganizacion',
  templateUrl: './detalleorganizacion.component.html',
  styleUrls: ['./detalleorganizacion.component.scss']
})
export class DetalleorganizacionComponent implements OnInit {
  @Input() solicitud:Solicitud;
  constructor() { }

  ngOnInit(): void {
  }
  public tieneRecolector(): boolean{
    return this.solicitud.tipo=="confirmada" ||this.solicitud.tipo=="pendiente";
  }

}