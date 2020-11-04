import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Arbol } from 'src/app/interfaces/arbol';
import { ArbolesService } from 'src/app/services/arboles/arboles.service';

@Component({
  selector: 'app-solicituddedonacion',
  templateUrl: './solicituddedonacion.component.html',
  styleUrls: ['./solicituddedonacion.component.scss']
})
export class SolicituddedonacionComponent implements OnInit {
  public idArbol:string;
  public arbol: Arbol;
  constructor(private arbolesService: ArbolesService, private route: ActivatedRoute) { 
    this.idArbol=this.route.snapshot.paramMap.get('id');
  }


  ngOnInit(): void {

    this.arbolesService.findArbol(parseInt(this.idArbol)).subscribe((response : Arbol)=>{
      this.arbol=response;
    });
  }

}
