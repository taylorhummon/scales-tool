import { test, expect } from "vitest";

import { Motion } from "@/enumerations";
import { MusicalKey } from "@/classes/MusicalKey";
import {
  stateFromHistoricalState,
  stateFromMusicalKey,
  musicalKeyFromState,
  historicalStateFromMusicalKey,
} from "@/utilities/state";


test("stateFromHistoricalState() works", () => {
  expect(
    stateFromHistoricalState({ degree: 1, mode: 2 })
  ).toStrictEqual(
    { degree: 1, mode: 2, motion: Motion.Still }
  );
});

test("stateFromMusicalKey() works", () => {
  expect(
    stateFromMusicalKey(new MusicalKey(-1, -2))
  ).toStrictEqual(
    { degree: -1, mode: -2, motion: Motion.Still }
  );
});

test("musicalKeyFromState() works", () => {
  const musicalKey = musicalKeyFromState({ degree: 2, mode: 3, motion: Motion.Still });
  expect(
    musicalKey.degree
  ).toBe(
    2
  );
  expect(
    musicalKey.mode
  ).toBe(
    3
  );
});

test("historicalStateFromMusicalKey() works", () => {
  expect(
    historicalStateFromMusicalKey(new MusicalKey(-2, 1))
  ).toStrictEqual(
    { degree: -2, mode: 1 }
  );
});
