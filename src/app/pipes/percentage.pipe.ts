import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentage',
})
export class PercentagePipe implements PipeTransform {
  transform(score: any, total: any, decimals = 2) {
    return ((score / total) * 100).toFixed(decimals) + '%';
  }
}
