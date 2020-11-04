import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-standard',
  templateUrl: './standard.component.html',
  styleUrls: ['./standard.component.scss']
})
export class StandardComponent implements OnInit {
  rutas:string;
  constructor(private activatedRoutes:ActivatedRoute) {
    this.rutas=this.activatedRoutes.snapshot.paramMap.get('id');
   }

  ngOnInit() {
    console.log(this.rutas);
  }

}
