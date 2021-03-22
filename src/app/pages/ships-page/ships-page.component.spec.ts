import { ShipsState } from './../../ships/models/ships-state.model';
import { ShipsResponse } from './../../ships/models/ships-response.model';
import { ShipModel } from './../../ships/models/ship.model';
import { ShipsModule } from './../../ships/ships.module';
import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ShipsService } from 'src/app/ships/services/ships.service';

import { ShipsPageComponent } from './ships-page.component';

import { BehaviorSubject, Observable, of } from 'rxjs';
import { provideMockStore } from '@ngrx/store/testing';

describe('ShipsComponent', () => {
  let component: ShipsPageComponent;
  let fixture: ComponentFixture<ShipsPageComponent>;

  @Component({
    selector: 'ships-details',
    template: '<p>Mock Ship Details</p>',
  })
  const SHIPS_STATE_MOCK: ShipsState = {
    currentPage: 1,
    shipsResponse: { count: 1, next: null, previous: null, results: [] },
  };

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [ShipsModule],
        declarations: [ShipsPageComponent],
        providers: [provideMockStore({})],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipsPageComponent);
    component = fixture.componentInstance;
    component.shipsState$ = of(SHIPS_STATE_MOCK);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
