import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimagen'
})
export class NoimagenPipe implements PipeTransform {

  transform(value: any): unknown {
    
    if(!value){
      return "assets/img/noimage.png";
    }

    if (value.length > 0) {
      return value[0].url;
    } else {
      return "assets/img/noimage.png";
    }

  }

}
