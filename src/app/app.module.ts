import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { NosotrosComponent } from './ecommerce/nosotros/nosotros.component';
import { BlogComponent } from './ecommerce/blog/blog.component';
import { TiendaComponent } from './ecommerce/tienda/tienda.component';
import { GaleriaComponent } from './ecommerce/galeria/galeria.component';
import { ContactoComponent } from './ecommerce/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    EcommerceComponent,
    NosotrosComponent,
    BlogComponent,
    TiendaComponent,
    GaleriaComponent,
    ContactoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
