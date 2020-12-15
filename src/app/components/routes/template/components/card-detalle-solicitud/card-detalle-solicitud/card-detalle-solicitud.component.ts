import { Component, Input, OnInit } from '@angular/core';
import { Arbol } from 'src/app/interfaces/arbol';
import { Recolector } from 'src/app/interfaces/recolector';
import { Solicitud } from 'src/app/interfaces/solicitud';
import { ArbolesService } from 'src/app/services/arboles/arboles.service';
import { RecolectoresService } from 'src/app/services/recolectores/recolectores.service';
import { SolicitudesService } from 'src/app/services/solicitudes/solicitudes.service';

@Component({
  selector: 'app-card-detalle-solicitud',
  templateUrl: './card-detalle-solicitud.component.html',
  styleUrls: ['./card-detalle-solicitud.component.scss']
})
export class CardDetalleSolicitudComponent implements OnInit {
  @Input() solicitud:Solicitud;
  public arbol:Arbol;
  public recolector:Recolector;
  constructor(private solicitudesService:SolicitudesService, private arbolesService:ArbolesService, private recolectorService:RecolectoresService) { }

  ngOnInit(): void {
    // this.solicitudesService.findSolicitud(this.solicitud.id).subscribe((response : Solicitud)=>{
    //   this.solicitud=response;
    // });
    this.arbolesService.findArbol(this.solicitud.arbol).subscribe((response : Arbol)=>{
      this.arbol=response;
    });
    if(this.solicitud.recolector!=null){
      this.recolectorService.findRecolector(this.solicitud.recolector).subscribe((response : Recolector)=>{
        this.recolector=response;
      });
    }
     
    
  }

}
