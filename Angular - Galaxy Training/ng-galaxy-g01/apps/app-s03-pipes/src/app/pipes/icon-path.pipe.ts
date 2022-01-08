import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iconPath'
})
export class IconPathPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    console.log('ejecutando');
    const defaultImg = args[0];
    return value ? `assets/imgs/icons/${value}` : `assets/imgs/${defaultImg}`;
  }

}
