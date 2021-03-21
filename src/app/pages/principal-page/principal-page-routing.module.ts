import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShipsPageComponent } from '../ships-page/ships-page.component';
import { PageOnePageComponent } from '../page-one-page/page-one-page.component';
import { PageTwoComponent } from '../page-two-page/page-two-page.component';
import { PrincipalPageComponent } from './principal-page.component';

const routes: Routes = [
  {
    path: '',
    component: PrincipalPageComponent,
    children: [
      { path: 'ships', component: ShipsPageComponent },
      { path: 'pageOne', component: PageOnePageComponent },
      { path: 'pageTwo', component: PageTwoComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrincipalPageComponentsRoutingModule {}
