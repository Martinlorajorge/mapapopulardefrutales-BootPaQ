import { Component, OnInit } from '@angular/core';
import { Arbol } from 'src/app/interfaces/arbol';
import { ArbolesService } from 'src/app/services/arboles/arboles.service';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public arboles: Array<Arbol>;
    constructor(private arbolesService: ArbolesService) { }

    ngOnInit() {
        this.arbolesService.findAll()
    .subscribe((response: Array<Arbol>) => {
      this.arboles = response;
    });
    }

}
