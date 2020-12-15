import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Organizacion } from 'src/app/interfaces/organizacion';

@Injectable({
  providedIn: 'root'
})
export class OrganizacionesService {
  apiBaseUrl="";
  constructor(private http: HttpClient) { }
  
  public findAllOrganizaciones(): Observable<any>{
    return this.http.get(this.apiBaseUrl+'/organizacion');
  }
  public findOrganizacion(id:number){
    const url =this.apiBaseUrl+'/organizacion/'+id;
    return this.http.get<Organizacion>(url);
  }
}
