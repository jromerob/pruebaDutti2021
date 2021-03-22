import { LoginResponseModel } from './../../users/models/login-response.model';
import { UsersService } from './../../users/services/users.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { tap, catchError, take } from 'rxjs/operators';
import { UserModel } from 'src/app/users/models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private loggedUser: UserModel = null;

  // Observable cambios en el usuario autorizado
  private authStateSource = new Subject<LoginResponseModel>();
  public authState$: Observable<LoginResponseModel>;

  constructor(
    private httpClient: HttpClient,
    private usersService: UsersService
  ) {
    this.authState$ = this.authStateSource.asObservable();
  }

  /**
   * Valida si hay un usuario logado.
   * Puede recibir un mensaje,para mostrar si el usuario no está logado,
   */
  public isAuthenticated(noUserLoggedMsg?: string): boolean {
    const flagUserLogged = this.loggedUser !== null;
    return flagUserLogged;
  }

  /**
   * Retorna el usuario logado
   *
   */
  public getCurrentUser(): UserModel {
    return this.loggedUser;
  }

  /**
   *  Publica el registro del usuario en el sistema
   *
   */
  public register(loggedUser: UserModel) {
    // llamar al sevicio de registro
    this.authStateSource.next({ user: loggedUser, error: null });
  }

  /**
   * Realiza el intento de login del usuario por email y contraseña
   *
   */
  public logIn(username: string, password: string) {
    const op = 'acceso de usuario ';
    this.usersService
      .validate(username, password)
      .pipe(take(1))
      .subscribe((loginResponse) => this.setLogIn(loginResponse));
  }

  /**
   * Cancela el login del usuario actual
   *
   */
  public logOut() {
    this.loggedUser = null;
    this.authStateSource.next(null);
  }

  private setLogIn(loginResponse: LoginResponseModel) {
    this.loggedUser = loginResponse.user;
    this.authStateSource.next(loginResponse);
  }
}
