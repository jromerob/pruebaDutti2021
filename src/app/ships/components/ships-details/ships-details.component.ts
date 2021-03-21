import { ShipModel } from './../../models/ship.model';
import { ShipsModule } from './../../ships.module';
import { Component, OnInit, Input } from '@angular/core';
import { ShipsResponse } from '../../models/ships-response.model';
import { environment } from 'src/environments/environment';
import { env } from 'process';
declare var $: any;

@Component({
  selector: 'app-ships-details',
  templateUrl: './ships-details.component.html',
  styleUrls: ['./ships-details.component.scss'],
})
export class ShipsDetailsComponent implements OnInit {
  @Input() ships: ShipModel[];
  config: any;
  shipId = '';
  url = '';
  // Modal
  titleDetails = '';
  modelDetails = '';
  starshipClass = '';

  constructor() {}

  ngOnInit(): void {
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.ships.length,
    };
  }

  // TODO establecer todas las imágenes al inicio para evitar funciones en el html
  getStarshipId(url: string) {
    // si la url termina en / lo eliminamos
    if (url[url.length - 1] === '/') url = url.substring(0, url.length - 1);
    this.shipId = url.substring(url.lastIndexOf('/') + 1);
    const urlImage = `${environment.apis.starwarsVisualguide.baseUrl}${environment.apis.starwarsVisualguide.endpoints.shipsImages}/${this.shipId}.jpg`;
    return urlImage;
  }

  pageChanged(event) {
    // TODO Despachar paginación
    this.config.currentPage = event;
  }

  openDetails(details) {
    $('#exampleModal').modal('show');
    this.titleDetails = details.name;
    this.modelDetails = details.model;
    this.starshipClass = details.starship_class;
  }
}
