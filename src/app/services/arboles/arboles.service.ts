import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Arbol } from 'src/app/interfaces/arbol';

@Injectable({
  providedIn: 'root'
})
export class ArbolesService {
  apiBaseUrl:string ='';

  constructor(private http: HttpClient) {
   }
  public findAll(): Observable<Arbol[]>{
    return this.http.get<Arbol[]>(this.apiBaseUrl+'/arbol');
  }
  public createArbol(arbol: Arbol): Observable<any>{
    return this.http.post(this.apiBaseUrl+'/arbol', arbol);
  }

  public findArbol(id:number){
    const url =this.apiBaseUrl+'/arbol/'+id;
    return this.http.get<Arbol>(url);
  }
}
