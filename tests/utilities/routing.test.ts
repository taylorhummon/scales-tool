import { test, expect, afterEach } from "vitest";

import { MusicalKey } from "src/classes/MusicalKey";
import {
  addToBrowserHistory,
  musicalKeyFromCurrentURL,
} from "src/utilities/routing";
import { cleanHistory } from "../testHelpers";


afterEach(cleanHistory);


test("addToBrowserHistory() works", () => {
  expect(
    document.location.pathname
  ).toBe(
    "/"
  );
  expect(
    window.history.length
  ).toBe(
    1
  );
  addToBrowserHistory(new MusicalKey(0, 0));
  expect(
    document.location.pathname
  ).toBe(
    "/key/0D"
  );
  expect(
    window.history.length
  ).toBe(
    2
  );
  addToBrowserHistory(new MusicalKey(2, -1));
  expect(
    document.location.pathname
  ).toBe(
    "/key/2A"
  );
  expect(
    window.history.length
  ).toBe(
    3
  );
});

test("musicalKeyFromCurrentURL() works", () => {
  expect(
    musicalKeyFromCurrentURL().degree
  ).toBe(
    0
  );
  expect(
    musicalKeyFromCurrentURL().mode
  ).toBe(
    2
  );
  addToBrowserHistory(new MusicalKey(0, 0));
  expect(
    musicalKeyFromCurrentURL().degree
  ).toBe(
    0
  );
  expect(
    musicalKeyFromCurrentURL().mode
  ).toBe(
    0
  );
  addToBrowserHistory(new MusicalKey(2, -1));
  expect(
    musicalKeyFromCurrentURL().degree
  ).toBe(
    2
  );
  expect(
    musicalKeyFromCurrentURL().mode
  ).toBe(
    -1
  );
});
