import { Component, OnInit } from '@angular/core';
import { Organizacion } from 'src/app/interfaces/organizacion';
import { OrganizacionesService } from 'src/app/services/organizaciones/organizaciones.service';

@Component({
  selector: 'app-organizaciones',
  templateUrl: './organizaciones.component.html',
  styleUrls: ['./organizaciones.component.scss']
})
export class OrganizacionesComponent implements OnInit {
  public organizaciones:Array<Organizacion>;

  constructor(private organizacionesService:OrganizacionesService) { }

  ngOnInit(): void {

    this.organizacionesService.findAllOrganizaciones()
    .subscribe((response: Array<Organizacion>) => {
    this.organizaciones = response;
  });
  }

}
