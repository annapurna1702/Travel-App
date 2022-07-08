import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TravelregistrationComponent } from './travelregistration/travelregistration.component';
import { SearchplacesComponent } from './searchplaces/searchplaces.component';
import { ViewdestinationsComponent } from './viewdestinations/viewdestinations.component';

@NgModule({
  declarations: [
    AppComponent,
    TravelregistrationComponent,
    SearchplacesComponent,
    ViewdestinationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
