import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Solicitud } from 'src/app/interfaces/solicitud';
import { SolicitudesService } from 'src/app/services/solicitudes/solicitudes.service';
import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-homeorganizacion',
  templateUrl: './homeorganizacion.component.html',
  styleUrls: ['./homeorganizacion.component.scss']
})
export class HomeorganizacionComponent implements OnInit {
  public solicitudesConfirmadas: Array<Solicitud>;
  public solicitudesDeFamilias: Array<Solicitud>;
  public solicitudesPendientes: Array<Solicitud>;
  constructor(private solicitudesService: SolicitudesService,private acordeonConfig:NgbAccordionConfig) { 
    acordeonConfig.closeOthers=true;
  }

  ngOnInit() {
  //     this.solicitudesService.findAllorgConfirmadas()
  // .subscribe((response: Array<Solicitud>) => {
  //   this.solicitudesConfirmadas = response;
  // });
  // this.solicitudesService.findAllorgdeFamilias()
  // .subscribe((response: Array<Solicitud>) => {
  //   this.solicitudesDeFamilias = response;
  // });
  // this.solicitudesService.findAllorgPendientes()
  // .subscribe((response: Array<Solicitud>) => {
  //   this.solicitudesPendientes = response;
  // });

  }

}
