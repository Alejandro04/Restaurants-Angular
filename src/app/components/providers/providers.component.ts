import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import {  Provider } from '../../shared/provider.interface';
import { GetProviders } from '../../../state/providers.actions';
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
  //  this.providers = this.providers$;
  }

  title: string = 'Proveedores'
  oldNameForSearchAndAction: string;
  panelOpenState = true;
  action: boolean = true;
  providers: Observable<any[]>;
  provider: Observable<any>;
  name = new FormControl('');
  phone = new FormControl('');


  ngOnInit(): void {
    
  }

}
