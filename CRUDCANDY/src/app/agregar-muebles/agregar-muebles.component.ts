import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr/toastr/toastr.service';

import { ServicioConeccionService } from '../servicio-coneccion.service';

@Component({
  selector: 'app-agregar-muebles',
  templateUrl: './agregar-muebles.component.html',
  styleUrls: ['./agregar-muebles.component.less']
})
export class AgregarMueblesComponent implements OnInit {
AgregarMuebles: FormGroup;
submitted = false;
  constructor(private fb: FormBuilder,
                private _ServicioConeccionService: ServicioConeccionService,
                 private router: Router,
                  private toastr: ToastrService) { 
                  this.AgregarMuebles = this.fb.group({
      Nombre:['', Validators.required],
      Descripcion:['', Validators.required],
      Precio:['', Validators.required],
    })
  }

  ngOnInit(): void {
  }
Agregar_mueble(){
  this.submitted = true;
  if(this.AgregarMuebles.invalid){
    return;
  }
  const mueble: any ={
    Nombre: this.AgregarMuebles.value.Nombre,
    Descripcion: this.AgregarMuebles.value.Descripcion,
    Precio: this.AgregarMuebles.value.Precio,
    fechaCreacion: new Date(),
    fechaActualizacion: new Date(),
  }
  
  this._ServicioConeccionService.AgregarMuebles(mueble).then(()=>{
    this.toastr.success('¡El mueble fue registrado con exito!','Mueble agregado al catalogo')
    this.router.navigate(['/crud'])
  }).catch((error: any) => {
    console.log(error);
    
  })
  
}
}
