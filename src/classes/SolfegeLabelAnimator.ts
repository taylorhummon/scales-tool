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
  #topHour: number;
  #bottomHour: number;

  constructor(
    musicalKey: MusicalKey,
    motion: Motion
  ) {
    this.#motion = motion;
    this.#topHour = musicalKey.noteAt(musicalKey.topPosition).hour;
    this.#bottomHour = musicalKey.noteAt(musicalKey.bottomPosition).hour;
  }

  finishHour(
    startHour: number
  ): number | null {
    if (getWillIncrementRoot(this.#motion)) {
      if (this.#motion === Motion.IncrementRoot && startHour === this.#bottomHour) {
        return this.#topHour;
      } else {
        return remainderFor(startHour + 7, 12);
      }
    }
    if (getWillDecrementRoot(this.#motion)) {
      if (this.#motion === Motion.DecrementRoot && startHour === this.#topHour) {
        return this.#bottomHour;
      } else {
        return remainderFor(startHour - 7, 12);
      }
    }
    if (this.#motion === Motion.IncrementDegree) {
      if (startHour === this.#topHour) {
        return remainderFor(this.#topHour + 1, 12);
      }
    }
    if (this.#motion === Motion.DecrementDegree) {
      if (startHour === this.#bottomHour) {
        return remainderFor(this.#bottomHour - 1, 12);
      }
    }
    return null;
  }
}
