import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ActionTypes } from '../actionsTypes/ActionTypes';

import { DataService } from '../../services/data.service';

@Injectable()
export class ShopEffects {
  @Effect()
  loadFruits$ = this.actions$.pipe(
    /**
     * ofType irá filtrar ações definidas na ActionTypes
     * mergeMap irá mesclar as ações no obervable
     */
    ofType(ActionTypes.LoadItems),
    mergeMap(() =>
      this.DataService.getProdutos().pipe(
        map((fruits) => {
          return { type: ActionTypes.LoadSuccess, payload: fruits };
        }),
        catchError(() => EMPTY)
      )
    )
  );

  constructor(
    private actions$: Actions, // Fluxo observável das ações despachadas
    private DataService: DataService
  ) {}
}

/**
 * Toda ação pode acionar um efeito antes da mesma ser concretizada e chegar aos reducers
 * Neste caso ao acessar a ação de LoadItems um effect é acionado para indicar se os produtos foram
 * carregados com sucesso ou não e todos os erros são apresentados caso exista ocorra algum.
 */
