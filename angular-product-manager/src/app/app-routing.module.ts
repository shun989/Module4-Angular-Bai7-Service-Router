import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductListComponent} from "./products/product-list/product-list.component";
import {ProductCreateComponent} from "./products/product-create/product-create.component";

const routes: Routes = [
  {
    path: 'products/list',
    component: ProductListComponent
  },
  {
    path: 'products/create',
    component: ProductCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
