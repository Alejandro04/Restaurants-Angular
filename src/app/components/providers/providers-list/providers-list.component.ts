import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import {  Provider } from '../../../shared/provider.interface';


@Component({
  selector: 'app-providers-list',
  templateUrl: './providers-list.component.html',
  styleUrls: ['./providers-list.component.css']
})

export class ProvidersListComponent {

  @Input() providers: any[];
  @Output() providerEvent = new EventEmitter<Provider>();
  @Output() deleteProvider = new EventEmitter<string>();
  dataSource: MatTableModule;

  ngOnChanges(): void {
    this.dataSource = this.providers
  }

  displayedColumns: string[] = ['name', 'phone', 'edit', 'delete'];

  addProviderToForm(id: number, name: string, phone: string) {
    const provider = {
      id,
      name,
      phone
    }
    this.providerEvent.emit(provider);
  }

  deleteProviderForRecords(id: string){
    this.deleteProvider.emit(id)
  }

}
