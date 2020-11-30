import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recolectores',
  templateUrl: './recolectores.component.html',
  styleUrls: ['./recolectores.component.scss']
})
export class RecolectoresComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  public nuevoRecolector(){
    this.route.navigate(['/recolectores/nuevorecolector']);
  }
}
