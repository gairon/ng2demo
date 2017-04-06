import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stars'
})
export class StarsPipe implements PipeTransform {

  transform(value: number, args?: any): string {
    let result = '';

    if (value > 0) {
      const roundedValue = Math.round(value);
      result = '*'.repeat(roundedValue);
    }

    return result;
  }

}
