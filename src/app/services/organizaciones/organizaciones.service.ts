import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrganizacionesService {
  apiBaseUrl="";
  constructor(private http: HttpClient) { }
  
  public findAllOrganizaciones(): Observable<any>{
    return this.http.get(this.apiBaseUrl+'/organizacion');
  }
}
