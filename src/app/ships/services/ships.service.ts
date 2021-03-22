import { ShipsResponse } from './../models/ships-response.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ShipsService {
  private shipsResponsesCache: ShipsResponse[] = [];
  constructor(private http: HttpClient) {}

  getAll(): Observable<ShipsResponse> {
    return this.http.get<ShipsResponse>(
      `${environment.apis.starWars.baseUrl}${environment.apis.starWars.endpoints.ships}`
    );
  }

  getPage(page: number): Observable<ShipsResponse> {
    if (this.shipsResponsesCache[page]) {
      return of(this.shipsResponsesCache[page]);
    } else {
      return this.http
        .get<ShipsResponse>(
          `${environment.apis.starWars.baseUrl}${environment.apis.starWars.endpoints.ships}?page=${page}`
        )
        .pipe(
          tap(
            (shipsResponse) => (this.shipsResponsesCache[page] = shipsResponse)
          )
        );
    }
  }
}
