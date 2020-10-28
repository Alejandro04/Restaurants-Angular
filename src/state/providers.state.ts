import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { GetProviders, AddProvider, UpdateProviders, DeleteProvider } from './providers.actions';
import { ProvidersService } from '../app/shared/provider.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Provider } from '../app/shared/provider.interface';

export class ProvidersStateModel {
  public providers: string[];
  public selectedProvider: string;
}

const defaults = {
  providers: [],
  selectedProvider: null
};

@State<ProvidersStateModel>({
  name: 'providers',
  defaults
})
@Injectable()
export class ProvidersState {

  constructor(private readonly providerSvc: ProvidersService) {}

  @Action(AddProvider)
  addProvider(
    { getState, patchState }: StateContext<ProvidersStateModel>,
    { payload }: AddProvider
  ): Observable<Provider> {
    return this.providerSvc.addProvider(payload).pipe(
      tap((provider: Provider) => {
        const state = getState();
        patchState({
          providers: [...state.providers],
        });
      })
    );
  }
}