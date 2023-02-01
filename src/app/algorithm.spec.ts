import { calculate } from "./algorithm";
import { CellValue } from "./enums/cell-value"

describe("Algorithm TicTacToe", () => {
  it('should return CellValue.circle if all elements in matrix first element are of type CellValue.circle', () => {
    const cases = [
      [
        CellValue.circle, CellValue.circle, CellValue.circle
      ],
      [
        null, null, null, CellValue.circle, CellValue.circle, CellValue.circle
      ],
      [
        null, null, null, null, null, null, CellValue.circle, CellValue.circle, CellValue.circle
      ],
    ]
    cases.forEach(state => {
      expect(calculate(state)).toBe(CellValue.circle);
    })
  })

  it('should return CellValue.cross if all elements in matrix first element are of type CellValue.cross', () => {
    const cases = [
      [
        CellValue.cross, CellValue.cross, CellValue.cross
      ],
      [
        null, null, null, CellValue.cross, CellValue.cross, CellValue.cross
      ],
      [
        null, null, null, null, null, null, CellValue.cross, CellValue.cross, CellValue.cross
      ],
    ]
    cases.forEach(state => {
      expect(calculate(state)).toBe(CellValue.cross);
    })
  })

  it('should return CellValue.cross if all elements of first column are of type CellValue.cross', () => {
    const cases = [
      [
        CellValue.cross, null, null, CellValue.cross, null, null, CellValue.cross, null, null
      ],
      [
        null, CellValue.cross, null, null, CellValue.cross, null, null, CellValue.cross, null
      ],
      [
        null, null, CellValue.cross, null, null, CellValue.cross, null, null, CellValue.cross
      ],
    ]

    cases.forEach(state => {
      expect(calculate(state)).toBe(CellValue.cross);
    })
  })

  it('should return CellValue.circle if all elements of first column are of type CellValue.circle', () => {
    const cases = [
      [
        CellValue.circle, null, null, CellValue.circle, null, null, CellValue.circle, null, null
      ],
      [
        null, CellValue.circle, null, null, CellValue.circle, null, null, CellValue.circle, null
      ],
      [
        null, null, CellValue.circle, null, null, CellValue.circle, null, null, CellValue.circle
      ],
    ]

    cases.forEach(state => {
      expect(calculate(state)).toBe(CellValue.circle);
    })
  })

  it('should return CellValue.cross if there is a diagonal with values of type CellValue.cress', () => {
    const cases = [
      [
        CellValue.cross, null, null,
        null, CellValue.cross, null,
        null, null, CellValue.cross
      ],
      [
        null, null, CellValue.cross,
        null, CellValue.cross, null,
        CellValue.cross, null, null
      ],
    ]

    cases.forEach(state => {
      expect(calculate(state)).toBe(CellValue.cross);
    })
  })

  it('should return CellValue.cross if there is a diagonal with values of type CellValue.cross', () => {
    const cases = [
      [
        CellValue.cross, null, null,
        null, CellValue.cross, null,
        null, null, CellValue.cross
      ],
      [
        null, null, CellValue.cross,
        null, CellValue.cross, null,
        CellValue.cross, null, null
      ],
    ]

    cases.forEach(state => {
      expect(calculate(state)).toBe(CellValue.cross);
    })
  })

  it('should return CellValue.circle if there is a diagonal with values of type CellValue.circle', () => {
    const cases = [
      [
        CellValue.circle, null, null,
        null, CellValue.circle, null,
        null, null, CellValue.circle
      ],
      [
        null, null, CellValue.circle,
        null, CellValue.circle, null,
        CellValue.circle, null, null
      ],
    ]

    cases.forEach(state => {
      expect(calculate(state)).toBe(CellValue.circle);
    })
  })

  it('should return null if there is not a winning state', () => {
    const cases = [
      [
        null, null, null,
        null, null, null,
        null, null, null
      ],
      [
        CellValue.circle, CellValue.cross, CellValue.circle,
        null, null, null,
        null, null, null
      ],
      [
        null, null, null,
        CellValue.circle, CellValue.cross, CellValue.circle,
        null, null, null
      ],
      [
        null, null, null,
        null, null, null,
        CellValue.circle, CellValue.cross, CellValue.circle
      ],
      [
        CellValue.circle, null, null,
        CellValue.cross, null, null,
        CellValue.circle, null, null
      ],
      [
        null, CellValue.circle, null,
        null, CellValue.cross, null,
        null, CellValue.circle, null
      ],
      [
        null, null, CellValue.circle,
        null, null, CellValue.cross,
        null, null, CellValue.circle
      ],
      [
        null, null, CellValue.circle,
        null, CellValue.cross, null,
        CellValue.circle, null, null
      ],
      [
        CellValue.circle, null, null,
        null, CellValue.cross, null,
        null, null, CellValue.circle
      ]
    ];

    cases.forEach(state => {
      expect(calculate(state)).toBeNull();
    })
  })
})
