import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/shared/models/producto.model';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  productos: Producto[];

  constructor(
    private router: Router,
    private productoService: ProductoService,
    private activadRoute: ActivatedRoute
  ) {
    this.productoService.obtenerProductos().subscribe((productos: any) => {
      this.productos = productos;
      console.log(this.productos);
    });
  }

  ngOnInit(): void {}
}
