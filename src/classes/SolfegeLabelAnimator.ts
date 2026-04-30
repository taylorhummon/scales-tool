import type { MusicalKey } from "@/classes/MusicalKey";
import { remainderFor } from "@/utilities/math";
import {
  Motion,
  getWillIncrementDegree,
  getWillDecrementDegree,
  getWillIncrementRoot,
  getWillDecrementRoot,
} from "@/utilities/motion";
import type { Settings } from "@/utilities/settings";


export function buildSolfegeLabelAnimator(
  settings: Settings,
  musicalKey: MusicalKey,
  motion: Motion,
): SolfegeLabelAnimator | null {
  if (
    getWillIncrementDegree(motion) ||
    getWillDecrementDegree(motion) ||
    getWillIncrementRoot(motion) ||
    getWillDecrementRoot(motion)
  ) {
    return new SolfegeLabelAnimator(settings, musicalKey, motion);
  }
  return null;
}

export class SolfegeLabelAnimator {
  #settings: Settings
  #motion: Motion;
  #topHour: number;
  #bottomHour: number;

  constructor(
    settings: Settings,
    musicalKey: MusicalKey,
    motion: Motion,
  ) {
    this.#settings = settings;
    this.#motion = motion;
    this.#topHour = musicalKey.noteAt(musicalKey.topPosition).getHour(settings);
    this.#bottomHour = musicalKey.noteAt(musicalKey.bottomPosition).getHour(settings);
  }

  finishHour(
    startHour: number,
  ): number | null {
    if (this.#settings.isClusteringNotes) {
      return this.#whenClusteringNotes(startHour);
    } else {
      return this.#whenNotClustertingNotes(startHour);
    }
  }

  #whenNotClustertingNotes(
    startHour: number,
  ): number | null {
    if (getWillIncrementRoot(this.#motion)) {
      if (this.#motion === Motion.IncrementRoot && startHour === this.#bottomHour) {
        return remainderFor(startHour + 6, 12);
      } else {
        return remainderFor(startHour + 7, 12);
      }
    }
    if (getWillDecrementRoot(this.#motion)) {
      if (this.#motion === Motion.DecrementRoot && startHour === this.#topHour) {
        return remainderFor(startHour - 6, 12);
      } else {
        return remainderFor(startHour - 7, 12);
      }
    }
    if (this.#motion === Motion.IncrementDegree) {
      if (startHour === this.#topHour) {
        return remainderFor(startHour + 1, 12);
      }
    }
    if (this.#motion === Motion.DecrementDegree) {
      if (startHour === this.#bottomHour) {
        return remainderFor(startHour - 1, 12);
      }
    }
    return null;
  }

  #whenClusteringNotes(
    startHour: number,
  ): number | null {
    if (this.#motion === Motion.IncrementRoot) {
      if (startHour === this.#bottomHour) {
        return remainderFor(startHour + 6, 12);
      } else {
        return remainderFor(startHour + 1, 12);
      }
    }
    if (this.#motion === Motion.DecrementRoot) {
      if (startHour === this.#topHour) {
        return remainderFor(startHour - 6, 12);
      } else {
        return remainderFor(startHour - 1, 12);
      }
    }
    if (this.#motion === Motion.IncrementDegree) {
      if (startHour === this.#topHour) {
        return remainderFor(startHour + 7, 12);
      }
    }
    if (this.#motion === Motion.DecrementDegree) {
      if (startHour === this.#bottomHour) {
        return remainderFor(startHour - 7, 12);
      }
    }
    if (this.#motion === Motion.IncrementBoth) {
      return remainderFor(startHour + 1, 12);
    }
    if (this.#motion === Motion.DecrementBoth) {
      return remainderFor(startHour - 1, 12);
    }
    return null;
  }
}
