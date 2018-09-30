import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  template: `<app-header></app-header>
             <router-outlet></router-outlet>
             <app-footer></app-footer>           `
})
export class AdminLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
