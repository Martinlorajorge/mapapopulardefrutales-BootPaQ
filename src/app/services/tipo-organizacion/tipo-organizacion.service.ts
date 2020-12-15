import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoOrganizacionService {
  apiBaseUrl:string ='https://apimpf.herokuapp.com/';

  constructor(private http: HttpClient) {
   }
  public findAllTipoOrganizacion(): Observable<any>{
    return this.http.get(this.apiBaseUrl+'/tipoorg');
  }
}
