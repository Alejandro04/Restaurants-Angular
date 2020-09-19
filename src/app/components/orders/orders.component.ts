import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

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

  constructor(firestore: AngularFirestore) {
    this.plates = firestore.collection('plates').valueChanges();
    this.orders = firestore.collection('orders').valueChanges();
  }

  ngOnInit(): void {
  }

}
