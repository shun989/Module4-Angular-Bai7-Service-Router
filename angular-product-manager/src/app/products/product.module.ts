import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ProductCreateComponent} from "./product-create/product-create.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductEditComponent} from "./product-edit/product-edit.component";
import {ProductDeleteComponent} from "./product-delete/product-delete.component";
import {ReactiveFormsModule} from "@angular/forms";
import {ProductRoutingModule} from "./product-routing.module";



@NgModule({
  declarations: [
    // ProductCreateComponent,
    ProductListComponent,
    ProductEditComponent,
    ProductDeleteComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
