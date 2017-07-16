import {Pipe, PipeTransform} from '@angular/core';
import * as _ from 'lodash';
@Pipe({name: 'orderBy'})
export class ListOrderPipe implements PipeTransform {

  transform(array: Array < any >, ...args: any[]): any {
    return _.orderBy(array, args[0], args[1]);
  }

}
