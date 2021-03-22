import { ShipsState } from './../models/ships-state.model';
import { ShipsActions } from './ships.actions';

// 1 - Importaciones
import * as ShipActions from './ships.actions';
import { ShipsResponse } from '../models/ships-response.model';

// 2 - Estado inicial
const initialState: ShipsState = {
  currentPage: 0,
  shipsResponse: {
    count: 0,
    next: null,
    previous: null,
    results: [],
  },
};

// 3 - Switch con las funciones puras
export function ShipsReducer(
  state: ShipsState = initialState,
  action: ShipsActions
) {
  switch (action.type) {
    case ShipActions.GET_SHIPS:
      return state;
    case ShipActions.GET_SHIPS_PAGE:
      return state;
    case ShipActions.GET_SHIPS_ERROR:
      // NOTE esto se podría mostrar en un div en la página
      alert('Se ha producido un error en la carga');
      return state;
    case ShipActions.GET_SHIPS_SUCCESS:
      return { ...action.payload };
    default:
      return state;
  }
}
