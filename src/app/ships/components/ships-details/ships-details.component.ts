import * as ShipsActions from './../../store/ships.actions';
import { ShipModel } from './../../models/ship.model';
import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
declare var $: any;
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-ships-details',
  templateUrl: './ships-details.component.html',
  styleUrls: ['./ships-details.component.scss'],
})
export class ShipsDetailsComponent implements OnInit {
  @Input() ships: ShipModel[];
  @Input() currentPage: number;
  @Input() totalShips: number;

  public shipsPerPage = environment.resultsPerPAge;
  // Modal
  titleDetails = '';
  modelDetails = '';
  starshipClass = '';

  constructor(private store: Store) {}

  ngOnInit(): void {}

  // TODO establecer todas las imágenes al inicio para evitar funciones en el html
  getStarshipId(url: string) {
    // si la url termina en / lo eliminamos
    if (url[url.length - 1] === '/') {
      url = url.substring(0, url.length - 1);
    }
    const shipId = url.substring(url.lastIndexOf('/') + 1);
    const urlImage = `${environment.apis.starwarsVisualguide.baseUrl}${environment.apis.starwarsVisualguide.endpoints.shipsImages}/${shipId}.jpg`;
    return urlImage;
  }

  pageChanged(page: number) {
    this.store.dispatch({
      type: ShipsActions.GET_SHIPS_PAGE,
      payload: { page },
    });
  }

  openDetails(details) {
    $('#exampleModal').modal('show');
    this.titleDetails = details.name;
    this.modelDetails = details.model;
    this.starshipClass = details.starship_class;
  }
}
