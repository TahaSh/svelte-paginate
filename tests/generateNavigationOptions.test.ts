import generate from '../src/generateNavigationOptions'
import {
  PREVIOUS_PAGE,
  NEXT_PAGE,
  ELLIPSIS
} from '../src/symbolTypes'

test('generates all number options without symbols', () => {
  expect(
    generate({ totalItems: 8, pageSize: 3, currentPage: 1 })
  ).toEqual([
    { type: 'number', value: 1 },
    { type: 'number', value: 2 },
    { type: 'number', value: 3 }
  ])
})

test('generates limited number options (limit = 1, pageSize = 10)', () => {
  const firstPart = [
    { type: 'number', value: 1 },
    { type: 'number', value: 2 },
    { type: 'number', value: 3 },
    { type: 'number', value: 4 },
    { type: 'number', value: 5 },
    { type: 'symbol', symbol: ELLIPSIS, value: 6 },
    { type: 'number', value: 10 }
  ]
  const lastPart = [
    { type: 'number', value: 1 },
    { type: 'symbol', symbol: ELLIPSIS, value: 5 },
    { type: 'number', value: 6 },
    { type: 'number', value: 7 },
    { type: 'number', value: 8 },
    { type: 'number', value: 9 },
    { type: 'number', value: 10 }
  ]
  expect(
    generate({ totalItems: 28, pageSize: 3, currentPage: 1, limit: 1 })
  ).toEqual(firstPart)

  expect(
    generate({ totalItems: 28, pageSize: 3, currentPage: 2, limit: 1 })
  ).toEqual(firstPart)

  expect(
    generate({ totalItems: 28, pageSize: 3, currentPage: 3, limit: 1 })
  ).toEqual(firstPart)

  expect(
    generate({ totalItems: 28, pageSize: 3, currentPage: 4, limit: 1 })
  ).toEqual(firstPart)

  expect(
    generate({ totalItems: 28, pageSize: 3, currentPage: 7, limit: 1 })
  ).toEqual(lastPart)

  expect(
    generate({ totalItems: 28, pageSize: 3, currentPage: 8, limit: 1 })
  ).toEqual(lastPart)

  expect(
    generate({ totalItems: 28, pageSize: 3, currentPage: 9, limit: 1 })
  ).toEqual(lastPart)

  expect(
    generate({ totalItems: 28, pageSize: 3, currentPage: 10, limit: 1 })
  ).toEqual(lastPart)

  expect(
    generate({ totalItems: 28, pageSize: 3, currentPage: 5, limit: 1 })
  ).toEqual([
    { type: 'number', value: 1 },
    { type: 'symbol', symbol: ELLIPSIS, value: 3 },
    { type: 'number', value: 4 },
    { type: 'number', value: 5 },
    { type: 'number', value: 6 },
    { type: 'symbol', symbol: ELLIPSIS, value: 7 },
    { type: 'number', value: 10 }
  ])

  expect(
    generate({ totalItems: 28, pageSize: 3, currentPage: 6, limit: 1 })
  ).toEqual([
    { type: 'number', value: 1 },
    { type: 'symbol', symbol: ELLIPSIS, value: 4 },
    { type: 'number', value: 5 },
    { type: 'number', value: 6 },
    { type: 'number', value: 7 },
    { type: 'symbol', symbol: ELLIPSIS, value: 8 },
    { type: 'number', value: 10 }
  ])
})

test('generates limited number options (limit = 2, pageSize = 10)', () => {
  const firstPart = [
    { type: 'number', value: 1 },
    { type: 'number', value: 2 },
    { type: 'number', value: 3 },
    { type: 'number', value: 4 },
    { type: 'number', value: 5 },
    { type: 'number', value: 6 },
    { type: 'number', value: 7 },
    { type: 'symbol', symbol: ELLIPSIS, value: 8 },
    { type: 'number', value: 10 }
  ]
  const lastPart = [
    { type: 'number', value: 1 },
    { type: 'symbol', symbol: ELLIPSIS, value: 3 },
    { type: 'number', value: 4 },
    { type: 'number', value: 5 },
    { type: 'number', value: 6 },
    { type: 'number', value: 7 },
    { type: 'number', value: 8 },
    { type: 'number', value: 9 },
    { type: 'number', value: 10 }
  ]
  expect(
    generate({ totalItems: 28, pageSize: 3, currentPage: 1, limit: 2 })
  ).toEqual(firstPart)

  expect(
    generate({ totalItems: 28, pageSize: 3, currentPage: 5, limit: 2 })
  ).toEqual(firstPart)

  expect(
    generate({ totalItems: 28, pageSize: 3, currentPage: 6, limit: 2 })
  ).toEqual(lastPart)

  expect(
    generate({ totalItems: 28, pageSize: 3, currentPage: 8, limit: 2 })
  ).toEqual(lastPart)

  expect(
    generate({ totalItems: 28, pageSize: 3, currentPage: 10, limit: 2 })
  ).toEqual(lastPart)
})

