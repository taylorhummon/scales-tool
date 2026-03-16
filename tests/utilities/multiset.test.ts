import { test, expect } from 'vitest';

import { createMultiset, addToMultiset, getCountFromMultiset } from "src/utilities/multiset";


test("We can create multisets, add to them, and get counts back.", () => {
  const multiset = createMultiset<string>();
  addToMultiset(multiset, "a");
  addToMultiset(multiset, "b");
  addToMultiset(multiset, "b");
  addToMultiset(multiset, "b");
  expect(
    getCountFromMultiset(multiset, "a")
  ).toStrictEqual(
    1
  );
  expect(
    getCountFromMultiset(multiset, "b")
  ).toStrictEqual(
    3
  );
  expect(
    getCountFromMultiset(multiset, "c")
  ).toStrictEqual(
    0
  );
});
