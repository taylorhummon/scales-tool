import { test, expect } from "vitest"

import { Note } from "@shared/classes/Note"
import { getHour } from "@shared/utilities/clock"


test("getHour() works when tangled", () => {
  const isUntangled = false
  expect(
    getHour({ isUntangled, note: new Note({ value: -2 }) })
  ).toBe(
    10
  )
  expect(
    getHour({ isUntangled, note: new Note({ value: -1 }) })
  ).toBe(
    5
  )
  expect(
    getHour({ isUntangled, note: new Note({ value: 0 }) })
  ).toBe(
    0
  )
  expect(
    getHour({ isUntangled, note: new Note({ value: 1 }) })
  ).toBe(
    7
  )
  expect(
    getHour({ isUntangled, note: new Note({ value: 2 }) })
  ).toBe(
    2
  )
})

test("getHour() works when untangled", () => {
  const isUntangled = true
  expect(
    getHour({ isUntangled, note: new Note({ value: -2 }) })
  ).toBe(
    10
  )
  expect(
    getHour({ isUntangled, note: new Note({ value: -1 }) })
  ).toBe(
    11
  )
  expect(
    getHour({ isUntangled, note: new Note({ value: 0 }) })
  ).toBe(
    0
  )
  expect(
    getHour({ isUntangled, note: new Note({ value: 1 }) })
  ).toBe(
    1
  )
  expect(
    getHour({ isUntangled, note: new Note({ value: 2 }) })
  ).toBe(
    2
  )
})