test('generates limited number options (limit = 2, pageSize = 12)', () => {
  const firstPart = [
    { type: 'number', value: 1 },
    { type: 'number', value: 2 },
    { type: 'number', value: 3 },
    { type: 'number', value: 4 },
    { type: 'number', value: 5 },
    { type: 'number', value: 6 },
    { type: 'number', value: 7 },
    { type: 'symbol', symbol: ELLIPSIS, value: 8 },
    { type: 'number', value: 12 }
  ]
  const lastPart = [
    { type: 'number', value: 1 },
    { type: 'symbol', symbol: ELLIPSIS, value: 5 },
    { type: 'number', value: 6 },
    { type: 'number', value: 7 },
    { type: 'number', value: 8 },
    { type: 'number', value: 9 },
    { type: 'number', value: 10 },
    { type: 'number', value: 11 },
    { type: 'number', value: 12 }
  ]
  expect(
    generate({ totalItems: 35, pageSize: 3, currentPage: 1, limit: 2 })
  ).toEqual(firstPart)

  expect(
    generate({ totalItems: 35, pageSize: 3, currentPage: 2, limit: 2 })
  ).toEqual(firstPart)

  expect(
    generate({ totalItems: 35, pageSize: 3, currentPage: 5, limit: 2 })
  ).toEqual(firstPart)

  expect(
    generate({ totalItems: 35, pageSize: 3, currentPage: 8, limit: 2 })
  ).toEqual(lastPart)

  expect(
    generate({ totalItems: 35, pageSize: 3, currentPage: 10, limit: 2 })
  ).toEqual(lastPart)

  expect(
    generate({ totalItems: 35, pageSize: 3, currentPage: 12, limit: 2 })
  ).toEqual(lastPart)

  expect(
    generate({ totalItems: 35, pageSize: 3, currentPage: 6, limit: 2 })
  ).toEqual([
    { type: 'number', value: 1 },
    { type: 'symbol', symbol: ELLIPSIS, value: 3 },
    { type: 'number', value: 4 },
    { type: 'number', value: 5 },
    { type: 'number', value: 6 },
    { type: 'number', value: 7 },
    { type: 'number', value: 8 },
    { type: 'symbol', symbol: ELLIPSIS, value: 9 },
    { type: 'number', value: 12 }
  ])

  expect(
    generate({ totalItems: 35, pageSize: 3, currentPage: 7, limit: 2 })
  ).toEqual([
    { type: 'number', value: 1 },
    { type: 'symbol', symbol: ELLIPSIS, value: 4 },
    { type: 'number', value: 5 },
    { type: 'number', value: 6 },
    { type: 'number', value: 7 },
    { type: 'number', value: 8 },
    { type: 'number', value: 9 },
    { type: 'symbol', symbol: ELLIPSIS, value: 10 },
    { type: 'number', value: 12 }
  ])
})


test('generates unlimited page numbers with step options', () => {
  expect(
    generate({ totalItems: 8, pageSize: 3, currentPage: 1, showStepOptions: true })
  ).toEqual([
    { type: 'symbol', symbol: PREVIOUS_PAGE, value: 1 },
    { type: 'number', value: 1 },
    { type: 'number', value: 2 },
    { type: 'number', value: 3 },
    { type: 'symbol', symbol: NEXT_PAGE, value: 2 }
  ])

  expect(
    generate({ totalItems: 8, pageSize: 3, currentPage: 2, showStepOptions: true })
  ).toEqual([
    { type: 'symbol', symbol: PREVIOUS_PAGE, value: 1 },
    { type: 'number', value: 1 },
    { type: 'number', value: 2 },
    { type: 'number', value: 3 },
    { type: 'symbol', symbol: NEXT_PAGE, value: 3 }
  ])

  expect(
    generate({ totalItems: 8, pageSize: 3, currentPage: 3, showStepOptions: true })
  ).toEqual([
    { type: 'symbol', symbol: PREVIOUS_PAGE, value: 2 },
    { type: 'number', value: 1 },
    { type: 'number', value: 2 },
    { type: 'number', value: 3 },
    { type: 'symbol', symbol: NEXT_PAGE, value: 3 }
  ])
})

test('generates limited page numbers with step options', () => {
  expect(
    generate({ totalItems: 28, pageSize: 3, currentPage: 1, limit: 1, showStepOptions: true })
  ).toEqual([
    { type: 'symbol', symbol: PREVIOUS_PAGE, value: 1 },
    { type: 'number', value: 1 },
    { type: 'number', value: 2 },
    { type: 'number', value: 3 },
    { type: 'number', value: 4 },
    { type: 'number', value: 5 },
    { type: 'symbol', symbol: ELLIPSIS, value: 6 },
    { type: 'number', value: 10 },
    { type: 'symbol', symbol: NEXT_PAGE, value: 2 }
  ])
})

test('ignores limit if it does not apply on the number of pages', () => {
  expect(
    generate({ totalItems: 19, pageSize: 3, currentPage: 1, limit: 1 })
  ).toEqual([
    { type: 'number', value: 1 },
    { type: 'number', value: 2 },
    { type: 'number', value: 3 },
    { type: 'number', value: 4 },
    { type: 'number', value: 5 },
    { type: 'number', value: 6 },
    { type: 'number', value: 7 }
  ])

  expect(
    generate({ totalItems: 26, pageSize: 3, currentPage: 1, limit: 2 })
  ).toEqual([
    { type: 'number', value: 1 },
    { type: 'number', value: 2 },
    { type: 'number', value: 3 },
    { type: 'number', value: 4 },
    { type: 'number', value: 5 },
    { type: 'number', value: 6 },
    { type: 'number', value: 7 },
    { type: 'number', value: 8 },
    { type: 'number', value: 9 }
  ])
})
