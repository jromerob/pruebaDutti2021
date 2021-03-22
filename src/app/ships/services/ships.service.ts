import { ShipsResponse } from './../models/ships-response.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ShipsService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<ShipsResponse> {
    return this.http.get<ShipsResponse>(
      `${environment.apis.starWars.baseUrl}${environment.apis.starWars.endpoints.ships}`
    );
  }

  getPage(page: number): Observable<ShipsResponse> {
    return this.http.get<ShipsResponse>(
      `${environment.apis.starWars.baseUrl}${environment.apis.starWars.endpoints.ships}?page=${page}`
    );
  }
}
