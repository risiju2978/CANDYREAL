import { Routes, RouterModule } from '@angular/router'; // CLI imports router


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//modulos

import { AngularFireModule } from '@angular/fire/compat';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//componentes
import { CrudComponent } from './crud/crud.component';
import { AgregarMueblesComponent } from './agregar-muebles/agregar-muebles.component';
import { environment } from 'src/environments/environment';
import { ToastrModule } from 'ngx-toastr';







const routes: Routes = [
  { path:'', redirectTo: 'crud', pathMatch:'full'},
  { path: 'crud', component: CrudComponent },
  { path: 'agregar-muebles', component: AgregarMueblesComponent },
  { path: 'editar-muebles/:id',  component: AgregarMueblesComponent },
  { path: '**', redirectTo: 'crud', pathMatch: 'full'},

];




@NgModule({
  declarations: [
    AppComponent,
    CrudComponent,
    AgregarMueblesComponent,
  
    
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule, 
    AngularFireModule.initializeApp(environment.firebase),
    
    AngularFirestoreModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    ToastrModule,
    BrowserAnimationsModule,
    CommonModule,
    ToastrModule.forRoot()
   
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
