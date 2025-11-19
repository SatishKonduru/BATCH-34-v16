import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(list: any[], filterBy: string) {
    console.log('filter by: ', filterBy);
    if (filterBy === 'All') {
      return list;
    } else {
      return list.filter((std) => std.gender === filterBy);
    }
  }
}
