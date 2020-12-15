import { MapsAPILoader,AgmInfoWindow,AgmMarker } from '@agm/core';
// import { google } from '@agm/core/services/google-maps-types';
import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { Arbol } from 'src/app/interfaces/arbol';
import { Familia } from 'src/app/interfaces/familia';
import { Marcador } from 'src/app/interfaces/marcador';
import { ArbolesService } from 'src/app/services/arboles/arboles.service';
import { FamiliasService } from 'src/app/services/familias/familias.service';

@Component({
  selector: 'app-mapa-multiple',
  templateUrl: './mapa-multiple.component.html',
  styleUrls: ['./mapa-multiple.component.scss']
})
export class MapaMultipleComponent implements OnInit {

  //@ViewChild(AgmInfoWindow, { static: false }) infoWindow: AgmInfoWindow
  //@ViewChild('window')
  lat: number;
  lng: number;
  zoom: number;
  scrollwheel = false;
  address: string;

  public arboles:Array<Arbol>;
  public familias:Array<Familia>;
  public familia:Familia={};
  public marcadores:Array<Marcador>;
  constructor(private mapsAPILoader: MapsAPILoader, private arbolesService:ArbolesService, private familiasService:FamiliasService) { }

  ngOnInit(): void {
    this.marcadores=[];
    this.arbolesService.findAll()
    .subscribe((response: Array<Arbol>) => {
      this.arboles=response;
      this.familiasService.findAllFamilias().subscribe((response:Array<Familia>) => {
        this.familias=response;
        this.llenarMarcadores();
        console.log(this.marcadores);
      })

    }) 
    
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
        });
  }
  // openInfo(marker: AgmMarker, content) {
  //   this.infoWindow.open()
  // }
  

  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.zoom = 10;
        
      });
    }
  }
  private llenarMarcadores(){
    for(let arbol of this.arboles){
      console.log(arbol);
      this.familia= this.familias.find(familia=>familia.id==arbol.id_familia)//console.log(familia.id);console.log(arbol.id_familia);console.log(familia.id==arbol.id_familia)
      console.log(this.familia);

      let marcador:Marcador={arbol:arbol,familia:this.familia};
      this.marcadores.push(marcador);
      console.log(marcador.arbol.nom_especie)
    }
    // this.arboles.forEach(element => {
    //   this.marcadores.push(marcador);
    // });
  }

 
}
