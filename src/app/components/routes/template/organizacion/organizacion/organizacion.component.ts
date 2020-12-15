import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Organizacion } from 'src/app/interfaces/organizacion';
import { OrganizacionesService } from 'src/app/services/organizaciones/organizaciones.service';

@Component({
  selector: 'app-organizacion',
  templateUrl: './organizacion.component.html',
  styleUrls: ['./organizacion.component.scss']
})
export class OrganizacionComponent implements OnInit {
  public idOrganizacion:number;
  public organizacion:Organizacion;
  constructor(private route:ActivatedRoute,private organizacionService:OrganizacionesService) {
    this.idOrganizacion=parseInt(this.route.snapshot.paramMap.get('id')); 
   }

  ngOnInit(): void {
    this.organizacionService.findOrganizacion(this.idOrganizacion).subscribe((response : Organizacion)=>{
      this.organizacion=response;
      console.log(this.organizacion);
    });
  }

}
