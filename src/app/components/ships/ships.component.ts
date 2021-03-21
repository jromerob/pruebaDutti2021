import { Component, OnInit } from '@angular/core';
import { ShipsResponse } from 'src/app/ships/models/ships-response.model';
import { ShipsService } from 'src/app/ships/services/ships.service';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss'],
})
export class ShipsComponent implements OnInit {
  public shipsResponse: ShipsResponse;

  constructor(private shipsService: ShipsService) {}

  ngOnInit(): void {
    this.shipsService.getShips().subscribe((shipsResponse) => {
      this.shipsResponse = shipsResponse;
      console.log('SHIPS -->', this.shipsResponse.results);
    });
  }
}
