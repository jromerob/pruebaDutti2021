import { ShipModel } from './ship.model';

export interface ShipsResponse {
  count: number;
  next: string;
  previous: null;
  results: ShipModel[];
}
