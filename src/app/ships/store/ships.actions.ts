import { Action } from '@ngrx/store';
import { ShipModel } from '../models/ship.model';

export const GET_SHIPS = '[SHIPS] get ships';
export const GET_SHIPS_PAGE = '[SHIPS] get ships page';
export const ADD_SHIP = '[SHIPS] add ship';

export class GetShips implements Action {
  readonly type = GET_SHIPS;
  constructor() {}
}

export class GetShipsPage implements Action {
  readonly type = GET_SHIPS_PAGE;
  constructor(public payload: { page: number }) {}
}

export class AddShip implements Action {
  readonly type = ADD_SHIP;
  constructor(public payload: ShipModel) {}
}

// Exportación de la acción
export type ShipsActions = GetShips | AddShip | GetShipsPage;
