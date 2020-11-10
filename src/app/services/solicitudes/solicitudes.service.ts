import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Solicitud } from 'src/app/interfaces/solicitud';

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

//solicitudes de organizacion
public findAllorgConfirmadas(): Observable<any>{
  return this.http.get(this.apiBaseUrl+'/orgSolicitudesConfirmadas');
}
public findAllorgdeFamilias(): Observable<any>{
  return this.http.get(this.apiBaseUrl+'/orgSolicitudesDeFamilias');
}
public findAllorgPendientes(): Observable<any>{
  return this.http.get(this.apiBaseUrl+'/orgSolicitudesPendientes');
}

//find 1 solicitud
public findSolicitudaConfirmar(id:number){
  const url =this.apiBaseUrl+'/solicitudaconfirmar/'+id;
  return this.http.get<Solicitud>(url);
}
public findSolicitudConfirmada(id:number){
  const url =this.apiBaseUrl+'/solicitudconfirmada/'+id;
  return this.http.get<Solicitud>(url);
}

}

