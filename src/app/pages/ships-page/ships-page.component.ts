import { ShipsResponse } from '../../ships/models/ships-response.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { Observable } from 'rxjs';
import * as ShipsActions from '../../ships/store/ships.actions';

@Component({
  selector: 'app-ships-page',
  templateUrl: './ships-page.component.html',
  styleUrls: ['./ships-page.component.scss'],
})
export class ShipsPageComponent implements OnInit {
  public shipsResponse: ShipsResponse;
  // Estado de la consulta de ships
  public shipsState$: Observable<ShipsResponse>;

  constructor(private store: Store<AppState>) {
    // Observable del Store
    this.shipsState$ = this.store.select('ships');
  }

  ngOnInit(): void {
    this.store.dispatch({ type: ShipsActions.GET_SHIPS });
  }
}
