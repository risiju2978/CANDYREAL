import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ServicioConeccionService } from 'src/app/servicio-coneccion.service' ;
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.less']
})
export class CrudComponent implements OnInit {
  ListaMueble: any[] = [];

 

/*Muebles:Array<any> = [
{ID_mueble:12345,nombre_mueble:'mesa',descripcion_mueble:'bonito mueble',precio_mueble: 1500,foto_mueble:'imagen'}

];*/


  constructor(private _ServicioConeccionService: ServicioConeccionService, 
    private toastr: ToastrService) { 

  }

  ngOnInit(): void {
    this.getMuebles
  }

  getMuebles(){
    this._ServicioConeccionService.getMuebles().subscribe(data => {
     this.ListaMueble = [];
      data.forEach((element: any) => {
          this.ListaMueble.push({
            id: element.payload.doc.id,
            ...element.payload.doc.data()
          })


      });
      console.log(this.ListaMueble);
    });

  }

  eliminarMueble(id: string){
    this._ServicioConeccionService.eliminarMueble(id).then(() => {
      this.toastr.error('El producto fue eliminado con exito', 'Registro eliminado!',{positionClass: 'toast-bottom-right'});
    }).catch(error => {
      this.toastr.error('Hubo un error al eliminar el producto','ERROR',{positionClass: 'toast-bottom-right'});
    }
    )
  }
}