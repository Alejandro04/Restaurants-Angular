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
  providers: Observable<any[]>;
  provider: Observable<any>;
  name = new FormControl('');
  phone = new FormControl('');
  step: number = 0;


  ngOnInit(): void {
    
  }

  createProvider() {
    const name = this.name.value;
    const phone = this.phone.value;
    const id = Math.floor((Math.random()*100)+1);
    if (this.action === true) {
      // create
      const newProvider = {
        id,
        name,
        phone
      };
      this.store.dispatch(new AddProvider(newProvider));
    } else {
      // update
      console.log(id)
      console.log("update")
    }
  }

  addProviderToForm(provider: any) {
    this.action = false
    this.name.setValue(provider.name)
    this.phone.setValue(provider.phone)
    this.oldNameForSearchAndAction = provider.name
  }

  deleteProviderForRecords(id: number){
    this.store.dispatch(new DeleteProvider(id));
  }

}
