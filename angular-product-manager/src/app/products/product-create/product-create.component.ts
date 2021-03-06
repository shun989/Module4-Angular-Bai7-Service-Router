import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  });

  constructor(private productService: ProductService,
              private router: Router,
              private toastr: ToastrService) { }


  ngOnInit(): void {
  }

  submit() {
    const product = this.productForm.value;
    this.productService.saveProduct(product);
    this.productForm.reset();
    this.router.navigate(['/products/list']);
    this.toastr.success('Create success!', 'Success!');
  }
}
