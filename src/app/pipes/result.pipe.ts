import { Pipe, PipeTransform } from '@angular/core';
import { Result } from '../enums/cell-value';

@Pipe({
  name: 'result'
})
export class ResultPipe implements PipeTransform {

  transform(value: Result): unknown {
    let message = ""
    if (value === Result.circle || value === Result.cross) {
      message = `Winner ${value} !!!`
    }
    if (value === Result.draw) {
      message = "Draw"
    }
    return message;
  }

}
