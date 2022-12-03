import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.less']
})
export class CrudComponent implements OnInit {
  title = 'CRUDCANDY';
Muebles:Array<any> = [
{nombre_mueble:'mesa',descripcion_mueble:'bonito mueble',precio_mueble: 1500,foto_mueble:'imagen'}

]
  constructor() { }

  ngOnInit(): void {
  }

}
