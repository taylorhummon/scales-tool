import { test, expect } from 'vitest';

import { Multiset } from "src/utilities/multiset";


test("We can create multisets, add to them, and get counts back.", () => {
  const multiset = new Multiset<string>();
  multiset.add("a");
  multiset.add("b");
  multiset.add("b");
  multiset.add("b");
  expect(
    multiset.count("a")
  ).toStrictEqual(
    1
  );
  expect(
    multiset.count("b")
  ).toStrictEqual(
    3
  );
  expect(
    multiset.count("c")
  ).toStrictEqual(
    0
  );
});
