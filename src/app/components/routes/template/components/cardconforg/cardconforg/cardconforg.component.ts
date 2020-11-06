import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Solicitud } from 'src/app/interfaces/solicitud';

@Component({
  selector: 'app-cardconforg',
  templateUrl: './cardconforg.component.html',
  styleUrls: ['./cardconforg.component.scss']
})
export class CardconforgComponent implements OnInit {
  @Input() solicitud: Solicitud;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  abrirSolicitud(){
    if(this.solicitud.tipo=="deFamilia")
      this.router.navigate(['/solicitudrecoleccion/']);
      else this.router.navigate(['/solicitudconfirmada/']);
  }
}
