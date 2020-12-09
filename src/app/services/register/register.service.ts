import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'lodash';
import { Observable } from 'rxjs';
import { Familia } from 'src/app/interfaces/familia';
import { Organizacion } from 'src/app/interfaces/organizacion';
import { Representante } from 'src/app/interfaces/representante';
import { UserI } from 'src/app/interfaces/user-i';
import { RepresentanteService } from '../representante/representante.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  apiBaseUrl:string ='';
  constructor(private http: HttpClient, private representanteService:RepresentanteService) { }

  public registrarFamilia(nuevaFamilia:Familia, nuevoUsuario:UserI){
    this.http.post(this.apiBaseUrl+'/familia', nuevaFamilia)
    .subscribe(familia=>{
      nuevoUsuario.idFamilia=(familia as Familia).id;
      console.log(familia);
      this.registrarUsuario(nuevoUsuario).subscribe(respuesta=>console.log(respuesta));
    });
  }
  public registrarOrganizacion(nuevaOrganizacion:Organizacion, nuevoUsuario:UserI,nuevoRepresentante:Representante){
    this.http.post(this.apiBaseUrl+'/organizacion', nuevaOrganizacion)
    .subscribe(organizacion=>{
      nuevoUsuario.idOrganizacion=(organizacion as Organizacion).id;
      nuevoRepresentante.idorganizacion=(organizacion as Organizacion).id;
      console.log(organizacion);
      this.registrarUsuario(nuevoUsuario).subscribe(respuesta=>console.log(respuesta));
      this.representanteService.createRepresentante(nuevoRepresentante).subscribe(respuesta=>console.log(respuesta));
      
    });
  }
  public registrarUsuario(nuevoUsuario):Observable<any>{
    return this.http.post(this.apiBaseUrl+'/usuario', nuevoUsuario);
  }
}
