import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from 'ng2-charts';
import { Recolector } from 'src/app/interfaces/recolector';
import { RecolectoresService } from 'src/app/services/recolectores/recolectores.service';

@Component({
  selector: 'app-recolectores',
  templateUrl: './recolectores.component.html',
  styleUrls: ['./recolectores.component.scss']
})
export class RecolectoresComponent implements OnInit {
  public recolectores: Array<Recolector>;

  constructor(private route:Router, private recolectoresService:RecolectoresService) { }

  ngOnInit(): void {
    this.recolectores=[];
    this.recolectoresService.findAll().subscribe((recolectores:Array<Recolector>)=>this.recolectores=recolectores);
  }
  public nuevoRecolector(){
    this.route.navigate(['/recolectores/nuevorecolector']);
  }
}
