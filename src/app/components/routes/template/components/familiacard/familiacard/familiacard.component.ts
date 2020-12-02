import { Component, Input, OnInit } from '@angular/core';
import { Familia } from 'src/app/interfaces/familia';

@Component({
  selector: 'app-familiacard',
  templateUrl: './familiacard.component.html',
  styleUrls: ['./familiacard.component.scss']
})
export class FamiliacardComponent implements OnInit {
  @Input() familia:Familia;
  constructor() { }

  ngOnInit(): void {
  }

}
