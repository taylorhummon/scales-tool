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
  #topPositionHour: number;
  #bottomPositionHour: number;

  constructor(
    musicalKey: MusicalKey,
    motion: Motion
  ) {
    this.#motion = motion;
    this.#topPositionHour = musicalKey.noteAt(musicalKey.topPosition).hour;
    this.#bottomPositionHour = musicalKey.noteAt(musicalKey.bottomPosition).hour;
  }

  finishHour(
    startHour: number
  ): number | null {
    if (getWillIncrementRoot(this.#motion)) {
      if (this.#motion === Motion.IncrementRoot && startHour === this.#bottomPositionHour) {
        return this.#topPositionHour;
      } else {
        return remainderFor(startHour + 7, 12);
      }
    }
    if (getWillDecrementRoot(this.#motion)) {
      if (this.#motion === Motion.DecrementRoot && startHour === this.#topPositionHour) {
        return this.#bottomPositionHour;
      } else {
        return remainderFor(startHour - 7, 12);
      }
    }
    if (this.#motion === Motion.IncrementDegree) {
      if (startHour === this.#topPositionHour) {
        return remainderFor(this.#topPositionHour + 1, 12);
      }
    }
    if (this.#motion === Motion.DecrementDegree) {
      if (startHour === this.#bottomPositionHour) {
        return remainderFor(this.#bottomPositionHour - 1, 12);
      }
    }
    return null;
  }
}
