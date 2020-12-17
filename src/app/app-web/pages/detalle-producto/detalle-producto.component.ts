import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/shared/models/producto.model';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css'],
})
export class DetalleProductoComponent implements OnInit {
  producto: Producto;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productoService: ProductoService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((parms) => {
      this.productoService.obtenerProductos().subscribe((res) => {
        this.producto = res.filter((x) => x.id === parms['id'].toString())[0];
      });
    });
  }

  ngOnInit(): void {}

  regresar() {
    this.router.navigateByUrl('/home');
  }
}
