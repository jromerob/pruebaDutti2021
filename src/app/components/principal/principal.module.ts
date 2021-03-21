import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PrincipalComponentsRoutingModule } from './principal-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
// Components
import { ShipsComponent } from '../ships/ships.component';
import { PageOneComponent } from '../page-one/page-one.component';
import { PageTwoComponent } from '../page-two/page-two.component';

@NgModule({
  declarations: [ShipsComponent, PageOneComponent, PageTwoComponent],
  imports: [
    CommonModule,
    PrincipalComponentsRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
})
export class PrincipalModule {}
