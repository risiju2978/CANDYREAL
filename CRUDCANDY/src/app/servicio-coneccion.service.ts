import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ServicioConeccionService {

  constructor(private firestore:AngularFirestore) { }

  AgregarMuebles(mueble: any): Promise<any> {
    return this.firestore.collection('mueble').add(mueble)
  }
}
