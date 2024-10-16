import {contests} from "../src";

describe('testing contests', () => {
  test('check start less then end', () => {
    for (const contestId of Object.keys(contests)) {
      expect(contests[contestId].start).toBeLessThan(contests[contestId].end)
    }
  })
})
