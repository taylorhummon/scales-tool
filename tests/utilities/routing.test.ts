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
  addToBrowserHistory(new MusicalKey({ root: 0, degree: 0 }));
  expect(
    document.location.pathname
  ).toBe(
    "/"
  );
  expect(
    document.location.search
  ).toBe(
    "?root=0&degree=0"
  );
  expect(
    window.history.length
  ).toBe(
    2
  );
  addToBrowserHistory(new MusicalKey({ root: 3, degree: 2 }));
  expect(
    document.location.pathname
  ).toBe(
    "/"
  );
  expect(
    document.location.search
  ).toBe(
    "?root=3&degree=2"
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

  addToBrowserHistory(new MusicalKey({ root: 0, degree: 0 }));
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

  addToBrowserHistory(new MusicalKey({ root: 3, degree: 2 }));
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
