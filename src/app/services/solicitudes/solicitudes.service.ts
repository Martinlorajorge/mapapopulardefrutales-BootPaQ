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

//solicitud nueva
public createSolicitud(solicitud: Solicitud): Observable<any>{
  return this.http.post(this.apiBaseUrl+'/solicitud', solicitud);
}
//
public editSolicitud(solicitud: Solicitud): Observable<any>{
  return this.http.put(this.apiBaseUrl+'/solicitud', solicitud);//+solicitud.id
}


//solicitudes de organizacion

public findAllorgSolicitudes(): Observable<any>{
  return this.http.get(this.apiBaseUrl+'/orgSolicitudesConfirmadas');
}

//find 1 solicitud
public findSolicitud(id:number){
  const url =this.apiBaseUrl+'/solicitud/'+id;
  return this.http.get<Solicitud>(url);
}

}

