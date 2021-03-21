import { ShipsResponse } from './ships/models/ships-response.model';

export interface AppState {
  readonly ships: ShipsResponse;
}
