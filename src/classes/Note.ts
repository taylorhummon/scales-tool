import { NaturalNoteName, Solfege } from "src/enumerations";
import { remainderFor } from "src/utilities/math";


export class Note {
  naturalNoteName: NaturalNoteName;
  sharpsCount: number;
  solfege: Solfege;
  location: number;

  constructor(
    naturalNoteName: NaturalNoteName,
    sharpsCount: number,  // 0 means natural. negative means flats.
    solfege: Solfege,
    location: number
  ) {
    this.naturalNoteName = naturalNoteName;
    this.sharpsCount = sharpsCount;
    this.solfege = solfege;
    this.location = location;
  }

  get name(): string {
    if (this.sharpsCount > 0) {
      return this.naturalNoteName + "♯".repeat(this.sharpsCount);
    } else if (this.sharpsCount < 0) {
      return this.naturalNoteName + "♭".repeat(- this.sharpsCount);
    } else {
      return this.naturalNoteName;
    }
  }

  get hour(): number {
    const hour = HOUR_BY_NATURAL_NOTE_NAME.get(this.naturalNoteName) as number;
    return remainderFor(hour + this.sharpsCount, 12);
  }
}


const HOUR_BY_NATURAL_NOTE_NAME = new Map<NaturalNoteName, number>([
  [NaturalNoteName.D, 0],
  [NaturalNoteName.E, 2],
  [NaturalNoteName.F, 3],
  [NaturalNoteName.G, 5],
  [NaturalNoteName.A, 7],
  [NaturalNoteName.B, 9],
  [NaturalNoteName.C, 10],
]);
