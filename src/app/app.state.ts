import { ShipsState } from './ships/models/ships-state.model';

export interface AppState {
  readonly ships: ShipsState;
}
