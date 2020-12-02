import { Component, OnInit } from '@angular/core';
import { Familia } from 'src/app/interfaces/familia';
import { FamiliasService } from 'src/app/services/familias/familias.service';

@Component({
  selector: 'app-familias',
  templateUrl: './familias.component.html',
  styleUrls: ['./familias.component.scss']
})
export class FamiliasComponent implements OnInit {
  public familias:Array<Familia>;
  constructor(private familiasService:FamiliasService) { }

  ngOnInit(): void {
    this.familiasService.findAllFamilias()
    .subscribe((response: Array<Familia>) => {
    this.familias = response;
  });
  }
  

}
