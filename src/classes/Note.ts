import { NaturalNote, Solfege } from "src/enumerations";
import { remainderFor } from "src/utilities/math";


export class Note {
  naturalNote: NaturalNote;
  sharpsCount: number;
  solfege: Solfege;
  position: number;
  hour: number;
  name: string;

  constructor(
    naturalNote: NaturalNote,
    sharpsCount: number,  // positive means sharps; 0 means natural; negative means flats.
    solfege: Solfege,
    position: number
  ) {
    this.naturalNote = naturalNote;
    this.sharpsCount = sharpsCount;
    this.solfege = solfege;
    this.position = position;
    this.hour = getHour(naturalNote, sharpsCount);
    this.name = getName(naturalNote, sharpsCount);
  }
}

// *** Private constants and functions below this line ***

function getHour(
  naturalNote: NaturalNote,
  sharpsCount: number
): number {
  const hour = HOUR_BY_NATURAL_NOTE_NAME.get(naturalNote) as number;
  return remainderFor(hour + sharpsCount, 12);
}

const HOUR_BY_NATURAL_NOTE_NAME = new Map<NaturalNote, number>([
  [NaturalNote.A, -5],
  [NaturalNote.B, -3],
  [NaturalNote.C, -2],
  [NaturalNote.D, 0],
  [NaturalNote.E, 2],
  [NaturalNote.F, 3],
  [NaturalNote.G, 5],
]);

function getName(
  naturalNote: NaturalNote,
  sharpsCount: number
): string {
  if (sharpsCount > 0) {
    return naturalNote + "♯".repeat(sharpsCount);
  } else if (sharpsCount < 0) {
    return naturalNote + "♭".repeat(- sharpsCount);
  } else {
    return naturalNote;
  }
}
