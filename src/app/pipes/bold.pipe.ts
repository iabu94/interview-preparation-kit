import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bold',
})
export class BoldPipe implements PipeTransform {
  transform(value: string): string | string[] {
    if (value.startsWith('<b>')) {
      const str1 = value.substring(3, value.indexOf('</b>'));
      const str2 = value.substring(value.indexOf('</b>') + 4, value.length - 1);
      return [str1, str2];
    } else {
      return value;
    }
  }
}
