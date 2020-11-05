import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AddComponent } from './notes/add/add.component';
import { AllComponent } from './notes/all/all.component';
import { ArchivedComponent } from './groups/archived/archived.component';
import { FavoritesComponent } from './groups/favorites/favorites.component';
import { ThrashComponent } from './groups/thrash/thrash.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    AllComponent,
    ArchivedComponent,
    FavoritesComponent,
    ThrashComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
