import { CellValue } from "./enums/cell-value";

const winnerStates = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

export const calculate = (state: (CellValue | null)[]): CellValue | null => {
  let winner: CellValue | null = null;

  winnerStates.forEach(winnerState => {

    const result = winnerState.map(index => state[index]);
    const firstValue = result[0];
    if (!firstValue) {
      return;
    }
    if (firstValue == result[1] && firstValue == result[2]) {
      winner = firstValue;
    }
  })

  return winner;
}
