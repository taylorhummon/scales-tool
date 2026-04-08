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
    { degree: 0, mode: 2, animationType: AnimationType.Simple, motion: Motion.Still }
  );
  addToBrowserHistory(new MusicalKey(0, 0));
  expect(
    getInitialState()
  ).toStrictEqual(
    { degree: 0, mode: 0, animationType: AnimationType.Simple, motion: Motion.Still }
  );
  addToBrowserHistory(new MusicalKey(2, -1));
  expect(
    getInitialState()
  ).toStrictEqual(
    { degree: 2, mode: -1, animationType: AnimationType.Simple, motion: Motion.Still }
  );
});


test("handleBrowserHistoryPop() works", () => {
  const state = {
    degree: 0,
    mode: 0,
    animationType: AnimationType.Ballet,
    motion: Motion.IncrementMode,
  }
  expect(
    handleBrowserHistoryPop(state, { degree: 1, mode: 2 })
  ).toStrictEqual(
    { degree: 1, mode: 2, animationType: AnimationType.Ballet, motion: Motion.Still }
  );
});

test("musicalKeyFromHistoricalState() works", () => {
  const musicalKey = musicalKeyFromHistoricalState({ degree: 2, mode: 3 });
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
