import { Component, Input, OnInit } from '@angular/core';
import { Organizacion } from 'src/app/interfaces/organizacion';
import { Representante } from 'src/app/interfaces/representante';
import { RepresentanteService } from 'src/app/services/representante/representante.service';

@Component({
  selector: 'app-perfilorgcard',
  templateUrl: './perfilorgcard.component.html',
  styleUrls: ['./perfilorgcard.component.scss']
})
export class PerfilorgcardComponent implements OnInit {
  @Input() organizacion:Organizacion;
  public representante:Representante;
  constructor(private representanteService:RepresentanteService) { }

  ngOnInit(): void {
    this.representanteService.findRepresentante(this.organizacion.representante).subscribe((representante:Representante)=>this.representante=representante);
  }

}
