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
  oldNameForSearchAndAction: string;
  panelOpenState = true;
  action: boolean = true;
  step: number = 0;
  plates: Observable<any[]>;
  plate: Observable<any>;
  tutorials: Observable<any[]>;
  name = new FormControl('');

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
      let doc = this.firestore.collection('plates', ref => ref.where('name', '==', this.oldNameForSearchAndAction));
      doc.snapshotChanges().subscribe((res: any) => {
        let id = res[0].payload.doc.id;
        this.firestore.collection('plates').doc(id).update({ name: name });
        this.name.setValue("")
      });
    }
  }

  addPlateToForm(plate: any) {
    this.action = false
    this.name.setValue(plate)
    this.oldNameForSearchAndAction = plate
  }

  deletePlateForRecords(value: string){
    let doc = this.firestore.collection('plates', ref => ref.where('name', '==', value));
      doc.snapshotChanges().subscribe((res: any) => {
        let id = res[0].payload.doc.id;
        this.firestore.collection('plates').doc(id).delete()
        this.name.setValue("")
      });
  }
}
