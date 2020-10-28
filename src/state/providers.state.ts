import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { GetProviders, AddProvider, UpdateProvider, DeleteProvider } from './providers.actions';
import { ProvidersService } from '../app/shared/provider.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Provider } from '../app/shared/provider.interface';

export class ProvidersStateModel {
  public providers: Provider[];
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

  @Action(GetProviders)
  getBook({
    getState,
    setState,
  }: StateContext<ProvidersStateModel>): Observable<Provider[]> {
    return this.providerSvc.getProviders().pipe(
      tap((providers: Provider[]) => {
        const state = getState();
        setState({ ...state, providers });
      })
    );
  }

  @Action(UpdateProvider)
  updateBook(
    { getState, setState }: StateContext<ProvidersStateModel>,
    { payload }: UpdateProvider
  ): Observable<Provider[]> {
    return this.providerSvc.updateProvider(payload).pipe(
      tap((providers: Provider[]) => {
        const state = getState();
        setState({ ...state, providers });
      })
    );
  }

  @Action(DeleteProvider)
  deleteProvider(
    { getState, patchState }: StateContext<ProvidersStateModel>,
    { id }: DeleteProvider
  ): Observable<Provider[]> {
    return this.providerSvc.deleteProvider(id).pipe(
      tap((providers: Provider[]) => {
        const state = getState();
        patchState({ ...state.providers, providers });
      })
    );
  }
}