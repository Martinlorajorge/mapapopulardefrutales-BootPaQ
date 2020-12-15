import { Component, OnInit } from '@angular/core';
import { Organizacion } from 'src/app/interfaces/organizacion';
import { OrganizacionesService } from 'src/app/services/organizaciones/organizaciones.service';

@Component({
  selector: 'app-perfilorganizacion',
  templateUrl: './perfilorganizacion.component.html',
  styleUrls: ['./perfilorganizacion.component.scss']
})
export class PerfilorganizacionComponent implements OnInit {
  public organizaciones:Array<Organizacion>;
  constructor(private organizacionesService:OrganizacionesService) { }

  ngOnInit(): void {
    this.organizacionesService.findAllOrganizaciones().subscribe((organizaciones:Array<Organizacion>)=>{this.organizaciones=organizaciones;
      console.log(organizaciones);
    
    });
  }

}
