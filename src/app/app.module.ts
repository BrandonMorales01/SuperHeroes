import { ContadorModule } from './heroes/contador.module';
import { HeroesModule } from './heroes/heroes.module';

import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VillanoComponent } from './villano/villano.component';




@NgModule({
  declarations: [
    AppComponent,
    VillanoComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
