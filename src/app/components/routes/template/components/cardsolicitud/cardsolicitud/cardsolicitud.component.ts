import { Component, Input, OnInit } from '@angular/core';
import { Arbol } from 'src/app/interfaces/arbol';
import { Solicitud } from 'src/app/interfaces/solicitud';
import { ArbolesService } from 'src/app/services/arboles/arboles.service';

@Component({
  selector: 'app-cardsolicitud',
  templateUrl: './cardsolicitud.component.html',
  styleUrls: ['./cardsolicitud.component.scss']
})
export class CardsolicitudComponent implements OnInit {
  @Input() solicitud: Solicitud;
  arbol:Arbol;
  constructor(private arbolesService: ArbolesService) { }

  ngOnInit(): void {
    this.arbolesService.findArbol(this.solicitud.arbol)
    .subscribe((response: Arbol) => {
      this.arbol = response;
    });
  }

}
