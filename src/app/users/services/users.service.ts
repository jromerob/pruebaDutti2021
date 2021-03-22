import { LoginResponseModel } from './../models/login-response.model';
import { map, take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserModel } from '../models/user.model';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  usersRef: AngularFirestoreCollection<UserModel>;

  constructor(private db: AngularFirestore) {
    this.usersRef = this.db.collection(environment.apis.dutti.endpoints.users);
  }

  /**
   * Obtiene la colección de usuarios
   */
  public getAll(): AngularFirestoreCollection<UserModel> {
    return this.usersRef;
  }

  /**
   *  Obtiene usuario por nombre de usuario
   */
  public get(userName: string): AngularFirestoreDocument<UserModel> {
    return this.db.doc<UserModel>(
      `${environment.apis.dutti.endpoints.users}/${userName}`
    );
  }

  /**
   * Crea el usuario estableciendo como índice su nombre de usuario
   */
  public create(user: UserModel): Promise<void> {
    return this.usersRef.doc(user.userName).set(user);
  }

  /**
   * elimina el usuario
   */
  public delete(user: UserModel): Promise<void> {
    return this.usersRef.doc(user.userName).delete();
  }

  /**
   *  Valida si existe un usuario por su nombre de usuario
   */

  public exists(userName: string): Promise<boolean> {
    return this.get(userName)
      .snapshotChanges()
      .pipe(
        map((changes) => changes.payload.exists),
        take(1)
      )
      .toPromise();
  }

  /**
   * Valida un usuario mediante su password
   */
  public validate(
    userName: string,
    password: string
  ): Observable<LoginResponseModel> {
    return this.get(userName)
      .snapshotChanges()
      .pipe(
        map((changes) => {
          if (changes.payload.exists) {
            const user = changes.payload.data();
            if (user.password === password) {
              return { user, error: null };
            } else {
              return { user: null, error: 'Contraseña Incorrecta' };
            }
          } else {
            return { user: null, error: 'Usuario no registrado' };
          }
        })
      );
  }
}
