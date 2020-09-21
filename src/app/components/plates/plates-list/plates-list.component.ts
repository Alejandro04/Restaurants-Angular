import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-plates-list',
  templateUrl: './plates-list.component.html',
  styleUrls: ['./plates-list.component.css']
})
export class PlatesListComponent {

  @Input() plates: any[];
  @Output() plateEvent = new EventEmitter<string>();
  @Output() deletePlate = new EventEmitter<string>();
  dataSource: MatTableModule;

  ngOnChanges(): void {
    this.dataSource = this.plates
  }

  displayedColumns: string[] = ['name', 'edit', 'delete'];

  addPlateToForm(value: string) {
    this.plateEvent.emit(value);
  }

  deletePlateForRecords(value: string){
    this.deletePlate.emit(value)
  }

}
