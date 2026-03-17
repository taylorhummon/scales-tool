import { Motion } from "src/enumerations";
import { remainderFor } from "src/utilities/math";
import { getKeyDegree } from "src/utilities/scale";


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

  get fromHour(): number {
    if (this.#isIncrementingKeyDegree) {
      return remainderFor(7 * this.#keyDegree + 3, 12);
    } else {
      return remainderFor(7 * this.#keyDegree - 3, 12);
    }
  }

  get toHour(): number {
    if (this.#isIncrementingKeyDegree) {
      return remainderFor(this.fromHour + 1, 12);
    } else {
      return remainderFor(this.fromHour - 1, 12);
    }
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
