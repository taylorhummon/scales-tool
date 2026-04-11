import { test, expect } from 'vitest';

import {
  buildIndicesArray,
  buildInclusiveRange,
} from "@/utilities/array";


test("buildIndicesArray() builds the array of indices", () => {
  expect(
    buildIndicesArray(5)
  ).toStrictEqual(
    [0, 1, 2, 3, 4]
  );
  expect(
    buildIndicesArray(1)
  ).toStrictEqual(
    [0]
  );
  expect(
    buildIndicesArray(0)
  ).toStrictEqual(
    []
  );
});

test("buildIndicesArray() throws when given a negative indices count", () => {
  expect(() => {
    buildIndicesArray(-1);
  }).toThrow();
});

test("buildInclusiveRange() works", () => {
  expect(
    buildInclusiveRange(2, 5)
  ).toStrictEqual(
    [2, 3, 4, 5]
  );
  expect(
    buildInclusiveRange(-1, 1)
  ).toStrictEqual(
    [-1, 0, 1]
  );
  expect(
    buildInclusiveRange(7, 7)
  ).toStrictEqual(
    [7]
  );
});
