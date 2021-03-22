import { ShipsResponse } from './ships-response.model';

export interface ShipsState {
  shipsResponse: ShipsResponse;
  currentPage: number;
}
