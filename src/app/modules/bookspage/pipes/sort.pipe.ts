import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(value: string[]): string[] {
    if (value.length <= 1) {
      return value;
    }

    return value.sort();
  }
}
