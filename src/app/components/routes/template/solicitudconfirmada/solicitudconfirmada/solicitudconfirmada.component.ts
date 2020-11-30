import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Solicitud } from 'src/app/interfaces/solicitud';
import { SolicitudesService } from 'src/app/services/solicitudes/solicitudes.service';

@Component({
  selector: 'app-solicitudconfirmada',
  templateUrl: './solicitudconfirmada.component.html',
  styleUrls: ['./solicitudconfirmada.component.scss']
})
export class SolicitudconfirmadaComponent implements OnInit {
  public idSolicitud:number;
  public solicitud:Solicitud;
  constructor(private route:ActivatedRoute,private solicitudesService:SolicitudesService) {
    this.idSolicitud=parseInt(this.route.snapshot.paramMap.get('id'));
   }

  ngOnInit(): void {
    this.solicitudesService.findSolicitud(this.idSolicitud).subscribe((response : Solicitud)=>{
      this.solicitud=response;
      console.log(this.solicitud);
    });
  }

}
