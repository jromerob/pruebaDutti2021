import { ShipsActions } from './ships.actions';

// 1 - Importaciones
import * as ShipActions from './ships.actions';
import { ShipsResponse } from '../models/ships-response.model';

// 2 - Estado inicial
const initialState: ShipsResponse = {
  count: 0,
  next: null,
  previous: null,
  results: [],
};

// 3 - Switch con las funciones puras
export function ShipsReducer(
  state: ShipsResponse = initialState,
  action: ShipsActions
) {
  switch (action.type) {
    case ShipActions.GET_SHIPS:
      // TODO Effecto para cargar ships
      return state;
    case ShipActions.GET_SHIPS_PAGE:
      // TODO Effecto para cargar ships paginados
      return state;
    case ShipActions.GET_SHIPS_ERROR:
      // TODO Effecto para mostrar error
      return state;
    case ShipActions.GET_SHIPS_SUCCESS:
      // TODO Validar retorno de estado
      return { ...action.payload };
    default:
      return state;
  }
}
