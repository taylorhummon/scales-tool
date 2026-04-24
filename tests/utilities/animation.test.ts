import { test, expect } from "vitest";

import { MusicalKey } from "@/classes/MusicalKey";
import { getNoteFinishHour } from "@/utilities/animation";
import { arrayFromMap } from "@/utilities/map";


test("getNoteFinishHour() works", () => {
  const musicalKey = new MusicalKey({ root: 0, degree: 0 });

  expect(
    arrayFromMap(
      musicalKey.scale,
      (note) => getNoteFinishHour(musicalKey, new MusicalKey({ root: 1, degree: 0 }), false, note)
    )
  ).toStrictEqual(
    [0, 2, 3, 5, 7, 9, 10]
  );
  expect(
    arrayFromMap(
      musicalKey.scale,
      (note) => getNoteFinishHour(musicalKey, new MusicalKey({ root: 1, degree: 0 }), true, note)
    )
  ).toStrictEqual(
    [0, 2, 3, 5, 7, 9, 10]
  );

  expect(
    arrayFromMap(
      musicalKey.scale,
      (note) => getNoteFinishHour(musicalKey, new MusicalKey({ root: -1, degree: 0 }), false, note)
    )
  ).toStrictEqual(
    [0, 2, 3, 5, 7, 9, 10]
  );
  expect(
    arrayFromMap(
      musicalKey.scale,
      (note) => getNoteFinishHour(musicalKey, new MusicalKey({ root: -1, degree: 0 }), true, note)
    )
  ).toStrictEqual(
    [0, 2, 3, 5, 7, 9, 10]
  );

  expect(
    arrayFromMap(
      musicalKey.scale,
      (note) => getNoteFinishHour(musicalKey, new MusicalKey({ root: 0, degree: 1 }), false, note)
    )
  ).toStrictEqual(
    [0, 2, 4, 5, 7, 9, 10]
  );
  expect(
    arrayFromMap(
      musicalKey.scale,
      (note) => getNoteFinishHour(musicalKey, new MusicalKey({ root: 0, degree: 1 }), true, note)
    )
  ).toStrictEqual(
    [7, 9, 10, 0, 2, 4, 5]
  );

  expect(
    arrayFromMap(
      musicalKey.scale,
      (note) => getNoteFinishHour(musicalKey, new MusicalKey({ root: 0, degree: -1 }), false, note)
    )
  ).toStrictEqual(
    [0, 2, 3, 5, 7, 8, 10]
  );
  expect(
    arrayFromMap(
      musicalKey.scale,
      (note) => getNoteFinishHour(musicalKey, new MusicalKey({ root: 0, degree: -1 }), true, note)
    )
  ).toStrictEqual(
    [5, 7, 8, 10, 0, 2, 3]
  );
});
