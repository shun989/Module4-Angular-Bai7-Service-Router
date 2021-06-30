import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../../../../wfda-angular-product-management/src/app/service/product.service";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  constructor(){

  }
  // productForm: FormGroup ;
  // productForm: FormGroup = new FormGroup({
  //   id: new FormControl(),
  //   name: new FormControl(),
  //   price: new FormControl(),
  //   description: new FormControl(),
  // });
  //
  // id: number;
  //
  // constructor(private productService: ProductService,
  //             private activatedRoute: ActivatedRoute) {
  //   this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
  //     // @ts-ignore
  //     this.id = +paramMap.get('id');
  //     const product = this.getProduct(this.id);
  //     this.productForm = new FormGroup({
  //       id: new FormControl(product?.id),
  //       name: new FormControl(product?.name),
  //       price: new FormControl(product?.price),
  //       description: new FormControl(product?.description),
  //     });
  //   });
  // }
  //
  ngOnInit() {
  }
  //
  // getProduct(id: number) {
  //   return this.productService.findById(id);
  // }
  //
  // updateProduct(id: number):void {
  //   const product = this.productForm.value;
  //   this.productService.updateProduct(id, product);
  //   alert('Cập nhật thành công');
  // }

}
