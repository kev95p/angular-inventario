import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit,OnChanges{
  @Input() items: Array<any>;
  @Input() headers: Array<String>;
  @Output() onEdit: EventEmitter<any> = new EventEmitter();
  @Output() onDelete: EventEmitter<any> = new EventEmitter();
  rows: Array<any>;
  constructor(){
    
  }

  ngOnInit(): void {
  }

  edit(row){
    this.onEdit.emit(row);
  }

  delete(id){
    this.onDelete.emit(id);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes["items"] && this.items != undefined){
      this.rows = [];
      this.items.forEach((val,index,arr) =>{
         let row = Object.keys(val).map((key)=>{
           return val[key]
         })
         this.rows.push(row)
      })
    }
  }
}
