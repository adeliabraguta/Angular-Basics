import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  private favoriteCountriesSubject = new BehaviorSubject<any[]>([]);
  favoriteCountries$ = this.favoriteCountriesSubject.asObservable();

  addFavorite(country: any): void {
    const currentFavorites = this.favoriteCountriesSubject.value;
    if (!this.isFavorite(country)) {
      this.favoriteCountriesSubject.next([...currentFavorites, country]);
    }
  }

  removeFavorite(country: any): void {
    const updatedFavorites = this.favoriteCountriesSubject.value.filter(
      c => c.name.common !== country.name.common
    );
    this.favoriteCountriesSubject.next(updatedFavorites);
  }

  isFavorite(country: any): boolean {
    const currentFavorites = this.favoriteCountriesSubject.value;
    return currentFavorites.some(c => c.name.common === country.name.common);
  }
}
