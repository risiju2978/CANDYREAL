import { Component, OnInit } from '@angular/core';
import { ServicioConeccionService } from 'src/app/servicio-coneccion.service' ;
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.less']
})
export class CrudComponent implements OnInit {
  ListaMueble: any[] = [];

  title = 'CRUDCANDY';

/*Muebles:Array<any> = [
{ID_mueble:12345,nombre_mueble:'mesa',descripcion_mueble:'bonito mueble',precio_mueble: 1500,foto_mueble:'imagen'}

];*/


  constructor(private _ServicioConeccionService: ServicioConeccionService) { 

  }

  ngOnInit(): void {
    this.getListamuebles
  }

  getListamuebles(){
    this._ServicioConeccionService.getMuebles().subscribe((data: { Array: any[]; }) =>{
     this.ListaMueble =[];
      data.Array.forEach((element: any) =>{
          this.ListaMueble.push({
            id: element.payload.doc.id,
            ...element.payload.doc.data()
          })


      });
    });

  }
}