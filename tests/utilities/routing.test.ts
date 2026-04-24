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
  addToBrowserHistory(new MusicalKey({ mode: 0, root: 0 }));
  expect(
    document.location.pathname
  ).toBe(
    "/"
  );
  expect(
    document.location.search
  ).toBe(
    "?mode=0&root=0"
  );
  expect(
    window.history.length
  ).toBe(
    2
  );
  addToBrowserHistory(new MusicalKey({ mode: 3, root: 2 }));
  expect(
    document.location.pathname
  ).toBe(
    "/"
  );
  expect(
    document.location.search
  ).toBe(
    "?mode=3&root=2"
  );
  expect(
    window.history.length
  ).toBe(
    3
  );
});

test("musicalKeyFromCurrentURL() works", () => {
  expect(
    musicalKeyFromCurrentURL().mode
  ).toBe(
    -2
  );
  expect(
    musicalKeyFromCurrentURL().root
  ).toBe(
    -2
  );

  addToBrowserHistory(new MusicalKey({ mode: 0, root: 0 }));
  expect(
    musicalKeyFromCurrentURL().mode
  ).toBe(
    0
  );
  expect(
    musicalKeyFromCurrentURL().root
  ).toBe(
    0
  );

  addToBrowserHistory(new MusicalKey({ mode: 3, root: 2 }));
  expect(
    musicalKeyFromCurrentURL().mode
  ).toBe(
    3
  );
  expect(
    musicalKeyFromCurrentURL().root
  ).toBe(
    2
  );

  // User enters a garbage path in the URL
  window.history.pushState(null, "", "garbage/path/here");
  expect(
    musicalKeyFromCurrentURL().mode
  ).toBe(
    -2
  );
  expect(
    musicalKeyFromCurrentURL().root
  ).toBe(
    -2
  );
  expect(
    document.location.pathname
  ).toBe(
    "/"
  );
});
