import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Arbol } from 'src/app/interfaces/arbol';

@Injectable({
  providedIn: 'root'
})
export class ArbolesService {
  apiBaseUrl:string ='https://072de871-cb96-4bcc-b2a9-06a8243ad4d9.mock.pstmn.io';

  constructor(private http: HttpClient) {
   }
  public findAll(): Observable<Arbol[]>{
    return this.http.get<Arbol[]>(this.apiBaseUrl+'/arboles');
  }
  public createArbol(arbol: Arbol): Observable<any>{
    return this.http.post(this.apiBaseUrl+'/arboles', arbol);
  }

  public findArbol(id:number){
    const url =this.apiBaseUrl+'/solicitud/'+id;
    return this.http.get<Arbol>(url);
  }
}
