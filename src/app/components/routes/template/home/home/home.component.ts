import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Arbol } from 'src/app/interfaces/arbol';
import { ArbolesService } from 'src/app/services/arboles/arboles.service';
import { MessageService } from 'src/app/services/message/message.service';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public username:string;
    public arboles: Array<Arbol>;
    constructor(private arbolesService: ArbolesService, private messageService: MessageService, private router: Router) { }

    ngOnInit() {
        this.arbolesService.findAll()
    .subscribe((response: Array<Arbol>) => {
      this.arboles = response; 
    }),
    error=>console.log(error);

    this.messageService.getMessage().subscribe(res=>{
        this.username=res['text'];
    }),
    error=>console.log(error);

    }

    public irNuevoArbol(){
        this.router.navigate(['mis-arboles/nuevoarbol']);
    }



}