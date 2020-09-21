import { Component, Input, OnChanges } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

interface Orders {
  customer: string,
  order: string,
  plate: any,
  date: string
}

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})

export class OrdersListComponent {
  @Input() orders: any[];
  dataSource: MatTableModule;

  ngOnChanges(): void {
    this.dataSource = this.orders
  }

  displayedColumns: string[] = [
    'customer', 
    'order', 
    'plate', 
    'date'
  ];
}
