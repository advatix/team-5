import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datereplace'
})
export class DatereplacePipe implements PipeTransform {

  transform(value: String): any {
    //console.log(value);
    if(value) {
      let regex = new RegExp('-', 'g');
      return value.toString().slice(0, 10).replace(regex, '/');
    }
  }

}
