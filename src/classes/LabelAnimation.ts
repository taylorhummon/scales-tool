import { Motion } from "src/enumerations";
import { Note } from "src/classes/Note";
import { quotientAndRemainderFor } from "src/utilities/math";
import {
  NATURAL_NOTES_IN_FCGDAEB_ORDER,
  NATURAL_NOTES_IN_BEADGCF_ORDER,
  getKeyDegree
} from "src/utilities/scale";


export class LabelAnimation {
  #isIncrementingKeyDegree: boolean;
  #keyDegree: number;

  constructor(
    motion: Motion,
    root: number,
    mode: number
  ) {
    this.#isIncrementingKeyDegree = this.#getIsIncrementingKeyDegree(motion);
    this.#keyDegree = getKeyDegree(root, mode);
  }

  get startNote(): Note {
    if (this.#isIncrementingKeyDegree) {
      const { quotient, remainder } = quotientAndRemainderFor(this.#keyDegree, 7);
      const naturalNoteName = NATURAL_NOTES_IN_FCGDAEB_ORDER[remainder];
      return new Note(naturalNoteName, quotient);
    } else {
      const { quotient, remainder } = quotientAndRemainderFor(- this.#keyDegree, 7);
      const naturalNoteName = NATURAL_NOTES_IN_BEADGCF_ORDER[remainder];
      return new Note(naturalNoteName, - quotient);
    }
  }

  get finishNote(): Note {
    const startNote = this.startNote;
    const sharpsCount = this.#isIncrementingKeyDegree ? startNote.sharpsCount + 1 : startNote.sharpsCount - 1;
    return new Note(startNote.naturalNoteName, sharpsCount);
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
    if (motion === Motion.Still) {
      throw Error("LabelAnimation requires movement");
    }
    return (
      motion === Motion.IncrementRoot ||
      motion === Motion.DecrementMode
    );
  }
}
