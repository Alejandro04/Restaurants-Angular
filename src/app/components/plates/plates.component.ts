import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';

interface Plate {
  id: string,
  name: string
}

@Component({
  selector: 'app-plates',
  templateUrl: './plates.component.html',
  styleUrls: ['./plates.component.css']
})
export class PlatesComponent {
  title: string = 'Platos'
  plates: Observable<any[]>;
  plate: Observable<any>;
  name = new FormControl('');
  action: boolean = true;

  constructor(private firestore: AngularFirestore) {
    this.plates = firestore.collection('plates').valueChanges();
    this.action = true
  }

  createPlate() {
    const name = this.name.value;
    const id = this.firestore.createId();
    const data: Plate = { id, name };
    if (this.action === true) {
      // create
      this.firestore.collection('plates').add(data)
    } else {
      // update

      // get record for name
      // update record 
    }
  }

  addPlateToForm(plate: any) {
    this.action = false
    this.name.setValue(plate)
  }

}
