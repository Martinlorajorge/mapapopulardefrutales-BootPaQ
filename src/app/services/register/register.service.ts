import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'lodash';
import { Observable } from 'rxjs';
import { Familia } from 'src/app/interfaces/familia';
import { Organizacion } from 'src/app/interfaces/organizacion';
import { Representante } from 'src/app/interfaces/representante';
import { UserI } from 'src/app/interfaces/user-i';
import { OrganizacionesService } from '../organizaciones/organizaciones.service';
import { RepresentanteService } from '../representante/representante.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  apiBaseUrl:string ='';
  constructor(private http: HttpClient, private representanteService:RepresentanteService, private organizacionesServoce:OrganizacionesService) { }

  public registrarFamilia(nuevaFamilia:Familia){
    this.http.post(this.apiBaseUrl+'/familia', nuevaFamilia)
    .subscribe(familia=>{
      // nuevoUsuario.idFamilia=(familia as Familia).id;
      console.log(familia);
      // this.registrarUsuario(nuevoUsuario).subscribe(respuesta=>console.log(respuesta));
    });
  }
  public registrarOrganizacion(nuevaOrganizacion:Organizacion,nuevoRepresentante:Representante){
    this.http.post(this.apiBaseUrl+'/representante', nuevoRepresentante)
    .subscribe((representante:Representante)=>{
      console.log(representante);

      this.http.post(this.apiBaseUrl+'/organizacion', nuevaOrganizacion).subscribe((organizacion:Organizacion)=>{
        nuevoRepresentante.idorganizacion=organizacion.id;
      console.log(organizacion);

        //this.http.put(this.apiBaseUrl+'/representante', nuevoRepresentante).subscribe((representante:Representante)=>console.log(representante));
      })
    });


    // this.http.post(this.apiBaseUrl+'/organizacion', nuevaOrganizacion)
    // .subscribe(organizacion=>{
    //               //nuevoUsuario.idOrganizacion=(organizacion as Organizacion).id;
    //   nuevoRepresentante.idorganizacion=(organizacion as Organizacion).id;
    //   console.log(organizacion);
    //                 //this.registrarUsuario(nuevoUsuario).subscribe(respuesta=>console.log(respuesta));
    //   this.representanteService.createRepresentante(nuevoRepresentante).subscribe((respuesta:Representante)=>{
    //     console.log(respuesta);
    //     // nuevaOrganizacion.representante=respuesta.dni;
    //     // this.http.put(this.apiBaseUrl+'/organizacion',)

    //   });
    // });
  }
  public registrarUsuario(nuevoUsuario):Observable<any>{
    return this.http.post(this.apiBaseUrl+'/usuario', nuevoUsuario);
  }
}
