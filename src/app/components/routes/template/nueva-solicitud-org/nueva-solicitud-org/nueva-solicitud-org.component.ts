import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Arbol } from 'src/app/interfaces/arbol';
import { Familia } from 'src/app/interfaces/familia';
import { Recolector } from 'src/app/interfaces/recolector';
import { Solicitud } from 'src/app/interfaces/solicitud';
import { ArbolesService } from 'src/app/services/arboles/arboles.service';
import { FamiliasService } from 'src/app/services/familias/familias.service';
import { RecolectoresService } from 'src/app/services/recolectores/recolectores.service';
import { SolicitudesService } from 'src/app/services/solicitudes/solicitudes.service';

@Component({
  selector: 'app-nueva-solicitud-org',
  templateUrl: './nueva-solicitud-org.component.html',
  styleUrls: ['./nueva-solicitud-org.component.scss']
})
export class NuevaSolicitudOrgComponent implements OnInit {
  idArbol:number;
  public arbol:Arbol;
  public familia:Familia;
  public recolectores:Array<Recolector>;
  public nuevaSolicitud:Solicitud;
  public recolectorSelect:number;
  constructor(private route:ActivatedRoute,private arbolesService:ArbolesService, private familiaService:FamiliasService, private recolectoresService:RecolectoresService, private solicitudesService:SolicitudesService) { 
    this.idArbol=parseInt(this.route.snapshot.paramMap.get('id')); 
  }

  ngOnInit(): void {
    this.recolectores=[];
    this.recolectorSelect=-1;
    this.arbolesService.findArbol(this.idArbol).subscribe(arbol=>{this.arbol=arbol
    this.familiaService.findFamilia(arbol.id_familia).subscribe(familia=>this.familia=familia)
    });

    this.recolectoresService.findAll().subscribe(response=>this.recolectores=response);

    this.nuevaSolicitud={
      acepta_familia:false,
      acepta_org:true,
      arbol:this.idArbol
    }

    
  }
  public pedirDonacion(){
    if(this.recolectorSelect!=undefined &&this.recolectorSelect!=NaN&&this.recolectorSelect!=-1){
      
      
      this.nuevaSolicitud.recolector=(this.recolectorSelect);
      this.nuevaSolicitud.organizacion=1;//cambiar
      
      this.solicitudesService.createSolicitud(this.nuevaSolicitud).subscribe(solicitud => console.log(solicitud))
      
      

    }else console.log("Error al cargar nueva solicitud");
  }

}
