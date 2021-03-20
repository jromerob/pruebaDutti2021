import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(public httpClient: HttpClient) {}

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  /**
   * Obtiene todos los usuarios
   */
  public getAll(): Observable<UserModel[]> {
    return this.httpClient.get<UserModel[]>(
      `${environment.apis.dutti.baseUrl}${environment.apis.dutti.endpoints.users}`
    );
    // TODO control de errores
  }

  public get(firstName: string): Observable<UserModel> {
    // TODO control de errores

    const op = 'Obtener usuario nombre' + firstName;

    return this.httpClient.get<UserModel>(
      `${environment.apis.dutti.baseUrl}${environment.apis.dutti.endpoints.users}/${firstName}`,
      this.httpOptions
    );
  }

  public update(user: UserModel): Observable<UserModel> {
    const op = 'Actualizar usuario';

    return this.httpClient.post<UserModel>(
      `${environment.apis.dutti.baseUrl}${environment.apis.dutti.endpoints.users}`,
      user,
      this.httpOptions
    );
  }
}
