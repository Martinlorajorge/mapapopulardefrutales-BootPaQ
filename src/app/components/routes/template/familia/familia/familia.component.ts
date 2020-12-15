import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Familia } from 'src/app/interfaces/familia';
import { FamiliasService } from 'src/app/services/familias/familias.service';

@Component({
  selector: 'app-familia',
  templateUrl: './familia.component.html',
  styleUrls: ['./familia.component.scss']
})
export class FamiliaComponent implements OnInit {
  public idFamilia:number;
  public familia:Familia;
  constructor(private route:ActivatedRoute, private familiaService:FamiliasService) { 
    this.idFamilia=parseInt(this.route.snapshot.paramMap.get('id')); 
  }

  ngOnInit(): void {
    this.familiaService.findFamilia(this.idFamilia).subscribe((response : Familia)=>{
      this.familia=response;
    });
  }

}
