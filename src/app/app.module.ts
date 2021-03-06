import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { HotelListComponent } from './components/hotel-list/hotel-list.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { NgPipesModule } from 'ngx-pipes';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { HotelDetailComponent } from './components/hotel-list/hotel-detail/hotel-detail.component';


registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent,
    StarRatingComponent,
    HomeComponent,
    HotelDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    NgPipesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
