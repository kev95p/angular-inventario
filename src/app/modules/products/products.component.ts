import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'app/services/products.service';
import { Product } from 'app/models/Product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var $;
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public productos: Array<Product>;
  public cabeceras = ['Id', 'Nombre', 'Stock', 'Unidad'];
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
    this.productsService.getAll().subscribe((res) => {
      this.productos = res.products;

    });
  }

  onEdit(row) {
    console.log(row);
  }

  onDelete(id) {
    console.log(id);
  }

  agregar() {
    $('#formModal').modal('show');
  }

  guardar() {

  }

}
