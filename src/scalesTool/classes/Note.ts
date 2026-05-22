import {
  getQuotientAndRemainder,
  ensureZeroIsPositive,
} from "@scalesTool/utilities/math"
import {
  NaturalNote,
  NATURAL_NOTES_IN_FCGDAEB_ORDER,
  NATURAL_NOTES_IN_BEADGCF_ORDER,
} from "@scalesTool/utilities/naturalNote"


export const SHARP = "♯"
export const FLAT = "♭"


interface buildNoteParameters {
  naturalNote: NaturalNote,
  sharpsCount: number,  // positive means sharps; 0 means natural; negative means flats.
}

export function buildNote({
  naturalNote,
  sharpsCount,
}: buildNoteParameters): Note {

  return new Note({ value: getValue(naturalNote, sharpsCount) })
}

interface constructorParameters {
  value: number,  // big steps from D
}

export class Note {
  value: number
  #naturalNote?: NaturalNote
  #sharpsCount?: number

  constructor({
    value,
  }: constructorParameters) {
    this.value = value
  }

  get naturalNote(
  ): NaturalNote {
    if (this.#naturalNote === undefined) {
      const { naturalNote, sharpsCount } = getNaturalNoteAndSharpsCount(this.value)
      this.#naturalNote = naturalNote
      this.#sharpsCount = sharpsCount
    }
    return this.#naturalNote
  }

  get sharpsCount(
  ): number {
    if (this.#sharpsCount === undefined) {
      const { naturalNote, sharpsCount } = getNaturalNoteAndSharpsCount(this.value)
      this.#naturalNote = naturalNote
      this.#sharpsCount = sharpsCount
    }
    return this.#sharpsCount
  }

  get name(
  ): string {
    if (this.sharpsCount > 0) {
      return this.naturalNote + SHARP.repeat(this.sharpsCount)
    } else if (this.sharpsCount < 0) {
      return this.naturalNote + FLAT.repeat(- this.sharpsCount)
    } else {
      return this.naturalNote
    }
  }
}

// *** Private functions below this line ***

function getValue(
  naturalNote: NaturalNote,
  sharpsCount: number,
): number {
  const index = NATURAL_NOTES_IN_FCGDAEB_ORDER.indexOf(naturalNote)
  return 7 * sharpsCount + index - 3
}

function getNaturalNoteAndSharpsCount(
  value: number,
): { naturalNote: NaturalNote, sharpsCount: number } {
  if (value > 0) {
    const { quotient, remainder } = getQuotientAndRemainder(3 + value, 7)
    return {
      naturalNote: NATURAL_NOTES_IN_FCGDAEB_ORDER[remainder],
      sharpsCount: quotient
    }
  }
  if (value < 0) {
    const { quotient, remainder } = getQuotientAndRemainder(3 - value, 7)
    return {
      naturalNote: NATURAL_NOTES_IN_BEADGCF_ORDER[remainder],
      sharpsCount: ensureZeroIsPositive(- quotient)
    }
  }
  return { naturalNote: NaturalNote.D, sharpsCount: 0 }
}
