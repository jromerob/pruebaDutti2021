import { ShipsResponse } from './../../ships/models/ships-response.model';
import { Component, OnInit } from '@angular/core';
import { ShipsService } from '../../ships/services/ships.service';
import { Store } from '@ngrx/store';
import { AppState } from './../../app.state';
import { Observable } from 'rxjs';
import * as ShipsActions from '../../ships/store/ships.actions';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss'],
})
export class ShipsComponent implements OnInit {
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
