import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

import { calculate } from './algorithm';
import { CellValue, Result } from './enums/cell-value';

const getInitialState = (): (CellValue | null)[] => [
  null, null, null,
  null, null, null,
  null, null, null
]

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private winner$ = new Subject<Result|null>();
  private state$ = new BehaviorSubject(getInitialState());
  private turn$ = new BehaviorSubject<CellValue>(CellValue.circle);
  private _turn: CellValue = CellValue.circle;
  private _winner: Result|null = null;
  private _state: (CellValue | null)[] = getInitialState();

  constructor() {
    this.turn$.subscribe((turn) => {
      this._turn = turn;
    })

    this.state$.subscribe((state) => {
      this._state = state;
      const result = calculate(state);
      if (result !== null) {
        const winner = result as unknown as Result;
        this.winner$.next(winner);
      } else {
        const nulls = this._state.filter(cellValue =>
          cellValue === null
        );
        if (nulls.length === 0) {
          this.winner$.next(Result.draw);
        }
      }
    })

    this.winner$.subscribe((result) => {
      this._winner = result;
    })
  }

  setState(index: number) {
    if (this.winner !== null || this._state[index] !== null) return
    const state = this._state;
    state[index] = this._turn;
    this.state$.next(state);
    this.changeTurn();
  }

  resetState() {
    this.winner$.next(null);
    this.turn$.next(CellValue.circle);
    this.state$.next(getInitialState());
  }

  get state(): (CellValue | null)[] {
    return this._state;
  }

  get winner(): Result | null {
    return this._winner;
  }

  get turn(): CellValue {
    return this._turn;
  }

  private changeTurn() {
    if (this.turn == CellValue.circle) {
      this.turn$.next(CellValue.cross)
    } else {
      this.turn$.next(CellValue.circle);
    }
  }
}
