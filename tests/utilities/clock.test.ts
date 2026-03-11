import { test, expect } from 'vitest';

import { xOnClockAt, yOnClockAt } from "src/utilities/clock";


test("xOnClockAt() should give the x value on the clock at various hours", () => {
  expect(
    xOnClockAt(0)
  ).toBeCloseTo(
    0
  );
  expect(
    xOnClockAt(1)
  ).toBeCloseTo(
    60
  );
  expect(
    xOnClockAt(2)
  ).toBeCloseTo(
    103.92304845413264
  );
  expect(
    xOnClockAt(3)
  ).toBeCloseTo(
    120
  );
  expect(
    xOnClockAt(6)
  ).toBeCloseTo(
    0
  );
  expect(
    xOnClockAt(9)
  ).toBeCloseTo(
    -120
  );
  expect(
    xOnClockAt(1, 50)
  ).toBeCloseTo(
    25
  );
});

test("yOnClockAt() should give the y value on the clock at various hours", () => {
  expect(
    yOnClockAt(0)
  ).toBeCloseTo(
    -120
  );
  expect(
    yOnClockAt(1)
  ).toBeCloseTo(
    -103.92304845413264
  );
  expect(
    yOnClockAt(2)
  ).toBeCloseTo(
    -60
  );
  expect(
    yOnClockAt(3)
  ).toBeCloseTo(
    0
  );
  expect(
    yOnClockAt(6)
  ).toBeCloseTo(
    120
  );
  expect(
    yOnClockAt(9)
  ).toBeCloseTo(
    0
  );
  expect(
    yOnClockAt(2, 50)
  ).toBeCloseTo(
    -25
  );
});
