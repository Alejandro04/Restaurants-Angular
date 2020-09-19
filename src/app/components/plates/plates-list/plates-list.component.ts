import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-plates-list',
  templateUrl: './plates-list.component.html',
  styleUrls: ['./plates-list.component.css']
})
export class PlatesListComponent {

  @Input() plates: any[];
  dataSource: MatTableModule;

  ngOnChanges(): void {
    this.dataSource = this.plates
  }

  displayedColumns: string[] = ['name', 'edit', 'delete'];

}
