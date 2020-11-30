import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Arbol } from 'src/app/interfaces/arbol';
import { Organizacion } from 'src/app/interfaces/organizacion';
import { Solicitud } from 'src/app/interfaces/solicitud';
import { ArbolesService } from 'src/app/services/arboles/arboles.service';
import { OrganizacionesService } from 'src/app/services/organizaciones/organizaciones.service';
import { SolicitudesService } from 'src/app/services/solicitudes/solicitudes.service';

@Component({
  selector: 'app-confirmar-solicitud',
  templateUrl: './confirmar-solicitud.component.html',
  styleUrls: ['./confirmar-solicitud.component.scss']
})
export class ConfirmarSolicitudComponent implements OnInit {
  public idSolicitud:number;
  public arbol: Arbol;
  public solicitud:Solicitud;
  public organizacion:Organizacion;
  public organizacionSelect:string;
  public cantidad:string;
  public unidades:string;
  public fecha:string;
  public hora:string;

  constructor(private arbolesService: ArbolesService, private route: ActivatedRoute, private organizacionesService:OrganizacionesService, private solicitudesService: SolicitudesService) { 
    this.idSolicitud=parseInt(this.route.snapshot.paramMap.get('id')); 
  }
  public confirmarSolicitud(){
    
    if(this.cantidad!= undefined &&this.unidades!= undefined &&this.fecha!=undefined&&this.hora!=undefined){
      this.solicitud.fecha=this.fecha;
      this.solicitud.hora=this.hora;
      this.solicitud.cantidad=this.cantidad+" "+this.unidades;
      this.solicitud.acepta_familia=true;
      console.log(this.solicitud);
      this.solicitudesService.editSolicitud(this.solicitud).subscribe(solicitud => console.log(solicitud))

    }else console.log("Error al aceptar la solicitud");
      

    
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
        console.log(this.arbol);
      });
    });
    
    
  }


}
