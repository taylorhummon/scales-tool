import { Note } from "@shared/classes/Note"
import { buildInclusiveRange } from "@shared/utilities/array"
import { getBalancedMod7 } from "@shared/utilities/math"
import { MAX_MODE, MIN_MODE, modeNameFromMode, modeNoteFromMode } from "@shared/utilities/mode"
import { type NaturalNote, caterpillarIndexFromNaturalNote } from "@shared/utilities/naturalNote"
import {
  type SimplifiedLetter,
  caterpillarIndexFromSimplifiedLetter,
  simplifiedLetterFromCaterpillarIndex,
} from "@shared/utilities/simplifiedLetter"
import { type SolfegeLetter, caterpillarIndexFromSolfegeLetter } from "@shared/utilities/solfegeLetter"


interface constructorParameters {
  mode?: number,
  root?: number,
  rank?: number,
}

export class MusicalKey {
  mode: number
  root: number
  rank: number
  #noteByCaterpillarIndex: Map<number, Note> | null = null

  constructor(
    input: constructorParameters,
  ) {
    const { mode, root, rank } = clean(input)
    if (mode > MAX_MODE || mode < MIN_MODE) throw Error(`Invalid mode: ${mode}`)
    this.mode = mode
    this.root = root
    this.rank = rank
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

  get rankNote(
  ): Note {
    return new Note({ value: this.rank })
  }

  noteFromCaterpillarIndex(
    caterpillarIndex: number,
  ): Note {
    if (this.#noteByCaterpillarIndex === null) {
      this.#noteByCaterpillarIndex = getNoteByCaterpillarIndex(this.rank)
    }
    const possiblyUndefined = this.#noteByCaterpillarIndex.get(caterpillarIndex)
    if (possiblyUndefined === undefined) {
      throw Error(`Could not find note for caterpillarIndex ${caterpillarIndex}`)
    }
    return possiblyUndefined
  }

  noteFromNaturalNote(
    naturalNote: NaturalNote,
  ): Note {
    const caterpillarIndex = caterpillarIndexFromNaturalNote(naturalNote)
    return this.noteFromCaterpillarIndex(getBalancedMod7(caterpillarIndex - this.rank))
  }

  noteFromSolfegeLetter(
    solfegeLetter: SolfegeLetter,
  ): Note {
    const caterpillarIndex = caterpillarIndexFromSolfegeLetter(solfegeLetter)
    return this.noteFromCaterpillarIndex(getBalancedMod7(caterpillarIndex + this.mode))
  }

  noteFromSimplifiedLetter(
    simplifiedLetter: SimplifiedLetter,
  ): Note {
    const caterpillarIndex = caterpillarIndexFromSimplifiedLetter(simplifiedLetter)
    return this.noteFromCaterpillarIndex(caterpillarIndex)
  }

  simplifiedLetterFromNaturalNote(
    naturalNote: NaturalNote,
  ): SimplifiedLetter {
    const caterpillarIndex = caterpillarIndexFromNaturalNote(naturalNote)
    return simplifiedLetterFromCaterpillarIndex(getBalancedMod7(caterpillarIndex - this.rank))
  }
}

interface cleanedConstructorParameters {
  mode: number,
  root: number,
  rank: number,
}

// *** Private functions below this line ***

function clean({
  mode,
  root,
  rank,
}: constructorParameters): cleanedConstructorParameters {
  if (mode !== undefined && root !== undefined && rank !== undefined && rank !== root - mode) {
    throw Error(`The equation, rank = root - mode, should hold for all keys. Found ${rank} = ${root} - ${mode}`)
  }
  if (mode !== undefined && root !== undefined) {
    const rank = root - mode
    return { mode, root, rank }
  }
  if (mode !== undefined && rank !== undefined) {
    const root = mode + rank
    return { mode, root, rank }
  }
  if (root !== undefined && rank !== undefined) {
    const mode = root - rank
    return { mode, root, rank }
  }
  throw Error("new MusicalKey() requires at least two of its parameters to be given")
}

function getNoteByCaterpillarIndex(
  rank: number,
): Map<number, Note> {
  return new Map(buildInclusiveRange(-3, 3).map(
    (caterpillarIndex) => [
      caterpillarIndex,
      new Note({ value: rank + caterpillarIndex })
    ]
  ))
}
