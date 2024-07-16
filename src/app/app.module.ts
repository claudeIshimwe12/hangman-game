import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { IngameComponent } from './pages/ingame/ingame.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { HowToPlayComponent } from './pages/how-to-play/how-to-play.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IngameComponent,
    CategoriesComponent,
    HowToPlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
