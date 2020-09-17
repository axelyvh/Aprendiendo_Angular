import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';

@Pipe({
  name: 'urlseguro'
})
export class UrlseguroPipe implements PipeTransform {

  constructor( private domSanitizer: DomSanitizer ){ }

  transform( value: string): any {
    return this.domSanitizer.bypassSecurityTrustResourceUrl( value );
  }

}
