import { test, expect } from "vitest";

import { MusicalKey } from "@/classes/MusicalKey";
import { getNoteFinishHour } from "@/utilities/animation";
import { arrayFromMap } from "@/utilities/map";
import { DEFAULT_SETTINGS } from "@/utilities/settings";


test("getNoteFinishHour() works when not clustering notes", () => {
  const isClusteringNotes = false;
  const settings = { ...DEFAULT_SETTINGS, isClusteringNotes };
  const musicalKey = new MusicalKey({ root: 0, degree: 0 });
  expect(
    arrayFromMap(
      musicalKey.scale,
      (note) => getNoteFinishHour(settings, musicalKey, new MusicalKey({ root: 1, degree: 0 }), note)
    )
  ).toStrictEqual(
    [0, 2, 3, 5, 7, 9, 10]
  );
  expect(
    arrayFromMap(
      musicalKey.scale,
      (note) => getNoteFinishHour(settings, musicalKey, new MusicalKey({ root: -1, degree: 0 }), note)
    )
  ).toStrictEqual(
    [0, 2, 3, 5, 7, 9, 10]
  );
  expect(
    arrayFromMap(
      musicalKey.scale,
      (note) => getNoteFinishHour(settings, musicalKey, new MusicalKey({ root: 0, degree: 1 }), note)
    )
  ).toStrictEqual(
    [0, 2, 4, 5, 7, 9, 10]
  );
  expect(
    arrayFromMap(
      musicalKey.scale,
      (note) => getNoteFinishHour(settings, musicalKey, new MusicalKey({ root: 0, degree: -1 }), note)
    )
  ).toStrictEqual(
    [0, 2, 3, 5, 7, 8, 10]
  );
});

test("getNoteFinishHour() works when clustering notes", () => {
  const isClusteringNotes = true;
  const settings = { ...DEFAULT_SETTINGS, isClusteringNotes };
  const musicalKey = new MusicalKey({ root: 0, degree: 0 });
  expect(
    arrayFromMap(
      musicalKey.scale,
      (note) => getNoteFinishHour(settings, musicalKey, new MusicalKey({ root: 1, degree: 0 }), note)
    )
  ).toStrictEqual(
    [0, 2, 9, 11, 1, 3, 10]
  );
  expect(
    arrayFromMap(
      musicalKey.scale,
      (note) => getNoteFinishHour(settings, musicalKey, new MusicalKey({ root: -1, degree: 0 }), note)
    )
  ).toStrictEqual(
    [0, 2, 9, 11, 1, 3, 10]
  );
  expect(
    arrayFromMap(
      musicalKey.scale,
      (note) => getNoteFinishHour(settings, musicalKey, new MusicalKey({ root: 0, degree: 1 }), note)
    )
  ).toStrictEqual(
    [0, 2, 4, 11, 1, 3, 10]
  );
  expect(
    arrayFromMap(
      musicalKey.scale,
      (note) => getNoteFinishHour(settings, musicalKey, new MusicalKey({ root: 0, degree: -1 }), note)
    )
  ).toStrictEqual(
    [0, 2, 9, 11, 1, 8, 10]
  );
});
