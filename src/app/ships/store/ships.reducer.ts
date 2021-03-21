import { ShipsActions } from './ships.actions';
import { ShipModel } from './../models/ship.model';
// 1 - Importaciones

import * as ShipActions from './ships.actions';

// 2 - Estado inicial
const initialState: ShipModel[] = [];

// 3 - Switch con las funciones puras
export function ShipsReducer(
  state: ShipModel[] = initialState,
  action: ShipsActions
) {
  switch (action.type) {
    case ShipActions.ADD_SHIP:
      return [...state, action.payload];
    case ShipActions.GET_SHIPS:
      // TODO Effecto para cargar ships
      return state;
    case ShipActions.GET_SHIPS_PAGE:
      // TODO Effecto para cargar ships paginados
      return state;
    default:
      return state;
  }
}
