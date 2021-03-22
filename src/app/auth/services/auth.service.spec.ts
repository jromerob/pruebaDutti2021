import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { AuthService } from './auth.service';
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

const FirestoreStub = {
  collection: (name: string) => ({
    doc: (_id: string) => ({
      valueChanges: () => new BehaviorSubject({ foo: 'bar' }),
      set: (_d: any) => new Promise<void>((resolve, _reject) => resolve()),
    }),
  }),
};

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [{ provide: AngularFirestore, useValue: FirestoreStub }],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
