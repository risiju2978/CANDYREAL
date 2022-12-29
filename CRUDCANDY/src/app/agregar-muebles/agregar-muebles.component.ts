import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { ServicioConeccionService } from '../servicio-coneccion.service';

@Component({
  selector: 'app-agregar-muebles',
  templateUrl: './agregar-muebles.component.html',
  styleUrls: ['./agregar-muebles.component.less']
})
export class AgregarMueblesComponent implements OnInit {
AgregarMuebles: FormGroup;
submitted = false;
loading = false;
id: string | null;
  public titulo!: boolean;
 public archivos: any = [];
 public previsualizacion!: string;


  constructor(private fb: FormBuilder,
                private _ServicioConeccionService: ServicioConeccionService,
                 private router: Router,
                  private toastr: ToastrService,
                  private aRoute: ActivatedRoute,
                  private sanitizer: DomSanitizer) { 
                  this.AgregarMuebles = this.fb.group({
      Nombre:['', Validators.required],
      Descripcion:['', Validators.required],
      Precio:['', Validators.required],
      Foto:['', Validators.required],
    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
                
  }

  ngOnInit(): void {
    this.EditarMueble()
  }

  capturarFile(event: any) {
      const archivoCapturado = event.target.files[0];
      this.extraerBase64(archivoCapturado).then((imagen: any) =>{
        this.previsualizacion = imagen.base;
      })
      this.archivos.push(archivoCapturado)
  }
extraerBase64 = async ($event: any) => new Promise((resolve, reject) =>{
  try{
    const unsafeImg = window.URL.createObjectURL($event);
    const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
    const reader = new FileReader();
    reader.readAsDataURL($event);
    reader.onload = () =>{
      resolve({
        
       image,
        base: reader.result
      });
    };
    reader.onerror = error =>{
      resolve({

        image,
        base: null
      });
    };
  }catch (e){
    return null;
  }
})

subirArchivo(): any {
  try{
    const formularioDeDatos = new FormData();
    this.archivos.forEach((archivo: string | Blob) =>{
      formularioDeDatos.append('files', archivo)
    })
   
  }catch(e){
    console.log('ERROR',e);
  }
}

  agregarEditarMueble(){
    this.submitted = true;
    if(this.AgregarMuebles.invalid){
      return;
    }
    if(this.id === null){
      this.Agregar_mueble();
       
    }else{
      this.EditarMuebleAhora(this.id);
    }
  }
Agregar_mueble(){
  this.titulo = true;
  this.submitted = true;
  if(this.AgregarMuebles.invalid){
    return;
  }
  const mueble: any ={
    Nombre: this.AgregarMuebles.value.Nombre,
    Descripcion: this.AgregarMuebles.value.Descripcion,
    Precio: this.AgregarMuebles.value.Precio,
    Foto: this.AgregarMuebles.value.Foto,
    fechaCreacion: new Date(),
    fechaActualizacion: new Date(),
  }
  this.loading = true;
  this._ServicioConeccionService.AgregarMuebles(mueble).then(()=>{
    this.toastr.success('¡El mueble fue registrado con exito!', 'Mueble agregado al catalogo',{
      positionClass: 'toast-bottom-right'
    })
     
  
    this.loading = false;
    this.router.navigate(['/crud']);
  }).catch((error: any) => {
    this.toastr.error('Hubo un error al agregar el producto','ERROR',{positionClass: 'toast-bottom-right'});
    this.loading = false;
  })
  
}
EditarMuebleAhora(id: string){
  const mueble: any ={
    Nombre: this.AgregarMuebles.value.Nombre,
    Descripcion: this.AgregarMuebles.value.Descripcion,
    Precio: this.AgregarMuebles.value.Precio,
    Foto: this.AgregarMuebles.value.Foto,
    fechaActualizacion: new Date(),
  }
  this.loading = true;
  this._ServicioConeccionService.ActualizarMueble(id, mueble ).then(() =>{
    this.loading = false;
    this.toastr.info('El producto fue modificado con exito','Producto modificado', {
      positionClass: 'toast-bottom-right'
    })
    this.router.navigate(['/crud']);
  }).catch((error: any) => {
    this.toastr.error('Hubo un error al modificar el producto','ERROR',{positionClass: 'toast-bottom-right'});
    this.loading = false;
})
}
EditarMueble(){
  this.titulo = false;
  if(this.id !== null){
    this.loading = true;
    this._ServicioConeccionService.getMuebleEdit(this.id).subscribe(data =>{
     this.loading = false;
      this.AgregarMuebles.setValue({
        Nombre: data.payload.data()['Nombre'],
        Descripcion: data.payload.data()['Descripcion'],
        Precio: data.payload.data()['Precio'],
        Foto: data.payload.data()['Foto'],
      })
    })
  }
}
}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

