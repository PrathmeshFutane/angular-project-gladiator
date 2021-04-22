import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './appmodel/cartItem';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(products: Product[], searchValue: string): Product[] {

    if (!products || !searchValue) {
      return products;
    }
    return products.filter(response =>
      response['productName'].toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }

}
