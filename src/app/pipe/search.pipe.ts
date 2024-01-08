import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(countries: any[], searchText: string): any {
    return countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchText.toLowerCase()),
    );
  }

}
