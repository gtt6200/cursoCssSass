import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { NosotrosComponent } from './ecommerce/nosotros/nosotros.component';
import { BlogComponent } from './ecommerce/blog/blog.component';
import { TiendaComponent } from './ecommerce/tienda/tienda.component';
import { GaleriaComponent } from './ecommerce/galeria/galeria.component';
import { ContactoComponent } from './ecommerce/contacto/contacto.component';


const routes: Routes = [
  { path: "inicio", component: EcommerceComponent },
  { path: "nosotros", component: NosotrosComponent },
  { path: "blog", component: BlogComponent },
  { path: "tienda", component: TiendaComponent },
  { path: "galeria", component: GaleriaComponent },
  { path: "contacto", component: ContactoComponent },
  { path: "**", redirectTo: "inicio" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
