import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Solicitud } from 'src/app/interfaces/solicitud';
import { SolicitudesService } from 'src/app/services/solicitudes/solicitudes.service';
import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap'
import { Router } from '@angular/router';

@Component({
  selector: 'app-homeorganizacion',
  templateUrl: './homeorganizacion.component.html',
  styleUrls: ['./homeorganizacion.component.scss']
})
export class HomeorganizacionComponent implements OnInit {
  public solicitudesConfirmadas: Array<Solicitud>;
  public solicitudesDeFamilias: Array<Solicitud>;
  public solicitudesPendientes: Array<Solicitud>;
  public solicitudes:Array<Solicitud>;
  constructor(private solicitudesService: SolicitudesService,private acordeonConfig:NgbAccordionConfig, private route:Router) { 
    acordeonConfig.closeOthers=true;
  }

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
    this.solicitudesPendientes=this.solicitudes.filter(solicitudes => (solicitudes.acepta_familia == false && solicitudes.acepta_org == true));
    this.solicitudesDeFamilias=this.solicitudes.filter(solicitudes => (solicitudes.acepta_familia == true && solicitudes.acepta_org == false));
    console.log(this.solicitudesConfirmadas);
  }
}
