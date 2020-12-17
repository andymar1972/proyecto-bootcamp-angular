import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Producto } from 'src/app/shared/models/producto.model';
import { ProductoService } from '../../services/producto.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css'],
})
export class AgregarProductoComponent implements OnInit {
  forma: FormGroup;

  constructor(
    private router: Router,
    private productoService: ProductoService,
    private fireStore: AngularFirestore
  ) {
    this.forma = new FormGroup({
      nombre: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
      precio: new FormControl('', Validators.required),
      stock: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}

  agregarProducto() {
    if (!this.forma.invalid) {
      const productoNuevo: Producto = {
        nombre: this.nombreForm,
        descripcion: this.descripcionForm,
        precio: this.precioForm,
        stock: this.stockForm,
        fecha: new Date(),
        estado: true,
      };
      this.fireStore
        .collection('productos')
        .add(productoNuevo)
        .then((res) => {
          Swal.fire({
            title: 'Correcto',
            text: ' Se agrego el nuevo producto',
            icon: 'success',
          });
          this.limpiarCampos();
          this.regresar();
        });
    } else {
      Swal.fire({
        title: 'Ups!',
        text: ' Error al agregar producto ',
        icon: 'error',
      });
    }
  }
  limpiarCampos() {
    this.setDescripcionForm = '';
    this.setNombreForm = '';
    this.setPrecioForm = '';
    this.setStockForm = '';
  }
  regresar() {
    this.router.navigateByUrl('/home');
  }
  get nombreForm() {
    return this.forma.get('nombre').value;
  }
  set setNombreForm(value: string) {
    this.forma.get('nombre').setValue(value);
  }
  get descripcionForm() {
    return this.forma.get('descripcion').value;
  }
  set setDescripcionForm(value: string) {
    this.forma.get('descripcion').setValue(value);
  }
  get precioForm() {
    return this.forma.get('precio').value;
  }
  set setPrecioForm(value: string) {
    this.forma.get('precio').setValue(value);
  }
  get stockForm() {
    return this.forma.get('stock').value;
  }
  set setStockForm(value: string) {
    this.forma.get('stock').setValue(value);
  }
}
