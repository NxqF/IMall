import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'producttypefilter',
    pure: false
})
export class ProductTypeFilter implements PipeTransform {
  transform(items, filter) {
    if (!items || !filter) {
      return items;
    }
    return items.filter((item) => this.applyFilter(item, filter));
  }
  
  /**
   * Perform the filtering.
   * 
   * @param {ItemType} product The product to compare to the filter.
   * @param {ItemType} filter The filter to apply.
   * @return {boolean} True if book satisfies filters, false if not.
   */
  applyFilter(product, filter) {
    for (let field in filter) {
      if (filter[field]) {
        if (typeof filter[field] === 'string') {
          if (product[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
            return false;
          }
        } else if (typeof filter[field] === 'number') {
          if (product[field] !== filter[field]) {
            return false;
          }
        }
    }
      }
    return true;
  }
}