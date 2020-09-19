import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-plates',
  templateUrl: './plates.component.html',
  styleUrls: ['./plates.component.css']
})
export class PlatesComponent {
  title: string = 'Platos'
  plates: Observable<any[]>;

  constructor(firestore: AngularFirestore) {
    this.plates = firestore.collection('plates').valueChanges();
  }

}
