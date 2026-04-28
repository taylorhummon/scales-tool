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
      root: -2,
      degree: 0,
      motion: Motion.Still,
      isUsingSolfege: false,
      isUsingAnimation: true,
      isUsingNotesBallet: false,
    }
  );
  addToBrowserHistory(new MusicalKey({ root: 0, degree: 0 }));
  expect(
    getInitialState()
  ).toStrictEqual(
    {
      root: 0,
      degree: 0,
      motion: Motion.Still,
      isUsingSolfege: false,
      isUsingAnimation: true,
      isUsingNotesBallet: false,
    }
  );
  addToBrowserHistory(new MusicalKey({ root: 3, degree: 2 }));
  expect(
    getInitialState()
  ).toStrictEqual(
    {
      root: 3,
      degree: 2,
      motion: Motion.Still,
      isUsingSolfege: false,
      isUsingAnimation: true,
      isUsingNotesBallet: false,
    }
  );
});

test("historicalStateFromMusicalKey() works", () => {
  expect(
    historicalStateFromMusicalKey(new MusicalKey({ root: -2, degree: 1 }))
  ).toStrictEqual(
    {
      root: -2,
      degree: 1,
    }
  );
});
