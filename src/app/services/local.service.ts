import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class LocalService {
  cart: [] = [];

  constructor(private store: Store<{ cart: []; items: [] }>) {
    this.store.pipe(select(<any>'shop')).subscribe((data) => {
      this.cart = data.cart;
    });
  }

  /**
   * A cada atualização do carrinho este é salvo no local storage
   * (Pode ser usado para recuperar os dados mais tarde caso o usuário feche o navegador
   * o carrinho continuará com os items)
   */
  update() {
    localStorage.setItem('@eshopCart', JSON.stringify(this.cart));
  }

  clear() {
    localStorage.clear();
  }
}
