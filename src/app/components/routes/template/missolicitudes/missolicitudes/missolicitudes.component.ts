import { Component, OnInit } from '@angular/core';
import { Solicitud } from 'src/app/interfaces/solicitud';
import { SolicitudesService } from 'src/app/services/solicitudes/solicitudes.service';

@Component({
  selector: 'app-missolicitudes',
  templateUrl: './missolicitudes.component.html',
  styleUrls: ['./missolicitudes.component.scss']
})
export class MissolicitudesComponent implements OnInit {
  public solicitudesConfirmadas: Array<Solicitud>;
  public solicitudesDeOrganizaciones: Array<Solicitud>;
  public solicitudesPendientes: Array<Solicitud>;
  constructor(private solicitudesService: SolicitudesService) { }

  ngOnInit() {
      this.solicitudesService.findAllConfirmadas()
  .subscribe((response: Array<Solicitud>) => {
    this.solicitudesConfirmadas = response;
  });
  this.solicitudesService.findAlldeOrganizaciones()
  .subscribe((response: Array<Solicitud>) => {
    this.solicitudesDeOrganizaciones = response;
  });
  this.solicitudesService.findAllPendientes()
  .subscribe((response: Array<Solicitud>) => {
    this.solicitudesPendientes = response;
  });

  }

}
