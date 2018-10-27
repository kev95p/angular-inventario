import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductsService } from 'app/services/products.service';
import { Product } from 'app/models/Product';
import { FormBuilder, FormGroup } from '@angular/forms';

declare var $;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  public productos:Array<Product>;
  public cabeceras = ["Id","Nombre","Stock","Unidad"];
  public productForm: FormGroup;

  constructor(public http: HttpClient, public productsService: ProductsService
    ,private fb: FormBuilder) {
      this.productForm = this.fb.group({

      })
  }

  ngOnInit() {
    this.productsService.getAll().subscribe((res)=>{
      this.productos = res.products;

    })
  }

  onEdit(row){
    console.log(row)
  }

  onDelete(id){
    console.log(id)
  }

  agregar(){
    $('#formModal').modal('show');
  }

  guardar(){

  }



}
