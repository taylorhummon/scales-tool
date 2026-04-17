import { test, expect } from "vitest";

import { FadingClassName, getFadingClassName } from "@/utilities/selector";


test("getFadingClassName()", () => {
  expect(
    getFadingClassName(0, 0)
  ).toBe(
    FadingClassName.Selected
  );
  expect(
    getFadingClassName(2, 2)
  ).toBe(
    FadingClassName.Unselected
  );
  expect(
    getFadingClassName(2, 3)
  ).toBe(
    FadingClassName.Unselected
  );
  expect(
    getFadingClassName(0, 1)
  ).toBe(
    FadingClassName.FadeFromSelectedToUnselected
  );
  expect(
    getFadingClassName(0, -1)
  ).toBe(
    FadingClassName.FadeFromSelectedToUnselected
  );
  expect(
    getFadingClassName(1, 0)
  ).toBe(
    FadingClassName.FadeFromUnselectedToSelected
  );
  expect(
    getFadingClassName(-1, 0)
  ).toBe(
    FadingClassName.FadeFromUnselectedToSelected
  );
});
