import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'maskCreditCard',
  standalone: true
})
export class MaskCreditCardPipe implements PipeTransform {

  transform(value: string): string {
    const firstPart = value.substring(0, 4);
    const lastPart = value.substring(12, 16);
    return firstPart + ' **** **** ' + lastPart;
  }

}
