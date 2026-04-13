import type { MusicalKey } from "@/classes/MusicalKey";
import { remainderFor } from "@/utilities/math";
import {
  Motion,
  getWillIncrementDegree,
  getWillDecrementDegree,
  getWillIncrementRoot,
  getWillDecrementRoot,
} from "@/utilities/motion";


export function buildSolfegeLabelAnimator(
  musicalKey: MusicalKey,
  motion: Motion
): SolfegeLabelAnimator | null {
  if (
    getWillIncrementDegree(motion) ||
    getWillDecrementDegree(motion) ||
    getWillIncrementRoot(motion) ||
    getWillDecrementRoot(motion)
  ) {
    return new SolfegeLabelAnimator(musicalKey, motion);
  }
  return null;
}

export class SolfegeLabelAnimator {
  #motion: Motion;
  #firstPositionHour: number;
  #lastPositionHour: number;

  constructor(
    musicalKey: MusicalKey,
    motion: Motion
  ) {
    this.#motion = motion;
    this.#firstPositionHour = musicalKey.noteInFirstPosition.hour;
    this.#lastPositionHour = musicalKey.noteInLastPosition.hour;
  }

  finishHour(
    startHour: number
  ): number | null {
    if (getWillIncrementRoot(this.#motion)) {
      if (this.#motion === Motion.IncrementRoot && startHour === this.#firstPositionHour) {
        return this.#lastPositionHour;
      } else {
        return remainderFor(startHour + 7, 12);
      }
    }
    if (getWillDecrementRoot(this.#motion)) {
      if (this.#motion === Motion.DecrementRoot && startHour === this.#lastPositionHour) {
        return this.#firstPositionHour;
      } else {
        return remainderFor(startHour - 7, 12);
      }
    }
    if (this.#motion === Motion.IncrementDegree) {
      if (startHour === this.#lastPositionHour) {
        return remainderFor(this.#lastPositionHour + 1, 12);
      }
    }
    if (this.#motion === Motion.DecrementDegree) {
      if (startHour === this.#firstPositionHour) {
        return remainderFor(this.#firstPositionHour - 1, 12);
      }
    }
    return null;
  }
}
