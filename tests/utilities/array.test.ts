import { test, expect } from 'vitest';

import { buildIndicesArray } from "@/utilities/array";


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
