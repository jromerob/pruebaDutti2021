import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserModel } from '../models/user.model';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  DocumentReference,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  usersRef: AngularFirestoreCollection<UserModel>;

  constructor(private db: AngularFirestore) {
    this.usersRef = db.collection(environment.apis.dutti.endpoints.users);
  }

  /**
   * Obtiene todos los usuarios
   */
  public getAll(): AngularFirestoreCollection<UserModel> {
    return this.usersRef;

    // TODO control de errores
  }

  public get(userName: string): AngularFirestoreDocument<UserModel> {
    // TODO control de errores
    return this.db.doc<UserModel>(
      `${environment.apis.dutti.endpoints.users}/${userName}`
    );
  }

  /**
   * Crea el usuario estableciendo como indice su nombre de usuario
   */
  public create(user: UserModel): Promise<void> {
    return this.usersRef.doc(user.email).set(user);
  }
}
