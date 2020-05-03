import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  cart: [];

  constructor(private store: Store<{ items: []; cart: [] }>) {
    this.store.pipe(select(<any>'shop')).subscribe((data) => {
      this.cart = data.cart;
    });
  }

  ngOnInit(): void {}
}
