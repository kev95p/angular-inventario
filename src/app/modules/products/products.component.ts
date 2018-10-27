import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'app/services/products.service';
import { FormGroup, FormBuilder, Validators } from '../../../../node_modules/@angular/forms';

declare var $: any;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productForm: FormGroup;
  producto: any;
  constructor(private formBuilder: FormBuilder , public productsService: ProductsService) {
    this.productForm = formBuilder.group(
      {
        productName : ['', Validators.required],
        stock: ['', [Validators.required]],
        unit: ['', Validators.required]
      }
    );
    this.producto = {};
  }

  ngOnInit() {
  }

  save() {
    $('#exampleModal').modal('hide');
    this.producto = JSON.stringify(this.productForm.value);
  }

}
