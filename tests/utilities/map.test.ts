import { test, expect } from 'vitest';
import { buildMap, arrayFromMap } from "src/utilities/map";


test("buildMap() builds a map from the given keys and function", () => {
  expect(
    buildMap(["a", "B", "c"], (string) => string.toUpperCase())
  ).toStrictEqual(
    new Map([["a", "A"], ["B", "B"], ["c", "C"]])
  );
  const empty = [] as Array<string>;
  expect(
    buildMap(empty, (string) => string.toUpperCase())
  ).toStrictEqual(
    new Map()
  );
});

test("arrayFromMap() builds an array from the given map and function", () => {
  expect(
    arrayFromMap(
      new Map([["a", 4], ["B", 3], ["c", 2]]),
      (value, key) => key.repeat(value))
  ).toStrictEqual(
    ["aaaa", "BBB", "cc"]
  );
  expect(
    arrayFromMap(
      new Map(),
      (value, key) => key.repeat(value))
  ).toStrictEqual(
    []
  );
});
