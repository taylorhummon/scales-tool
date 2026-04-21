import { test, expect, afterEach } from "vitest";

import { MusicalKey } from "@/classes/MusicalKey";
import { AnimationType } from "@/utilities/animation";
import { Motion } from "@/utilities/motion";
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
      root: -2,
      degree: 0,
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
      root: 0,
      degree: 0,
      animationType: AnimationType.Simple,
      motion: Motion.Still,
      isUsingSolfege: false
    }
  );
  addToBrowserHistory(new MusicalKey(3, 2));
  expect(
    getInitialState()
  ).toStrictEqual(
    {
      root: 3,
      degree: 2,
      animationType: AnimationType.Simple,
      motion: Motion.Still,
      isUsingSolfege: false
    }
  );
});

test("historicalStateFromMusicalKey() works", () => {
  expect(
    historicalStateFromMusicalKey(new MusicalKey(-2, 1))
  ).toStrictEqual(
    {
      root: -2,
      degree: 1
    }
  );
});
