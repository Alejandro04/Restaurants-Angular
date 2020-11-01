import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Provider } from './provider.interface';

@Injectable({
  providedIn: 'root',
})
export class ProvidersService {
  constructor() {}

  private providers = [
    { id: 1, name: 'Comercializadora AB', phone: '+58123456789' },
    { id: 2, name: 'Comercializadora BC', phone: '+58123456781' },
    { id: 3, name: 'Comercializadora CD', phone: '+58123456782' },
    { id: 4, name: 'Comercializadora ED', phone: '+58123456783' },
  ];

  addProvider(provider: Provider): Observable<Provider> {
    this.providers = Object.assign([], this.providers);
    this.providers.push(provider);
    return of(provider);
  }

  getProviders(): Observable<Provider[]> {
    return of(this.providers);
  }

  updateProvider(provider: Provider): Observable<Provider[]> {
    const { id } = provider;
    this.providers = this.providers.filter((item) => item.id !== id);
    this.providers.push(provider);
    return of(this.providers);
  }

  deleteProvider(id: number): Observable<Provider[]> {
    this.providers = this.providers.filter((item) => item.id !== id);
    return of(this.providers);
  }
}