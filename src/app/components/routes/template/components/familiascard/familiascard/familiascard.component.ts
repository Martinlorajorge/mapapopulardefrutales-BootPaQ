import { Component, Input, OnInit } from '@angular/core';
import { Familia } from 'src/app/interfaces/familia';

@Component({
  selector: 'app-familiascard',
  templateUrl: './familiascard.component.html',
  styleUrls: ['./familiascard.component.scss']
})
export class FamiliascardComponent implements OnInit {
  @Input() familia:Familia;
  constructor() { }

  ngOnInit(): void {
  }

}
