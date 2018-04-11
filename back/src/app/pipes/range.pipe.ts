import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'range'
})
export class RangePipe implements PipeTransform {

  transform(value: Array<any>=[], args?: number): Array<any> {
  	 console.log(value,args)
  	for(let i = 0; i < args; i++){
      value.push(i);
    }

    return value;
  }

}
