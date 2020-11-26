import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private subject = new Subject<any>();
  public sendMessage(message:string):void{
    this.subject.next({text:message});
  }
  public getMessage():Observable<any>{
    return this.subject.asObservable();
  }

  constructor() { }
}
