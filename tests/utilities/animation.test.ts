import { test, expect } from "vitest";

import { MusicalKey } from "@/classes/MusicalKey";
import { AnimationType, getNoteFinishHour } from "@/utilities/animation";
import { arrayFromMap } from "@/utilities/map";


test("getNoteFinishHour() works", () => {
  const musicalKey = new MusicalKey(0, 0);
  expect(
    arrayFromMap(
      musicalKey.scale,
      (note) => getNoteFinishHour(AnimationType.Simple, musicalKey, new MusicalKey(1, 0), note)
    )
  ).toStrictEqual(
    [0, 2, 3, 5, 7, 9, 10]
  );
  expect(
    arrayFromMap(
      musicalKey.scale,
      (note) => getNoteFinishHour(AnimationType.Ballet, musicalKey, new MusicalKey(1, 0), note)
    )
  ).toStrictEqual(
    [0, 2, 3, 5, 7, 9, 10]
  );

  expect(
    arrayFromMap(
      musicalKey.scale,
      (note) => getNoteFinishHour(AnimationType.Simple, musicalKey, new MusicalKey(-1, 0), note)
    )
  ).toStrictEqual(
    [0, 2, 3, 5, 7, 9, 10]
  );
  expect(
    arrayFromMap(
      musicalKey.scale,
      (note) => getNoteFinishHour(AnimationType.Ballet, musicalKey, new MusicalKey(-1, 0), note)
    )
  ).toStrictEqual(
    [0, 2, 3, 5, 7, 9, 10]
  );

  expect(
    arrayFromMap(
      musicalKey.scale,
      (note) => getNoteFinishHour(AnimationType.Simple, musicalKey, new MusicalKey(0, 1), note)
    )
  ).toStrictEqual(
    [0, 2, 4, 5, 7, 9, 10]
  );
  expect(
    arrayFromMap(
      musicalKey.scale,
      (note) => getNoteFinishHour(AnimationType.Ballet, musicalKey, new MusicalKey(0, 1), note)
    )
  ).toStrictEqual(
    [7, 9, 10, 0, 2, 4, 5]
  );

  expect(
    arrayFromMap(
      musicalKey.scale,
      (note) => getNoteFinishHour(AnimationType.Simple, musicalKey, new MusicalKey(0, -1), note)
    )
  ).toStrictEqual(
    [0, 2, 3, 5, 7, 8, 10]
  );
  expect(
    arrayFromMap(
      musicalKey.scale,
      (note) => getNoteFinishHour(AnimationType.Ballet, musicalKey, new MusicalKey(0, -1), note)
    )
  ).toStrictEqual(
    [5, 7, 8, 10, 0, 2, 3]
  );
});
