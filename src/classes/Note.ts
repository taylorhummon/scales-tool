import { NaturalNote, Solfege } from "src/enumerations";
import { remainderFor } from "src/utilities/math";


export class Note {
  naturalNote: NaturalNote;
  sharpsCount: number;
  solfege: Solfege;
  position: number;

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
  }

  get name(): string {
    if (this.sharpsCount > 0) {
      return this.naturalNote + "♯".repeat(this.sharpsCount);
    } else if (this.sharpsCount < 0) {
      return this.naturalNote + "♭".repeat(- this.sharpsCount);
    } else {
      return this.naturalNote;
    }
  }

  get hour(): number {
    const hour = HOUR_BY_NATURAL_NOTE_NAME.get(this.naturalNote) as number;
    return remainderFor(hour + this.sharpsCount, 12);
  }
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
