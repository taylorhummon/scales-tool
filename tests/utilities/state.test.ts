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
      mode: -2,
      root: -2,
      motion: Motion.Still,
      animationType: AnimationType.Simple,
      isUsingSolfege: false,
    }
  );
  addToBrowserHistory(new MusicalKey({ mode: 0, root: 0 }));
  expect(
    getInitialState()
  ).toStrictEqual(
    {
      mode: 0,
      root: 0,
      animationType: AnimationType.Simple,
      motion: Motion.Still,
      isUsingSolfege: false,
    }
  );
  addToBrowserHistory(new MusicalKey({ mode: 3, root: 2 }));
  expect(
    getInitialState()
  ).toStrictEqual(
    {
      mode: 3,
      root: 2,
      animationType: AnimationType.Simple,
      motion: Motion.Still,
      isUsingSolfege: false,
    }
  );
});

test("historicalStateFromMusicalKey() works", () => {
  expect(
    historicalStateFromMusicalKey(new MusicalKey({ mode: -2, root: 1 }))
  ).toStrictEqual(
    {
      mode: -2,
      root: 1,
    }
  );
});
