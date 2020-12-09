import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Arbol } from 'src/app/interfaces/arbol';
import { Organizacion } from 'src/app/interfaces/organizacion';
import { Recolector } from 'src/app/interfaces/recolector';
import { Solicitud } from 'src/app/interfaces/solicitud';
import { ArbolesService } from 'src/app/services/arboles/arboles.service';
import { OrganizacionesService } from 'src/app/services/organizaciones/organizaciones.service';
import { RecolectoresService } from 'src/app/services/recolectores/recolectores.service';
import { SolicitudesService } from 'src/app/services/solicitudes/solicitudes.service';

@Component({
  selector: 'app-solicitudorganizacion',
  templateUrl: './solicitudorganizacion.component.html',
  styleUrls: ['./solicitudorganizacion.component.scss']
})
export class SolicitudorganizacionComponent implements OnInit {
  public idSolicitud:number;
  public solicitud:Solicitud;
  public arbol:Arbol;
  public recolector:Recolector;
  public organizacion:Organizacion;
  constructor(private route:ActivatedRoute,private arbolesService:ArbolesService,private recolectoreaService:RecolectoresService, private solicitudesService:SolicitudesService, private organizacionesService:OrganizacionesService, private router:Router) {
    this.idSolicitud=parseInt(this.route.snapshot.paramMap.get('id'));
   }

  ngOnInit(): void {
    this.solicitudesService.findSolicitud(this.idSolicitud).subscribe((response : Solicitud)=>{
      this.solicitud=response;
      console.log(this.solicitud);
      this.organizacionesService.findOrganizacion(this.solicitud.organizacion).subscribe((response : Organizacion)=>{
        this.organizacion=response;
      });
      this.arbolesService.findArbol(this.solicitud.arbol).subscribe((response : Arbol)=>{
        this.arbol=response;
      });
      this.recolectoreaService.findRecolector(this.solicitud.recolector).subscribe((response : Recolector)=>{
        this.recolector=response;
      });
    });
    

  }
  public confirmar(){
    console.log('/mis-solicitudes'+'/confirmar/'+this.solicitud.id);
    this.router.navigate(['/mis-solicitudes/confirmar/'+this.solicitud.id]);
  }

}
