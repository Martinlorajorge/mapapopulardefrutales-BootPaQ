import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recolector } from 'src/app/interfaces/recolector';

@Injectable({
  providedIn: 'root'
})
export class RecolectoresService {
  apiBaseUrl:string ='https://apimpf.herokuapp.com/';

constructor(private http: HttpClient) { }
//find 1 recolector
public findRecolector(id:number){
  const url =this.apiBaseUrl+'/recolector/'+id;
  return this.http.get<Recolector>(url);
}
public findAll(): Observable<Recolector[]>{
  return this.http.get<Recolector[]>(this.apiBaseUrl+'/recolector');
}
}
