import {Component, Input} from '@angular/core';
import {FavoriteService} from "../service/favourite-service.service";

@Component({
  selector: 'app-country-component',
  templateUrl: './country-component.component.html',
  styleUrls: ['./country-component.component.css']
})
export class CountryComponentComponent {
  @Input() country: any;
  countries: any = [];
  constructor(private favoriteService: FavoriteService) {}
  toggleFavorite(country: any) {
    if (this.isFavorite(country)) {
      this.favoriteService.removeFavorite(country);
    } else {
      this.favoriteService.addFavorite(country);
    }
  }

  isFavorite(country: any): any {
    return this.favoriteService.isFavorite(country);
  }
}
