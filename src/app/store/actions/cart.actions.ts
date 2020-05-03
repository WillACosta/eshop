import { ActionTypes } from '../actionsTypes/ActionTypes';
import { Action } from '@ngrx/store';

import { Product } from 'src/app/models/product.model';

//Ações são como eventos a serem disparados quando necessários
export class AddToCart implements Action {
  readonly type = ActionTypes.Add;

  constructor(public payload: Product) {}
}

/**
 * Ação para buscar items do servidor e não precisa necessariamente
 * estar definida no reducer
 */
export class GetItems implements Action {
  readonly type = ActionTypes.LoadItems;
}

export class RemoveFromCart implements Action {
  readonly type = ActionTypes.Remove;

  constructor(public payload: Product) {}
}

export class LoadItems implements Action {
  readonly type = ActionTypes.LoadSuccess;

  constructor(public payload: Product[]) {}
}

export class ClearCart implements Action {
  readonly type = ActionTypes.Clear;
}

/**
 * Exportação para definir todas as ações possíveis
 */
export type ActionsUnion =
  | AddToCart
  | RemoveFromCart
  | LoadItems
  | GetItems
  | ClearCart;
