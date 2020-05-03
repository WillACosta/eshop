import { Component, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { RemoveFromCart, ClearCart } from 'src/app/store/actions/cart.actions';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
})
export class CartPageComponent implements OnInit {
  cart: [] = [];
  total: number = 0;

  constructor(
    private store: Store<{ cart: []; items: [] }>,
    private localServ: LocalService
  ) {
    this.store.pipe(select(<any>'shop')).subscribe((data) => {
      this.cart = data.cart;
    });
  }

  ngOnInit(): void {
    this.cart.forEach((element: any) => {
      this.total += element.price;
    });
  }

  remove(item) {
    this.store.dispatch(new RemoveFromCart(item));
    this.total -= item.price;
    this.localServ.update();
  }

  clear() {
    this.store.dispatch(new ClearCart());
    this.total = 0;
    this.localServ.clear();
  }
}
