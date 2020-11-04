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
  constructor(private arbolesService:ArbolesService) { 
  }
  @ViewChild(GoogleComponent) mapaGoogle;

  ngOnInit(): void {
    this.arbol={};
  }
  public guardarArbol(){
    if(this.arbol.nombre!="Seleccione un Arbol..."&& this.arbol.nombre!=""){
      this.arbol.lat=this.mapaGoogle.lat;
      this.arbol.lng=this.mapaGoogle.lng;
      this.arbolesService.createArbol(this.arbol).subscribe(arbol => console.log(arbol))
      console.log(this.arbol);
    }else console.log("Error al cargar nuevo arbol");
  }

}
