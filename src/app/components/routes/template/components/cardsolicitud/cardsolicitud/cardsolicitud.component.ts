import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Arbol } from 'src/app/interfaces/arbol';
import { Organizacion } from 'src/app/interfaces/organizacion';
import { Solicitud } from 'src/app/interfaces/solicitud';
import { ArbolesService } from 'src/app/services/arboles/arboles.service';
import { OrganizacionesService } from 'src/app/services/organizaciones/organizaciones.service';

@Component({
  selector: 'app-cardsolicitud',
  templateUrl: './cardsolicitud.component.html',
  styleUrls: ['./cardsolicitud.component.scss']
})
export class CardsolicitudComponent implements OnInit {
  @Input() solicitud: Solicitud;
  public arbol:Arbol;
  public organizacion:Organizacion;
  constructor(private arbolesService: ArbolesService, private router:Router,private organizacionService:OrganizacionesService) { }

  ngOnInit(): void {
    this.arbolesService.findArbol(this.solicitud.arbol)
    .subscribe((response: Arbol) => {
      this.arbol = response;
    });
    this.organizacionService.findOrganizacion(this.solicitud.organizacion)
    .subscribe((response: Organizacion) => {
      this.organizacion = response;
    });
  }
  public abreSolicitud(){
    if( this.solicitud.acepta_familia == true && this.solicitud.acepta_org == true )
      this.router.navigate(['/mis-solicitudes/confirmada/'+this.solicitud.id]);
    else if(this.solicitud.acepta_familia == true && this.solicitud.acepta_org == false)
      this.router.navigate(['/mis-solicitudes/a-confirmar/'+this.solicitud.id]);
      else if(this.solicitud.acepta_familia == false && this.solicitud.acepta_org == true)
      this.router.navigate(['/mis-solicitudes/de-organizacion/'+this.solicitud.id]);
  }

}
