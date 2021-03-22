import { ShipsModule } from '../../ships/ships.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PrincipalPageComponentsRoutingModule } from './principal-page-routing.module';

// Components
import { ShipsPageComponent } from '../ships-page/ships-page.component';
import { PageOnePageComponent } from '../page-one-page/page-one-page.component';
import { PageTwoComponent } from '../page-two-page/page-two-page.component';

@NgModule({
  declarations: [ShipsPageComponent, PageOnePageComponent, PageTwoComponent],
  imports: [
    CommonModule,
    PrincipalPageComponentsRoutingModule,
    HttpClientModule,
    ShipsModule,
  ],
})
export class PrincipalPageModule {}
