import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserI } from 'src/app/interfaces/user-i';
//import {AngularFireAuth} from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  public loginByEmail(user:UserI){

  }
}
