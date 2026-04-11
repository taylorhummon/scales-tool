import { test, expect, afterEach } from "vitest";

import { AnimationType, Motion } from "@/enumerations";
import { MusicalKey } from "@/classes/MusicalKey";
import { addToBrowserHistory } from "@/utilities/routing";
import {
  getInitialState,
  handleBrowserHistoryPop,
  musicalKeyFromHistoricalState,
  historicalStateFromMusicalKey,
} from "@/utilities/state";
import { cleanHistory } from "../testHelpers";


afterEach(cleanHistory);

test("getInitialState() works", () => {
  expect(
    getInitialState()
  ).toStrictEqual(
    { degree: 0, root: -2, animationType: AnimationType.Simple, motion: Motion.Still }
  );
  addToBrowserHistory(new MusicalKey(0, 0));
  expect(
    getInitialState()
  ).toStrictEqual(
    { degree: 0, root: 0, animationType: AnimationType.Simple, motion: Motion.Still }
  );
  addToBrowserHistory(new MusicalKey(2, 3));
  expect(
    getInitialState()
  ).toStrictEqual(
    { degree: 2, root: 3, animationType: AnimationType.Simple, motion: Motion.Still }
  );
});


test("handleBrowserHistoryPop() works", () => {
  const state = {
    root: 0,
    degree: 0,
    animationType: AnimationType.Ballet,
    motion: Motion.IncrementRoot,
  }
  expect(
    handleBrowserHistoryPop(state, { root: 2, degree: 1 })
  ).toStrictEqual(
    { root: 2, degree: 1, animationType: AnimationType.Ballet, motion: Motion.Still }
  );
});

test("musicalKeyFromHistoricalState() works", () => {
  const musicalKey = musicalKeyFromHistoricalState({ root: 3, degree: 2 });
  expect(
    musicalKey.root
  ).toBe(
    3
  );
  expect(
    musicalKey.degree
  ).toBe(
    2
  );
});

test("historicalStateFromMusicalKey() works", () => {
  expect(
    historicalStateFromMusicalKey(new MusicalKey(1, -2))
  ).toStrictEqual(
    { root: -2, degree: 1 }
  );
});
