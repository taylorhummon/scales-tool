import { Note } from "@shared/classes/Note"
import { buildIndicesArray, buildInclusiveRange } from "@shared/utilities/array"
import { remainderFor } from "@shared/utilities/math"
import { MAX_MODE, MIN_MODE, modeNameFromMode, modeNoteFromMode } from "@shared/utilities/mode"
import { type NaturalNote } from "@shared/utilities/naturalNote"
import { type SolfegeLetter, SOLFEGE_LETTERS } from "@shared/utilities/solfege"


interface constructorInput {
  mode?: number,
  root?: number,
  degree?: number,
}

export class MusicalKey {
  mode: number
  root: number
  degree: number
  #scale: Map<SolfegeLetter, Note> | null = null

  constructor(
    input: constructorInput,
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

  get symmetryNote(
  ): Note {
    return new Note({ value: this.degree })
  }

  get headNote(
  ): Note {
    return new Note({ value: this.degree + 3 })
  }

  get tailNote(
  ): Note {
    return new Note({ value: this.degree - 3 })
  }

  get scale(
  ): Map<SolfegeLetter, Note> {
    if (this.#scale === null) this.#scale = this.#getScale()
    return this.#scale
  }

  #getScale(
  ): Map<SolfegeLetter, Note> {
    const values = buildInclusiveRange(this.degree - 3, this.degree + 3)
    const notes = values.map((value) => new Note({ value }))
    const scale: Map<SolfegeLetter, Note> = new Map()
    for (const index of buildIndicesArray(7)) {
      const solfegeLetter = SOLFEGE_LETTERS[index]
      const note = notes[remainderFor(2 * index + this.mode + 3, 7)]
      scale.set(solfegeLetter, note)
    }
    return scale
  }
}

interface cleanedConstructorInput {
  mode: number,
  root: number,
  degree: number,
}

// *** Private functions below this line ***

function clean({
  mode,
  root,
  degree,
}: constructorInput): cleanedConstructorInput {
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
