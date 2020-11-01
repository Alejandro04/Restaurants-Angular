import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import {  Provider } from '../../shared/provider.interface';
import { GetProviders, AddProvider, DeleteProvider, UpdateProvider } from '../../../state/providers.actions';
import { Select, Store } from '@ngxs/store';
import { ProvidersState } from './../../../state/providers.state';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent implements OnInit {

  @Select(ProvidersState.getProvidersList) providers$: Observable<Provider[]>;

  constructor(private store: Store) {
    this.store.dispatch(new GetProviders());
    this.action = true;
  }

  title: string = 'Proveedores'
  oldNameForSearchAndAction: string;
  panelOpenState = true;
  action: boolean = true;
  name = new FormControl('');
  phone = new FormControl('');
  providerID = new FormControl('');
  step: number = 0;

  ngOnInit(): void {}

  createProvider() {
    const name = this.name.value;
    const phone = this.phone.value;
    if (this.action === true) {
      // create
      const id = Math.floor((Math.random()*100)+1);
      const newProvider = {
        id,
        name,
        phone
      };
      this.store.dispatch(new AddProvider(newProvider));
    } else {
      // update
      const id = this.providerID.value
      const updateProvider = {
        id,
        name,
        phone
      };
      this.store.dispatch(new UpdateProvider(updateProvider));
    }
  }

  addProviderToForm(provider: any) {
    this.action = false
    this.name.setValue(provider.name)
    this.phone.setValue(provider.phone)
    this.providerID.setValue(provider.id)
    this.oldNameForSearchAndAction = provider.name
  }

  deleteProviderForRecords(id: number){
    this.store.dispatch(new DeleteProvider(id));
  }

}
