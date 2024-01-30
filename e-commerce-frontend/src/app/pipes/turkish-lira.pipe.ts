import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'turkishLira',
  standalone: true
})
export class TurkishLiraPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    if (value === null || value === undefined) {
      return '';
    }


    let formatted = value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

    return formatted + ' TL';
  }

}
