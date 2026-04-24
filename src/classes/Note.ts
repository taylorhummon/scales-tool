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
  value: number;                  // big steps from D
  naturalNote: NaturalNote;
  sharpsCount: number;            // positive means sharps; 0 means natural; negative means flats.
  name: string;
  solfegeLetter: SolfegeLetter;   // where in the scale
  position: number;               // where on the selector
  hour: number;                   // where on the clock

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
    this.hour = getHour(naturalNote, sharpsCount);
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
  naturalNote: NaturalNote,
  sharpsCount: number,
): number {
  const hour = HOUR_BY_NATURAL_NOTE_NAME.get(naturalNote) as number;
  return remainderFor(hour + sharpsCount, 12);
}

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
