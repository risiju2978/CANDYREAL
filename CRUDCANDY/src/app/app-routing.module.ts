import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { AgregarMueblesComponent } from './agregar-muebles/agregar-muebles.component';

const routes: Routes = [
  {path:'', redirectTo: 'crud', pathMatch:'full'},
  {path: 'crud' , component:CrudComponent},
  {path: 'agregar-muebles' , component:AgregarMueblesComponent},
  {path: 'editar-muebles/:id' ,component:AgregarMueblesComponent},
  {path:'**', redirectTo: 'crud', pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
