import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from 'src/app/models/product.model';
import { Store, select } from '@ngrx/store';
import { GetItems } from 'src/app/store/actions/cart.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  items: Product[] = [];

  constructor(private store: Store<{ items: Product[]; cart: [] }>) {
    store.pipe(select(<any>'shop')).subscribe((data) => {
      this.items = data.items;
    });
  }

  ngOnInit(): void {
    this.store.dispatch(new GetItems());
  }
}
