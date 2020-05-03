/**
 * Um redutor é uma função pura, portanto ele não lida com os efeitos colaterais
 * que possam vir a ocorrer, neste caso, os Effects existem para solucionar isso.
 */

import { ActionsUnion } from '../actions/cart.actions';
import { ActionTypes } from '../actionsTypes/ActionTypes';
import { Product } from 'src/app/models/product.model';

/**
 * Estado inicial do redutor, o usuário terá uma lista de items e um carrinho
 * para realizar as operações
 */
export const initialState = {
  items: [],
  cart: [],
};

/**
 * Realiza a transição de um estado para outro dentro da aplicação
 * @param state
 * @param action
 */
export function ShopReducer(state = initialState, action: ActionsUnion) {
  console.log(action);
  switch (action.type) {
    /**
     * Este estado é chamado quando requisição GET dos dados ao servidor é bem sucedida
     * e logo em seguida grava a response no array de items
     */
    case ActionTypes.LoadSuccess:
      return {
        ...state,
        items: [...action.payload],
      };

    case ActionTypes.Add:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case ActionTypes.Remove:
      return {
        ...state,
        cart: [
          ...state.cart.filter((item) => item.name !== action.payload.name),
        ],
      };

    case ActionTypes.Clear:
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }

  /**
   * (Implementar futuramente)
   * Calcular o total do carrinho dinâmicamente ao manipular as ações
   * @param products
   */
  function calcTotal(products: Product[]): number {
    let total: number = 0;
    products.forEach((element) => {
      total += element.price;
    });
    return total;
  }
}
