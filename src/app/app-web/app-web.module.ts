import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { DetalleProductoComponent } from './pages/detalle-producto/detalle-producto.component';
import { ProductoService } from './services/producto.service';
import { NavBarComponent } from '../shared/components/nav-bar/nav-bar.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { CardProductoComponent } from './components/card-producto/card-producto.component';
import { AppRoutingModule } from '../app-routing.module';
import { AgregarProductoComponent } from './pages/agregar-producto/agregar-producto.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    DetalleProductoComponent,
    NavBarComponent,
    FooterComponent,
    CardProductoComponent,
    AgregarProductoComponent,
  ],
  imports: [CommonModule, AppRoutingModule, ReactiveFormsModule],
  exports: [HomeComponent, NavBarComponent, FooterComponent],
  providers: [ProductoService],
})
export class AppWebModule {}
