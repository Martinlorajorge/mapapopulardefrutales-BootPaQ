import { Component, Input, OnInit } from '@angular/core';
import { Arbol } from 'src/app/interfaces/arbol';

@Component({
  selector: 'app-arbol',
  templateUrl: './arbol.component.html',
  styleUrls: ['./arbol.component.scss']
})
export class ArbolComponent implements OnInit {
  @Input() arbol: Arbol;

  constructor() { }

  ngOnInit(): void {
  }

}
