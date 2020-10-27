import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

interface Plate {
  name: string,
  price: number,
}

@Component({
  selector: 'app-plates-list',
  templateUrl: './plates-list.component.html',
  styleUrls: ['./plates-list.component.css']
})
export class PlatesListComponent {
  @Input() plates: any[];
  @Output() plateEvent = new EventEmitter<Plate>();
  @Output() deletePlate = new EventEmitter<string>();
  dataSource: MatTableModule;
  name: string;

  ngOnChanges(): void {
    this.dataSource = this.plates
  }

  displayedColumns: string[] = ['name', 'price', 'edit', 'delete'];

  addPlateToForm(name: string, price: number) {
    const plate = {
      name,
      price
    }
    this.plateEvent.emit(plate);
  }

  deletePlateForRecords(value: string){
    this.deletePlate.emit(value)
  }

}
