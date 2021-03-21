import { ShipsResponse } from './../../ships/models/ships-response.model';
import { Component, OnInit } from '@angular/core';
import { ShipsService } from 'src/app/ships/services/ships.service';
import { Store } from '@ngrx/store';
import { AppState } from './../../app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss'],
})
export class ShipsComponent implements OnInit {
  public shipsResponse: ShipsResponse;
  // Estdo de la consulta de ships
  public shipsState$: Observable<ShipsResponse>;

  constructor(
    private shipsService: ShipsService,
    private store: Store<AppState>
  ) {
    // Observable del Store
    this.shipsState$ = this.store.select('ships');
  }

  ngOnInit(): void {
    this.shipsService.getShips().subscribe((shipsResponse) => {
      this.shipsResponse = shipsResponse;
      console.log('SHIPS -->', this.shipsResponse.results);
    });
  }
}
