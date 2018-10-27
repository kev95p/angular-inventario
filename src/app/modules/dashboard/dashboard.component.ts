import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductsService } from 'app/services/products.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public http: HttpClient, public productsService: ProductsService) {
  }

  ngOnInit() {
      this.productsService.getAllCount().subscribe((res)=>{
        console.log(res);
      })
  }

}
