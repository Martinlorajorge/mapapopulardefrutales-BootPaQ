import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Representante } from 'src/app/interfaces/representante';

@Injectable({
  providedIn: 'root'
})
export class RepresentanteService {
  apiBaseUrl='';
  constructor(private http:HttpClient) { }

  public createRepresentante(nuevoRepresentante: Representante): Observable<any>{
    return this.http.post(this.apiBaseUrl+'/representante', nuevoRepresentante);
  }

  public findRepresentante(id:number){
    const url =this.apiBaseUrl+'/representante/'+id;
    return this.http.get<Representante>(url);
  }
}
