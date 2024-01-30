import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'calculateKdv',
  standalone: true
})
export class CalculateKdvPipe implements PipeTransform {

  transform(value: number): number {
    const result =  (value * 0.18);
    return Math.round(result *100) / 100;
  }

}
