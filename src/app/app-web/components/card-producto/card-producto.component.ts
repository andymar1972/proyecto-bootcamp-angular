import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/shared/models/producto.model';

@Component({
  selector: 'app-card-producto',
  templateUrl: './card-producto.component.html',
  styleUrls: ['./card-producto.component.css'],
})
export class CardProductoComponent implements OnInit {
  @Input() producto: Producto;
  @Input() id: string;
  constructor() {}

  ngOnInit(): void {}
}
