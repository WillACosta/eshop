import { Store } from '@ngrx/store';
import { Product } from 'src/app/models/product.model';
import { Component, OnInit, Input } from '@angular/core';
import { AddToCart } from 'src/app/store/actions/cart.actions';
import { ToastrService } from 'ngx-toastr';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent implements OnInit {
  /**
   * Recebe objeto do produto por injeção
   */
  @Input() produto: Product;

  constructor(
    private store: Store<{ items: []; cart: [] }>,
    private toastr: ToastrService,
    private localServ: LocalService
  ) {}

  ngOnInit(): void {}

  add(item: Product) {
    this.store.dispatch(new AddToCart(item));
    this.toastr.success(
      `${this.produto.name} adicionado ao carrinho!`,
      'Sucesso'
    );
    this.localServ.update();
  }
}
