import { test, expect, afterEach } from "vitest";

import { AnimationType, Motion } from "@/enumerations";
import { MusicalKey } from "@/classes/MusicalKey";
import { addToBrowserHistory } from "@/utilities/routing";
import {
  getInitialState,
  historicalStateFromMusicalKey,
} from "@/utilities/state";
import { cleanHistory } from "../testHelpers";


afterEach(cleanHistory);

test("getInitialState() works", () => {
  expect(
    getInitialState()
  ).toStrictEqual(
    {
      degree: 0,
      root: -2,
      motion: Motion.Still,
      animationType: AnimationType.Simple,
      isUsingSolfege: false
    }
  );
  addToBrowserHistory(new MusicalKey(0, 0));
  expect(
    getInitialState()
  ).toStrictEqual(
    {
      degree: 0,
      root: 0,
      animationType: AnimationType.Simple,
      motion: Motion.Still,
      isUsingSolfege: false
    }
  );
  addToBrowserHistory(new MusicalKey(2, 3));
  expect(
    getInitialState()
  ).toStrictEqual(
    {
      degree: 2,
      root: 3,
      animationType: AnimationType.Simple,
      motion: Motion.Still,
      isUsingSolfege: false
    }
  );
});

test("historicalStateFromMusicalKey() works", () => {
  expect(
    historicalStateFromMusicalKey(new MusicalKey(1, -2))
  ).toStrictEqual(
    { degree: 1, root: -2 }
  );
});
