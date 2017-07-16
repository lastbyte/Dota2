import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../classes/hero';
@Pipe({
  name: 'attributeFilter'
})
export class AttributeFilterPipe implements PipeTransform {

  transform(heroes: Hero[], attributePrimary: string): Hero[] {
    if ( !heroes ) {
      return [];
    }
    return heroes.filter( h => h.attributeprimary === attributePrimary );
  }

}
