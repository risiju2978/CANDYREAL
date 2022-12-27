import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioConeccionService {

  constructor(private firestore:AngularFirestore) { }

  AgregarMuebles(mueble: any): Promise<any> {
    return this.firestore.collection('mueble').add(mueble)
  }


  getMuebles() :Observable<any> {
      return this.firestore.collection('mueble', ref => ref.orderBy('fechaCreacion', 'asc')).snapshotChanges();


  }

}
