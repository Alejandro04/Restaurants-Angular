import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }

  MyForm = new FormGroup({
    customerName: new FormControl(''),
    orderNumber: new FormControl(''),
    order: new FormControl(''),
    status: new FormControl(false)
  });
}
