import { Component, OnInit } from '@angular/core';
import { Solicitud } from 'src/app/interfaces/solicitud';
import { SolicitudesService } from 'src/app/services/solicitudes/solicitudes.service';

@Component({
  selector: 'app-missolicitudes',
  templateUrl: './missolicitudes.component.html',
  styleUrls: ['./missolicitudes.component.scss']
})
export class MissolicitudesComponent implements OnInit {
  public solicitudes: Array<Solicitud>;
  public solicitudesConfirmadas: Array<Solicitud>=[];
  public solicitudesDeOrganizaciones: Array<Solicitud>=[];
  public solicitudesPendientes: Array<Solicitud>=[];
  constructor(private solicitudesService: SolicitudesService) { }

  ngOnInit() {
    this.solicitudes=[];
    
    this.solicitudesService.findAllSolicitudes()
    .subscribe((response: Array<Solicitud>) => {
    this.solicitudes = response;
    this.divideSolicitudes();
  });

  }
  private divideSolicitudes(){
    this.solicitudesConfirmadas=this.solicitudes.filter(solicitudes => (solicitudes.acepta_familia == true && solicitudes.acepta_org == true));
    this.solicitudesPendientes=this.solicitudes.filter(solicitudes => (solicitudes.acepta_familia == true && solicitudes.acepta_org == false));
    this.solicitudesDeOrganizaciones=this.solicitudes.filter(solicitudes => (solicitudes.acepta_familia == false && solicitudes.acepta_org == true));
  }

}
