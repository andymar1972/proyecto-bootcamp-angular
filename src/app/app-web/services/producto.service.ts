import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Producto } from 'src/app/shared/models/producto.model';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  producto: Producto;
  productos: Producto[];
  constructor(private fireStore: AngularFirestore) {
    this.obtenerProductos().subscribe((res) => {
      console.log(res.filter((x) => x.id === '3n5Wwh2I1BPXHiD3YQS6')[0]);
    });
  }
  obtenerProductos(): Observable<Producto[]> {
    return this.fireStore
      .collection('productos')
      .valueChanges({
        idField: 'id',
      })
      .pipe(map((productos) => productos as Producto[]));
  }
}
