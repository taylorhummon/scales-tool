import { NaturalNoteName } from "src/enumerations";
import { remainderFor } from "src/utilities/math";


const HOUR_BY_NATURAL_NOTE = new Map<NaturalNoteName, number>([
  [NaturalNoteName.D, 0],
  [NaturalNoteName.E, 2],
  [NaturalNoteName.F, 3],
  [NaturalNoteName.G, 5],
  [NaturalNoteName.A, 7],
  [NaturalNoteName.B, 9],
  [NaturalNoteName.C, 10],
]);


export class Note {
  #naturalNoteName: NaturalNoteName;
  #sharpsCount: number;

  constructor(
    naturalNoteName: NaturalNoteName,
    sharpsCount: number,  // 0 means natural. negative means flats.
  ) {
    this.#naturalNoteName = naturalNoteName;
    this.#sharpsCount = sharpsCount;
  }

  get naturalNoteName(): NaturalNoteName {
    return this.#naturalNoteName;
  }

  get sharpsCount(): number {
    return this.#sharpsCount;
  }

  get name(): string {
    if (this.#sharpsCount > 0) {
      return this.#naturalNoteName + "♯".repeat(this.#sharpsCount);
    } else if (this.#sharpsCount < 0) {
      return this.#naturalNoteName + "♭".repeat(- this.#sharpsCount);
    } else {
      return this.#naturalNoteName;
    }
  }

  get hour(): number {
    const hour = HOUR_BY_NATURAL_NOTE.get(this.#naturalNoteName) as number;
    return remainderFor(hour + this.#sharpsCount, 12);
  }
}
