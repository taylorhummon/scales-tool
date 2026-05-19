import { type MusicalKey } from "@shared/classes/MusicalKey"
import { Note } from "@shared/classes/Note"
import { Motion, getWillIncrementDegree, getWillDecrementDegree } from "@shared/utilities/motion"


interface constructorInput {
  isUntangled: boolean,
  motion: Motion,
  musicalKey: MusicalKey,
}

export class NoteDotAnimator {
  #isUntangled: boolean
  #motion: Motion
  #headNoteValue: number
  #tailNoteValue: number

  constructor({
    isUntangled,
    motion,
    musicalKey,
  }: constructorInput) {
    this.#isUntangled = isUntangled
    this.#motion = motion
    this.#headNoteValue = musicalKey.headNote.value
    this.#tailNoteValue = musicalKey.tailNote.value
  }

  finishNote(
    startNote: Note,
  ): Note {
    if (this.#isUntangled) {
      return this.#notesBallet(startNote)
    } else {
      return this.#notesBallet(startNote)
    }
  }

  #notesBallet(
    startNote: Note,
  ): Note {
    if (getWillIncrementDegree(this.#motion)) {
      return new Note({ value: startNote.value + 1 })
    }
    if (getWillDecrementDegree(this.#motion)) {
      return new Note({ value: startNote.value - 1 })
    }
    return startNote
  }

  #minimal(
    startNote: Note,
  ): Note {
    if (
      getWillIncrementDegree(this.#motion) &&
      startNote.value === this.#tailNoteValue
    ) {
      return new Note({ value: startNote.value + 7 })
    }
    if (
      getWillDecrementDegree(this.#motion) &&
      startNote.value === this.#headNoteValue
    ) {
      return new Note({ value: startNote.value - 7 })
    }
    return startNote
  }
}
