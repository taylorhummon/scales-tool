import { Motion } from "src/enumerations";
import { Note } from "src/classes/Note";
import { getNote } from "src/utilities/scale";


export function buildLabelAnimation(
  motion: Motion,
  doPosition: number,
  keyDegree: number
): LabelAnimation | null {
  if (
    motion === Motion.DecrementKeyDegree ||
    motion === Motion.IncrementKeyDegree ||
    motion === Motion.DecrementBoth ||
    motion === Motion.IncrementBoth
  ) {
    return new LabelAnimation(motion, doPosition, keyDegree);
  }
  return null;
}


export class LabelAnimation {
  #doPosition: number;
  #keyDegree: number;
  #isIncrement: boolean;
  #startNote: Note | null = null;
  #finishNote: Note | null = null;

  constructor(
    motion: Motion,
    doPosition: number,
    keyDegree: number
  ) {
    this.#doPosition = doPosition;
    this.#keyDegree = keyDegree;
    this.#isIncrement = this.#getIsIncrement(motion);
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

  get isIncrement(): boolean {
    return this.#isIncrement;
  }

  get isAddingCharacter(): boolean {
    if (this.#isIncrement && this.#keyDegree < 0) {
      return false;
    }
    if (! this.#isIncrement && this.#keyDegree > 0) {
      return false;
    }
    return true;
  }

  #getIsIncrement(
    motion: Motion
  ): boolean {
    if (
      motion === Motion.DecrementKeyDegree ||
      motion === Motion.DecrementBoth
    ) return false;
    if (
      motion === Motion.IncrementKeyDegree ||
      motion === Motion.IncrementBoth
    ) return true;
    throw Error("LabelAnimation requires incrementing or decrementing key degree");
  }

  #computeStartNote(
  ): Note {
    const position = this.#isIncrement ? 3 : -3;
    return getNote(this.#doPosition, this.#keyDegree, position);
  }

  #computeFinishNote(
  ): Note {
    const startNote = this.startNote;
    if (this.#isIncrement) {
      return new Note(startNote.naturalNote, startNote.sharpsCount + 1, startNote.solfege, -3);
    } else {
      return new Note(startNote.naturalNote, startNote.sharpsCount - 1, startNote.solfege, 3);
    }
  }
}
