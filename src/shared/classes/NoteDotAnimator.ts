import { type MusicalKey } from "@shared/classes/MusicalKey"
import { Note } from "@shared/classes/Note"
import { type ClockSettings } from "@shared/utilities/clock"


interface constructorInput {
  clockSettings: ClockSettings,
  musicalKey: MusicalKey,
  nextMusicalKey: MusicalKey,
}

export class NoteDotAnimator {
  #isUsingDotsBallet: boolean
  #onlyNoteValues: OnlyNoteValues | null

  constructor({
    clockSettings,
    musicalKey,
    nextMusicalKey,
  }: constructorInput) {
    this.#isUsingDotsBallet = clockSettings.isUsingDotsBallet
    this.#onlyNoteValues = getOnlyNoteValues(musicalKey, nextMusicalKey)
  }

  finishNote(
    startNote: Note,
  ): Note {
    if (this.#isUsingDotsBallet) {
      return this.#notesBallet(startNote)
    } else {
      return this.#minimal(startNote)
    }
  }

  #notesBallet(
    startNote: Note,
  ): Note {
    if (this.#onlyNoteValues === null) return startNote
    const { currentOnlyNoteValue, nextOnlyNoteValue } = this.#onlyNoteValues
    if (nextOnlyNoteValue > currentOnlyNoteValue) {
      return new Note({ value: startNote.value + 1 })
    } else {
      return new Note({ value: startNote.value - 1 })
    }
  }

  #minimal(
    startNote: Note,
  ): Note {
    if (this.#onlyNoteValues === null) return startNote
    const { currentOnlyNoteValue, nextOnlyNoteValue } = this.#onlyNoteValues
    if (startNote.value === currentOnlyNoteValue) {
      return new Note({ value: nextOnlyNoteValue })
    }
    return startNote
  }
}

interface OnlyNoteValues {
  currentOnlyNoteValue: number,
  nextOnlyNoteValue: number,
}

function getOnlyNoteValues(
  musicalKey: MusicalKey,
  nextMusicalKey: MusicalKey,
): OnlyNoteValues | null {
  const currentNoteValues = new Set(musicalKey.notes.map((note) => note.value))
  const nextNoteValues = new Set(nextMusicalKey.notes.map((note) => note.value))
  const sharedNoteValues = currentNoteValues.intersection(nextNoteValues)
  if (sharedNoteValues.size === 7) {
    return null
  }
  if (sharedNoteValues.size === 6) {
    const [ currentOnlyNoteValue ] = [ ...currentNoteValues.difference(sharedNoteValues) ]
    const [ nextOnlyNoteValue ] = [ ...nextNoteValues.difference(sharedNoteValues) ]
    return { currentOnlyNoteValue, nextOnlyNoteValue }
  }
  throw Error("Unrecognized transition between musical keys")
}
