import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountriesComponent } from './countries/countries.component';
import {Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { CountryComponentComponent } from './country-component/country-component.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { SearchPipe } from './pipe/search.pipe';
import {FormsModule} from "@angular/forms";
import { FavouriteCountryComponent } from './favourite-country/favourite-country.component';

const routes: Routes = [
  {
    path: '/',
    component: CountriesComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    CountryComponentComponent,
    SearchComponentComponent,
    SearchPipe,
    FavouriteCountryComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
