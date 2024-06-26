import { Pipe, PipeTransform } from '@angular/core';
import { SortDirection, SortModel } from './sort.model';

@Pipe({
    name: 'sort',
    standalone: true,
})
export class SortPipe implements PipeTransform {
    transform(value: SortModel, direction: SortDirection = 'asc') {
        const sorted = [...value];
        sorted.sort((a, b) => {
            if (direction === 'asc') {
                return a > b ? 1 : -1;
            } else {
                return a > b ? -1 : 1;
            }
        });

        return sorted;
    }
}
