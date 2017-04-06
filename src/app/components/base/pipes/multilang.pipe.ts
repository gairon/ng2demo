import { Pipe, PipeTransform } from '@angular/core';
import {IMultiLangTitles} from '../models/imulti-lang-titles';

@Pipe({
  name: 'multilang'
})
export class MultilangPipe implements PipeTransform {

  transform(value: IMultiLangTitles, args?: any): any {
    let result = value.title_ru;
    if (value.title_en) {
      result += ` / ${value.title_en}`;
    }
    return result;
  }

}
