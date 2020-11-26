import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Solicitud } from 'src/app/interfaces/solicitud';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {
  apiBaseUrl:string ='https://apimpf.herokuapp.com/';

constructor(private http: HttpClient) {
 }
public findAllSolicitudes(): Observable<any>{
  return this.http.get(this.apiBaseUrl+'/solicitud');
}
public findAlldeOrganizaciones(): Observable<any>{
  return this.http.get(this.apiBaseUrl+'/solicitudesDeOrganizaciones');
}
public findAllPendientes(): Observable<any>{
  return this.http.get(this.apiBaseUrl+'/solicitudesPendientes');
}

//solicitud nueva
public createSolicitud(solicitud: Solicitud): Observable<any>{
  return this.http.post(this.apiBaseUrl+'/solicitud', solicitud);
}

//solicitudes de organizacion

public findAllorgSolicitudes(): Observable<any>{
  return this.http.get(this.apiBaseUrl+'/orgSolicitudesConfirmadas');
}
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

