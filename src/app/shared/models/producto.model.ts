export interface Producto {
  id?: string;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  fecha: Date;
  estado: boolean;
}
