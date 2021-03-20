import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {
  AngularFirestore,
  AngularFirestoreModule,
} from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject } from 'rxjs';
import { UserRegisterComponent } from './user-register.component';

// tslint:disable:variable-name
const FirestoreStub = {
  collection: (name: string) => ({
    doc: (_id: string) => ({
      valueChanges: () => new BehaviorSubject({ foo: 'bar' }),
      set: (_d: any) => new Promise<void>((resolve, _reject) => resolve()),
    }),
  }),
};

describe('UserRegisterComponent', () => {
  let component: UserRegisterComponent;
  let fixture: ComponentFixture<UserRegisterComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [UserRegisterComponent],
        imports: [
          FormsModule,
          RouterTestingModule.withRoutes([]),
          ReactiveFormsModule,
          AngularFirestoreModule,
        ],
        providers: [{ provide: AngularFirestore, useValue: FirestoreStub }],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
