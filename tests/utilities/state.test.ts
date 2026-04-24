import { test, expect, afterEach } from "vitest";

import { MusicalKey } from "@/classes/MusicalKey";
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
      isUsingSolfege: false,
      isUsingAnimation: true,
      isUsingNotesBallet: false,
    }
  );
  addToBrowserHistory(new MusicalKey({ mode: 0, root: 0 }));
  expect(
    getInitialState()
  ).toStrictEqual(
    {
      mode: 0,
      root: 0,
      motion: Motion.Still,
      isUsingSolfege: false,
      isUsingAnimation: true,
      isUsingNotesBallet: false,
    }
  );
  addToBrowserHistory(new MusicalKey({ mode: 3, root: 2 }));
  expect(
    getInitialState()
  ).toStrictEqual(
    {
      mode: 3,
      root: 2,
      motion: Motion.Still,
      isUsingSolfege: false,
      isUsingAnimation: true,
      isUsingNotesBallet: false,
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
