import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  title: string = 'Órdenes'
  panelOpenState = false;
  plates: string[] = ['Hamburguesa', 'Pizza', 'Perritos', ];

  constructor() { }

  ngOnInit(): void {
  }

}
