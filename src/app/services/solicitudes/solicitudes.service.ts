import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {
  apiBaseUrl:string ='https://072de871-cb96-4bcc-b2a9-06a8243ad4d9.mock.pstmn.io';

constructor(private http: HttpClient) {
 }
public findAllConfirmadas(): Observable<any>{
  return this.http.get(this.apiBaseUrl+'/solicitudesConfirmadas');
}
public findAlldeOrganizaciones(): Observable<any>{
  return this.http.get(this.apiBaseUrl+'/solicitudesDeOrganizaciones');
}
public findAllPendientes(): Observable<any>{
  return this.http.get(this.apiBaseUrl+'/solicitudesPendientes');
}
}
