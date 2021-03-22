import { AuthModule } from './auth/auth.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { PrincipalPageModule } from './pages/principal-page/principal-page.module';

// Components
import { AppComponent } from './app.component';
import { PrincipalPageComponent } from './pages/principal-page/principal-page.component';
import { UsersModule } from './users/users.module';

// NGRX
import { StoreModule } from '@ngrx/store';
import { ShipsReducer } from './ships/store/ships.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ShipsEffects } from './ships/store/ships.effects';

@NgModule({
  declarations: [AppComponent, PrincipalPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrincipalPageModule,
    AuthModule,
    UsersModule,
    AngularFireModule.initializeApp(environment.apis.dutti.firebase),
    AngularFirestoreModule,
    StoreModule.forRoot({ ships: ShipsReducer }),
    EffectsModule.forRoot([ShipsEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
