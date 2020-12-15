import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Arbol } from 'src/app/interfaces/arbol';

@Component({
  selector: 'app-arbol',
  templateUrl: './arbol.component.html',
  styleUrls: ['./arbol.component.scss']
})
export class ArbolComponent implements OnInit {
  @Input() arbol: Arbol;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  public nuevaSolicitud(){
    this.router.navigate(['/mis-arboles/nuevasolicitud/'+this.arbol.id]);//+this.arbol.id
  }

}
