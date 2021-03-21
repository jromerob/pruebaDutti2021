import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageOnePageComponent } from './page-one-page.component';

describe('PageOneComponent', () => {
  let component: PageOnePageComponent;
  let fixture: ComponentFixture<PageOnePageComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [PageOnePageComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PageOnePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
