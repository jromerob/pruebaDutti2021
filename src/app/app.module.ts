import { AuthModule } from './auth/auth.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { PrincipalModule } from './components/principal/principal.module';

// Components
import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { UsersModule } from './users/users.module';

// NGRX
import { StoreModule } from '@ngrx/store';
import { ShipsReducer } from './ships/store/ships.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ShipsEffects } from './ships/store/ships.effects';

@NgModule({
  declarations: [AppComponent, PrincipalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrincipalModule,
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
