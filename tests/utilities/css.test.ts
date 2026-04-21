import { test, expect } from "vitest";

import { buildClassName } from "@/utilities/css";


test("buildClassName() looks up class names and then joins them with spaces in between", () => {
  expect(
    buildClassName(
      { "dot": "abc-dot", "can-move": "abc-can-move", "blue": "abc-blue" },
      ["dot", "can-move"]
    )
  ).toBe(
    "abc-dot abc-can-move"
  );
});
