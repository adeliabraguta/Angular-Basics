import { Component } from '@angular/core';
import {FavoriteService} from "../service/favourite-service.service";

@Component({
  selector: 'app-favourite-country',
  templateUrl: './favourite-country.component.html',
  styleUrls: ['./favourite-country.component.css']
})
export class FavouriteCountryComponent {
  favoriteCountries: any = [];

  constructor(private favoriteService: FavoriteService) {
    this.favoriteService.favoriteCountries$.subscribe((countries) => {
      this.favoriteCountries = countries;
    });
  }
}
