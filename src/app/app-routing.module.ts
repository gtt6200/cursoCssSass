import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { NosotrosComponent } from './ecommerce/nosotros/nosotros.component';

const routes: Routes = [
  {
    path: "inicio", component: EcommerceComponent,
  }, {
    path: "nosotros", component: NosotrosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
