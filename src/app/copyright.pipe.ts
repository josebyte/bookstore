import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'copyright'})
export class CopyRight implements PipeTransform {
  transform(value: string){
    return value + " ©";
  }
}
