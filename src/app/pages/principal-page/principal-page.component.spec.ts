import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PrincipalPageComponent } from './principal-page.component';

describe('PrincipalPageComponent', () => {
  let component: PrincipalPageComponent;
  let fixture: ComponentFixture<PrincipalPageComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [PrincipalPageComponent],
        imports: [RouterTestingModule.withRoutes([])],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
