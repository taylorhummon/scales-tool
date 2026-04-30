import {
  remainderFor,
  quotientAndRemainderFor,
  ensureZeroIsPositive,
} from "@/utilities/math";
import {
  NaturalNote,
  NATURAL_NOTES_IN_FCGDAEB_ORDER,
  NATURAL_NOTES_IN_BEADGCF_ORDER,
} from "@/utilities/naturalNote";
import type { Settings } from "@/utilities/settings";
import { SolfegeLetter, solfegeLetterFromPosition } from "@/utilities/solfege";


export class Note {
  value: number;                  // big steps from D
  naturalNote: NaturalNote;
  sharpsCount: number;            // positive means sharps; 0 means natural; negative means flats.
  name: string;
  solfegeLetter: SolfegeLetter;   // where in the scale
  position: number;               // where on the selector

  constructor(
    root: number,
    position: number,
  ) {
    this.value = root + position;
    const { naturalNote, sharpsCount } = getNaturalNoteAndSharpsCount(this.value);
    this.naturalNote = naturalNote;
    this.sharpsCount = sharpsCount;
    this.name = getName(naturalNote, sharpsCount);
    this.solfegeLetter = solfegeLetterFromPosition(position);
    this.position = position;
  }

  // where on the clock
  getHour(
    settings: Settings,
  ): number {
    return getHour(settings, this.naturalNote, this.sharpsCount);
  }
}

// *** Private functions below this line ***

function getNaturalNoteAndSharpsCount(
  value: number,
): { naturalNote: NaturalNote, sharpsCount: number } {
  if (value > 0) {
    const { quotient, remainder } = quotientAndRemainderFor(3 + value, 7);
    return {
      naturalNote: NATURAL_NOTES_IN_FCGDAEB_ORDER[remainder],
      sharpsCount: quotient
    };
  }
  if (value < 0) {
    const { quotient, remainder } = quotientAndRemainderFor(3 - value, 7);
    return {
      naturalNote: NATURAL_NOTES_IN_BEADGCF_ORDER[remainder],
      sharpsCount: ensureZeroIsPositive(- quotient)
    };
  }
  return { naturalNote: NaturalNote.D, sharpsCount: 0 };
}

function getHour(
  settings: Settings,
  naturalNote: NaturalNote,
  sharpsCount: number,
): number {
  const ordinaryHour = ORDINARY_HOUR_BY_NATURAL_NOTE_NAME.get(naturalNote) as number;
  if (settings.isClusteringNotes) {
    return remainderFor(7 * (ordinaryHour + sharpsCount), 12);
  } else {
    return remainderFor(ordinaryHour + sharpsCount, 12);
  }
}

const ORDINARY_HOUR_BY_NATURAL_NOTE_NAME = new Map<NaturalNote, number>([
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
  sharpsCount: number,
): string {
  if (sharpsCount > 0) {
    return naturalNote + "♯".repeat(sharpsCount);
  } else if (sharpsCount < 0) {
    return naturalNote + "♭".repeat(- sharpsCount);
  } else {
    return naturalNote;
  }
}
