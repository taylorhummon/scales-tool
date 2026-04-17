import {
  remainderFor,
  quotientAndRemainderFor,
  ensureZeroIsPositive,
} from "@/utilities/math";
import {
  NaturalNote,
  NATURAL_NOTES_IN_FCGDAEB_ORDER,
  NATURAL_NOTES_IN_BEADGCF_ORDER,
  HOUR_BY_NATURAL_NOTE_NAME,
} from "@/utilities/naturalNote";
import { SolfegeLetter, solfegeLetterFromPosition } from "@/utilities/solfege";


export class Note {
  naturalNote: NaturalNote;
  sharpsCount: number;
  position: number;   // where on the selector
  hour: number;       // where on the clock
  name: string;
  solfegeLetter: SolfegeLetter;

  constructor(
    naturalNote: NaturalNote,
    sharpsCount: number,  // positive means sharps; 0 means natural; negative means flats.
    position: number
  ) {
    this.naturalNote = naturalNote;
    this.sharpsCount = sharpsCount;
    this.position = position;
    this.hour = getHour(naturalNote, sharpsCount);
    this.name = getName(naturalNote, sharpsCount);
    this.solfegeLetter = solfegeLetterFromPosition(position);
  }
}

export function buildNote(
  root: number,
  position: number
): Note {
  const bigStepCountFromD = root + position;
  if (bigStepCountFromD > 0) {
    const { quotient, remainder } = quotientAndRemainderFor(3 + bigStepCountFromD, 7);
    const sharpsCount = quotient;
    const naturalNote = NATURAL_NOTES_IN_FCGDAEB_ORDER[remainder];
    return new Note(naturalNote, sharpsCount, position);
  }
  if (bigStepCountFromD < 0) {
    const { quotient, remainder } = quotientAndRemainderFor(3 - bigStepCountFromD, 7);
    const sharpsCount = ensureZeroIsPositive(- quotient);
    const naturalNote = NATURAL_NOTES_IN_BEADGCF_ORDER[remainder];
    return new Note(naturalNote, sharpsCount, position);
  }
  return new Note(NaturalNote.D, 0, position);
}

// *** Private constants and functions below this line ***

function getHour(
  naturalNote: NaturalNote,
  sharpsCount: number
): number {
  const hour = HOUR_BY_NATURAL_NOTE_NAME.get(naturalNote) as number;
  return remainderFor(hour + sharpsCount, 12);
}

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
