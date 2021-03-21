import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ShipsService } from '../services/ships.service';
import * as ShipsActions from './ships.actions';

@Injectable()
export class ShipsEffects {
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ShipsActions.GET_SHIPS),
      mergeMap(() =>
        this.shipsService.getAll().pipe(
          map((shipsResponse) => ({
            type: ShipsActions.GET_SHIPS_SUCCESS,
            payload: shipsResponse,
          })),
          catchError(() => of({ type: ShipsActions.GET_SHIPS_ERROR }))
        )
      )
    )
  );

  constructor(private actions$: Actions, private shipsService: ShipsService) {}
}
