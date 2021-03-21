import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { LoginComponent } from './auth/components/login/login.component';
import { UserRegisterComponent } from './users/components/user-register/user-register.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: UserRegisterComponent },
  {
    path: 'principal',
    loadChildren: () =>
      import(`./pages/principal-page/principal-page.module`).then(
        (m) => m.PrincipalPageModule
      ),
  },
  // { path: 'ships', loadChildren: () => import(`./components/ships/ships.module`).then(m => m.ShipsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
