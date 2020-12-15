import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Familia } from 'src/app/interfaces/familia';

@Injectable({
  providedIn: 'root'
})
export class FamiliasService {
  apiBaseUrl="";
  constructor(private http: HttpClient) { }
  
  public findAllFamilias(): Observable<any>{
    return this.http.get(this.apiBaseUrl+'/familia');
  }
  public findFamilia(id:number){
    const url =this.apiBaseUrl+'/familia/'+id;
    return this.http.get<Familia>(url);
  }
}
