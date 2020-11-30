import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Solicitud } from 'src/app/interfaces/solicitud';
import { SolicitudesService } from 'src/app/services/solicitudes/solicitudes.service';

@Component({
  selector: 'app-confirmadaorganizacion',
  templateUrl: './confirmadaorganizacion.component.html',
  styleUrls: ['./confirmadaorganizacion.component.scss']
})
export class ConfirmadaorganizacionComponent implements OnInit {//solicitudconfirmada/:id
  public idSolicitud:string;
  public solicitud: Solicitud;

  constructor(private solicitudService: SolicitudesService, private route: ActivatedRoute) { 
    this.idSolicitud=this.route.snapshot.paramMap.get('id');
  }


  ngOnInit(): void {

    // this.solicitudService.findSolicitudConfirmada(parseInt(this.idSolicitud)).subscribe((response : Solicitud)=>{
    //   this.solicitud=response;
    // });
  }

}
