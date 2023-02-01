import { Component } from '@angular/core';
import { CellValue } from './enums/cell-value';
import { StateService } from './state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public stateService: StateService) {}

  isCircle(cellValue: CellValue | null): boolean {
    return cellValue === CellValue.circle;
  }
  isCross(cellValue: CellValue | null): boolean {
    return cellValue === CellValue.cross;
  }

  get symbolClasses() {
    return {
      ['header__turn__symbol--circle']: this.isCircle(this.stateService.turn),
      ['header__turn__symbol--cross']: this.isCross(this.stateService.turn),
    }
  }
}
