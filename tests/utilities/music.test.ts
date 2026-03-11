import { test, expect } from 'vitest';

import { SolfegeName } from "src/enumerations";
import { getNoteBySolfegeName } from "src/utilities/music";


test("getNoteBySolfegeName() for C-Major", () => {
  const noteBySolfegeName = getNoteBySolfegeName(-2, -2);
  expect(
    noteBySolfegeName.get(SolfegeName.Do)
  ).toBe(
    "C"
  );
  expect(
    noteBySolfegeName.get(SolfegeName.Re)
  ).toBe(
    "D"
  );
  expect(
    noteBySolfegeName.get(SolfegeName.Mi)
  ).toBe(
    "E"
  );
  expect(
    noteBySolfegeName.get(SolfegeName.Fa)
  ).toBe(
    "F"
  );
  expect(
    noteBySolfegeName.get(SolfegeName.Sol)
  ).toBe(
    "G"
  );
  expect(
    noteBySolfegeName.get(SolfegeName.La)
  ).toBe(
    "A"
  );
  expect(
    noteBySolfegeName.get(SolfegeName.Ti)
  ).toBe(
    "B"
  );
});

test("getNoteBySolfegeName() for D-Major", () => {
  const noteBySolfegeName = getNoteBySolfegeName(-2, 0);
  expect(
    noteBySolfegeName.get(SolfegeName.Do)
  ).toBe(
    "D"
  );
  expect(
    noteBySolfegeName.get(SolfegeName.Re)
  ).toBe(
    "E"
  );
  expect(
    noteBySolfegeName.get(SolfegeName.Mi)
  ).toBe(
    "F♯"
  );
  expect(
    noteBySolfegeName.get(SolfegeName.Fa)
  ).toBe(
    "G"
  );
  expect(
    noteBySolfegeName.get(SolfegeName.Sol)
  ).toBe(
    "A"
  );
  expect(
    noteBySolfegeName.get(SolfegeName.La)
  ).toBe(
    "B"
  );
  expect(
    noteBySolfegeName.get(SolfegeName.Ti)
  ).toBe(
    "C♯"
  );
});

test("getNoteBySolfegeName() for Dorian D", () => {
  const noteBySolfegeName = getNoteBySolfegeName(0, 0);
  expect(
    noteBySolfegeName.get(SolfegeName.Do)
  ).toBe(
    "D"
  );
  expect(
    noteBySolfegeName.get(SolfegeName.Re)
  ).toBe(
    "E"
  );
  expect(
    noteBySolfegeName.get(SolfegeName.Mi)
  ).toBe(
    "F"
  );
  expect(
    noteBySolfegeName.get(SolfegeName.Fa)
  ).toBe(
    "G"
  );
  expect(
    noteBySolfegeName.get(SolfegeName.Sol)
  ).toBe(
    "A"
  );
  expect(
    noteBySolfegeName.get(SolfegeName.La)
  ).toBe(
    "B"
  );
  expect(
    noteBySolfegeName.get(SolfegeName.Ti)
  ).toBe(
    "C"
  );
});

test("getNoteBySolfegeName() for Dorian C", () => {
  const noteBySolfegeName = getNoteBySolfegeName(0, -2);
  expect(
    noteBySolfegeName.get(SolfegeName.Do)
  ).toBe(
    "C"
  );
  expect(
    noteBySolfegeName.get(SolfegeName.Re)
  ).toBe(
    "D"
  );
  expect(
    noteBySolfegeName.get(SolfegeName.Mi)
  ).toBe(
    "E♭"
  );
  expect(
    noteBySolfegeName.get(SolfegeName.Fa)
  ).toBe(
    "F"
  );
  expect(
    noteBySolfegeName.get(SolfegeName.Sol)
  ).toBe(
    "G"
  );
  expect(
    noteBySolfegeName.get(SolfegeName.La)
  ).toBe(
    "A"
  );
  expect(
    noteBySolfegeName.get(SolfegeName.Ti)
  ).toBe(
    "B♭"
  );
});
