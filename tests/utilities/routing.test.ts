import { test, expect, afterEach } from "vitest";

import { MusicalKey } from "@/classes/MusicalKey";
import {
  addToBrowserHistory,
  musicalKeyFromCurrentURL,
} from "@/utilities/routing";
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
    "/key/D0"
  );
  expect(
    window.history.length
  ).toBe(
    2
  );
  addToBrowserHistory(new MusicalKey(2, 3));
  expect(
    document.location.pathname
  ).toBe(
    "/key/A2"
  );
  expect(
    window.history.length
  ).toBe(
    3
  );
});

test("musicalKeyFromCurrentURL() works", () => {
  expect(
    musicalKeyFromCurrentURL().root
  ).toBe(
    -2
  );
  expect(
    musicalKeyFromCurrentURL().degree
  ).toBe(
    0
  );
  addToBrowserHistory(new MusicalKey(0, 0));
  expect(
    musicalKeyFromCurrentURL().root
  ).toBe(
    0
  );
  expect(
    musicalKeyFromCurrentURL().degree
  ).toBe(
    0
  );
  addToBrowserHistory(new MusicalKey(2, 3));
  expect(
    musicalKeyFromCurrentURL().root
  ).toBe(
    3
  );
  expect(
    musicalKeyFromCurrentURL().degree
  ).toBe(
    2
  );
  // User enters a garbage path in the URL
  window.history.pushState(null, "", "garbage/path/here");
  expect(
    musicalKeyFromCurrentURL().root
  ).toBe(
    -2
  );
  expect(
    musicalKeyFromCurrentURL().degree
  ).toBe(
    0
  );
  expect(
    document.location.pathname
  ).toBe(
    "/"
  );
});
