import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Arbol } from 'src/app/interfaces/arbol';
import { ArbolesService } from 'src/app/services/arboles/arboles.service';
import { GoogleComponent } from '../../maps/google/google.component';

@Component({
  selector: 'app-nuevoarbol',
  templateUrl: './nuevoarbol.component.html',
  styleUrls: ['./nuevoarbol.component.scss']
})
export class NuevoarbolComponent implements OnInit {
  public arbol: Arbol;
  arbolId:string;
  constructor(public arbolesService:ArbolesService) { 
  }
  @ViewChild(GoogleComponent) mapaGoogle;

  ngOnInit(): void {
    this.arbol={};
  }
  public guardarArbol(){
    if(this.arbol.nom_especie!="Seleccione un Arbol..."&& this.arbol.nom_especie!=""){
      this.arbol.lat=this.mapaGoogle.lat;
      this.arbol.lng=this.mapaGoogle.lng;
      console.log(this.arbol);
      this.arbolesService.createArbol(this.arbol).subscribe(arbol => console.log(arbol))
      
    }else console.log("Error al cargar nuevo arbol");
  }

}
