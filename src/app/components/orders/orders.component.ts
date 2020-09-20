import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';

interface Orders {
  customer: string,
  order: string,
  plate: any
}

interface Plate {
  name: string
}

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  title: string = 'Órdenes'
  panelOpenState = false;
  plates: Observable<any[]>;
  orders: Observable<any[]>;
  platesSelected: Plate[] = [];

  constructor(private firestore: AngularFirestore) {
    this.plates = firestore.collection('plates').valueChanges();
    this.orders = firestore.collection('orders').valueChanges();
  }

  ngOnInit(): void {
  }

  order = new FormControl('');
  customer = new FormControl('');

  addProduct(plate){
    this.platesSelected.push(plate.name)
    console.log(this.platesSelected)
  }

  createOrder() {
    const order = this.order.value;
    const customer = this.customer.value;
    const plate = this.platesSelected;
    const data: Orders = { order, customer, plate };
    this.firestore.collection('orders').add(data)
  }

}
