import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductEditComponent} from './product-edit/product-edit.component';
import {ProductDeleteComponent} from './product-delete/product-delete.component';


const routes: Routes = [
  // {
  //   path: 'edit/:id',
  //   component: ProductEditComponent
  // }, {
  //   path: 'delete/:id',
  //   component: ProductDeleteComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {
}
