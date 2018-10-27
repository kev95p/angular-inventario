import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ProductsJson } from 'app/models/responses/ProductsJson';

@Injectable()
export class ProductsService {

  constructor(public http: HttpClient) { }

  getAll() {
    return this.http.get<ProductsJson>('http://localhost:3000/products/getAll');
  }


  getAllCount(){
    return this.http.get<any>("http://localhost:3000/products/getAll")
        .pipe(
            map(res=>{    
                let count = res.products.length;
                return count;
        }));
  }

}
