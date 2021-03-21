import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipsDetailsComponent } from './components/ships-details/ships-details.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [ShipsDetailsComponent],
  imports: [CommonModule, NgxPaginationModule],
  exports: [ShipsDetailsComponent],
})
export class ShipsModule {}
