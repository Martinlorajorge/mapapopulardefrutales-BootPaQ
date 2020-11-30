import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Solicitud } from 'src/app/interfaces/solicitud';
import { SolicitudesService } from 'src/app/services/solicitudes/solicitudes.service';

@Component({
  selector: 'app-solicitudrecoleccion',
  templateUrl: './solicitudrecoleccion.component.html',
  styleUrls: ['./solicitudrecoleccion.component.scss']
})
export class SolicitudrecoleccionComponent implements OnInit {
  public idSolicitud:string;
  public solicitud: Solicitud;
  constructor(private solicitudService: SolicitudesService, private route: ActivatedRoute) { 
    this.idSolicitud=this.route.snapshot.paramMap.get('id');
  }


  ngOnInit(): void {

    // this.solicitudService.findSolicitudaConfirmar(parseInt(this.idSolicitud)).subscribe((response : Solicitud)=>{
    //   this.solicitud=response;
    // });
  }
}
