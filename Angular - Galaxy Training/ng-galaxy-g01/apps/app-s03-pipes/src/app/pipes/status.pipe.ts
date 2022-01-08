import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: string): unknown {
    switch (value) {
      case 'A':
        return 'Active';
      case 'I':
        return 'Inactive';
      default:
        return '';
    }
  }

}
