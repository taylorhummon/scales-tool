import { Note } from "@scalesTool/classes/Note"
import { buildInclusiveRange } from "@scalesTool/utilities/array"
import { getRemainder } from "@scalesTool/utilities/math"
import { MAX_MODE, MIN_MODE, modeNameFromMode, modeNoteFromMode } from "@scalesTool/utilities/mode"
import { type NaturalNote, indexFromNaturalNote } from "@scalesTool/utilities/naturalNote"
import { type SolfegeLetter, indexFromSolfegeLetter } from "@scalesTool/utilities/solfege"


interface constructorParameters {
  mode?: number,
  root?: number,
  degree?: number,
}

export class MusicalKey {
  mode: number
  root: number
  degree: number
  #notes: Array<Note> | null = null

  constructor(
    input: constructorParameters,
  ) {
    const { mode, root, degree } = clean(input)
    if (mode > MAX_MODE || mode < MIN_MODE) throw Error(`Invalid mode: ${mode}`)
    this.mode = mode
    this.root = root
    this.degree = degree
  }

  get modeName(
  ): string {
    return modeNameFromMode(this.mode)
  }

  get modeNote(
  ): NaturalNote {
    return modeNoteFromMode(this.mode)
  }

  get rootNote(
  ): Note {
    return new Note({ value: this.root })
  }

  get degreeNote(
  ): Note {
    return new Note({ value: this.degree })
  }

  get notes(
  ): Array<Note> {
    if (this.#notes === null) this.#notes = this.#getNotes()
    return this.#notes
  }

  noteFromSolfegeLetter(
    solfegeLetter: SolfegeLetter,
  ): Note {
    const index = indexFromSolfegeLetter(solfegeLetter)
    return this.notes[getRemainder(2 * index + this.mode + 3, 7)]
  }

  noteFromNaturalNote(
    naturalNote: NaturalNote,
  ): Note {
    const index = indexFromNaturalNote(naturalNote)
    return this.notes[getRemainder(2 * index - this.degree - 3, 7)]
  }

  #getNotes(
  ): Array<Note> {
    const values = buildInclusiveRange(this.degree - 3, this.degree + 3)
    return values.map((value) => new Note({ value }))
  }
}

interface cleanedConstructorParameters {
  mode: number,
  root: number,
  degree: number,
}

// *** Private functions below this line ***

function clean({
  mode,
  root,
  degree,
}: constructorParameters): cleanedConstructorParameters {
  if (mode !== undefined && root !== undefined && degree !== undefined && degree !== root - mode) {
    throw Error(`The equation, degree = root - mode, should hold for all keys. Found ${degree} = ${root} - ${mode}`)
  }
  if (mode !== undefined && root !== undefined) {
    const degree = root - mode
    return { mode, root, degree }
  }
  if (mode !== undefined && degree !== undefined) {
    const root = mode + degree
    return { mode, root, degree }
  }
  if (root !== undefined && degree !== undefined) {
    const mode = root - degree
    return { mode, root, degree }
  }
  throw Error("new MusicalKey() requires at least two of its parameters to be given")
}
