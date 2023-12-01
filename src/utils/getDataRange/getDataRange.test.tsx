import { NUMBER_OF_DATA } from '../constants'
import { getDataRange } from './getDataRange'

describe('getDataRange', () => {
  test('get correctly the data range for the first page', () => {
    const currentPage = 1
    const [start, end] = getDataRange(currentPage)

    expect(start).toBe(1)
    expect(end).toBe(1 * NUMBER_OF_DATA)
  })

  test('get correctly the data range for a non-first page', () => {
    const currentPage = 2
    const [start, end] = getDataRange(currentPage)

    expect(start).toBe(1 * NUMBER_OF_DATA)
    expect(end).toBe(2 * NUMBER_OF_DATA)
  })
})
