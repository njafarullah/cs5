import { Pipe, PipeTransform } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import * as _ from "lodash";

@Pipe({
    name: 'FilterPipe',
})
export class FilterPipe implements PipeTransform {

    /*transform(array: any[], query: string): any {
        if (query) {
            return _.filter(array, esc=>esc.name.indexOf(query) > -1);
        }
        return array;
    }*/


    public transform(value, keys: string, term: string) {
        if (!term) return value;
        return (value || []).filter((item) => keys.split(',').some(key => item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key])));
    }

  

}