import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './components/orders/orders.component';
import { PlatesComponent } from './components/plates/plates.component';
import { ProvidersComponent } from './components/providers/providers.component';

const routes: Routes = [
  {
    path: '',
    component: OrdersComponent,
  },
  {
    path: 'orders',
    component: OrdersComponent,
  },
  {
    path: 'plates',
    component: PlatesComponent,
  },
  {
    path: 'providers',
    component: ProvidersComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
