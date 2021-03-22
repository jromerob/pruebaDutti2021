import { UserModel } from './../models/user.model';
import { TestBed } from '@angular/core/testing';
import {
  AngularFirestore,
  AngularFirestoreModule,
} from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';

import { UsersService } from './users.service';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
// tslint:disable:variable-name

// const FirestoreStub = {
//   collection: (name: string) => ({
//     db: TestBed.inject(AngularFirestore),
//     doc: (_id: string) => ({
//       valueChanges: () => new BehaviorSubject({ foo: 'bar' }),
//       set: (_d: any) => new Promise<void>((resolve, _reject) => resolve()),
//     }),
//   }),
// };

describe('UsersService', () => {
  let service: UsersService;
  let db: AngularFirestore;
  const userTest: UserModel = {
    email: 'email@test.es',
    firstName: 'FirstNameTest',
    lastName: 'lastNameTest',
    userName: 'userNameTest',
    password: 'paswordTest',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      //providers: [{ provide: AngularFirestore, useValue: FirestoreStub }],
      imports: [
        AngularFirestoreModule,
        AngularFireModule.initializeApp(environment.apis.dutti.firebase),
      ],
      providers: [AngularFirestore],
    });
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create and delete the user test correctly', async () => {
    await service.create(userTest);
    service
      .get(userTest.userName)
      .snapshotChanges()
      .subscribe(
        (changes) => {
          const user = changes.payload.data();
          service.delete(user).then(() => {
            expect(user.email).toEqual('email@test.es');
            expect(user.password).toEqual('paswordTest');
          });
        },
        (error) => console.log(error)
      );
  });
});
