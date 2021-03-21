import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ShipsService } from 'src/app/ships/services/ships.service';

import { ShipsPageComponent } from './ships-page.component';

import { BehaviorSubject, of } from 'rxjs';

describe('ShipsComponent', () => {
  let component: ShipsPageComponent;
  let fixture: ComponentFixture<ShipsPageComponent>;
  const serviceMock = {
    getShips: function () {
      return new BehaviorSubject([]);
    },
  };

  @Component({
    selector: 'ships-details',
    template: '<p>Mock Ship Details</p>',
  })
  class MockShipDetails {
    @Input() dataList: any;
  }

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ShipsPageComponent, MockShipDetails],
        providers: [{ provide: ShipsService, useValue: serviceMock }],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
