import { test, expect } from "vitest";

import { SelectorValueState, getSelectorValueState } from "@/utilities/selector";


test("getSelectorValueState() works", () => {
  expect(
    getSelectorValueState(0, 0)
  ).toBe(
    SelectorValueState.Selected
  );
  expect(
    getSelectorValueState(2, 2)
  ).toBe(
    SelectorValueState.Unselected
  );
  expect(
    getSelectorValueState(2, 3)
  ).toBe(
    SelectorValueState.Unselected
  );
  expect(
    getSelectorValueState(0, 1)
  ).toBe(
    SelectorValueState.FadeFromSelectedToUnselected
  );
  expect(
    getSelectorValueState(0, -1)
  ).toBe(
    SelectorValueState.FadeFromSelectedToUnselected
  );
  expect(
    getSelectorValueState(1, 0)
  ).toBe(
    SelectorValueState.FadeFromUnselectedToSelected
  );
  expect(
    getSelectorValueState(-1, 0)
  ).toBe(
    SelectorValueState.FadeFromUnselectedToSelected
  );
});
