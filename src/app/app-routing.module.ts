import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarProductoComponent } from './app-web/pages/agregar-producto/agregar-producto.component';
import { DetalleProductoComponent } from './app-web/pages/detalle-producto/detalle-producto.component';
import { HomeComponent } from './app-web/pages/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'detalle-producto/:id', component: DetalleProductoComponent },
  { path: 'agregar-producto', component: AgregarProductoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
