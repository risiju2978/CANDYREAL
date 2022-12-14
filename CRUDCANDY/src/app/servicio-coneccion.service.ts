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


  getMuebles(): Observable<any> {
      return this.firestore.collection('mueble', ref => ref.orderBy('fechaCreacion', 'asc')).snapshotChanges();


  }

eliminarMueble(id: string): Promise<any> {
  return this.firestore.collection('mueble').doc(id).delete();
}

getMuebleEdit(id: string): Observable<any> {
  return this.firestore.collection('mueble').doc(id).snapshotChanges();
}

ActualizarMueble(id: string, data:any): Promise<any>{
  return this.firestore.collection('mueble').doc(id).update(data);
}
}
