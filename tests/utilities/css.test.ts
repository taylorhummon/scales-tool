import { test, expect } from 'vitest';

import { buildClassString } from "src/utilities/css";


test("buildClassString() looks up class names and then joins them with spaces in between", () => {
  expect(
    buildClassString(
      { "dot": "abc-dot", "can-move": "abc-can-move", "blue": "abc-blue" },
      ["dot", "can-move"]
    )
  ).toBe(
    "abc-dot abc-can-move"
  );
});
