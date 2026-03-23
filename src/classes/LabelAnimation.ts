import { Motion } from "src/enumerations";
import { Note } from "src/classes/Note";
import { quotientAndRemainderFor } from "src/utilities/math";
import {
  NATURAL_NOTES_IN_FCGDAEB_ORDER,
  NATURAL_NOTES_IN_BEADGCF_ORDER,
  getKeyDegree,
  getSolfege
} from "src/utilities/scale";


export class LabelAnimation {
  #mode: number;
  #isIncrementingKeyDegree: boolean;
  #keyDegree: number;
  #startNote: Note | null = null;
  #finishNote: Note | null = null;

  constructor(
    motion: Motion,
    root: number,
    mode: number
  ) {
    this.#mode = mode;
    this.#isIncrementingKeyDegree = this.#getIsIncrementingKeyDegree(motion);
    this.#keyDegree = getKeyDegree(root, mode);
  }

  get startNote(): Note {
    if (this.#startNote !== null) return this.#startNote;
    this.#startNote = this.#computeStartNote();
    return this.#startNote;
  }

  get finishNote(): Note {
    if (this.#finishNote !== null) return this.#finishNote;
    this.#finishNote = this.#computeFinishNote();
    return this.#finishNote;
  }

  get isIncrementingKeyDegree(): boolean {
    return this.#isIncrementingKeyDegree;
  }

  get isAddingCharacter(): boolean {
    if (this.#isIncrementingKeyDegree && this.#keyDegree < 0) {
      return false;
    }
    if (! this.#isIncrementingKeyDegree && this.#keyDegree > 0) {
      return false;
    }
    return true;
  }

  #getIsIncrementingKeyDegree(
    motion: Motion
  ): boolean {
    if (
      motion === Motion.IncrementRoot ||
      motion === Motion.IncrementMode
    ) return true;
    if (
      motion === Motion.DecrementRoot ||
      motion === Motion.DecrementMode
    ) return false;
    throw Error("LabelAnimation requires movement");
  }

  #computeStartNote(
  ): Note {
    if (this.#isIncrementingKeyDegree) {
      const { quotient, remainder } = quotientAndRemainderFor(this.#keyDegree, 7);
      const naturalNoteName = NATURAL_NOTES_IN_FCGDAEB_ORDER[remainder];
      const location = 0; // first
      const solfege = getSolfege(this.#mode, location);
      return new Note(naturalNoteName, quotient, solfege, location);
    } else {
      const { quotient, remainder } = quotientAndRemainderFor(- this.#keyDegree, 7);
      const naturalNoteName = NATURAL_NOTES_IN_BEADGCF_ORDER[remainder];
      const location = 6; // last
      const solfege = getSolfege(this.#mode, location);
      return new Note(naturalNoteName, - quotient, solfege, location);
    }
  }

  #computeFinishNote(
  ): Note {
    const startNote = this.startNote;
    if (this.#isIncrementingKeyDegree) {
      return new Note(startNote.naturalNoteName, startNote.sharpsCount + 1, startNote.solfege, 6);
    } else {
      return new Note(startNote.naturalNoteName, startNote.sharpsCount - 1, startNote.solfege, 0);
    }
  }
}
