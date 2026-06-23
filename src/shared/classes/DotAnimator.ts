import { buildInclusiveRange } from "@shared/utilities/array"
import { AnimationOption, getCurrentHour, getNextHour } from "@shared/utilities/clock"
import { type Derived } from "@shared/utilities/derived"
import { getRemainder } from "@shared/utilities/math"
import { Motion } from "@shared/utilities/motion"
import { type NaturalNote } from "@shared/utilities/naturalNote"
import { type SolfegeLetter } from "@shared/utilities/solfegeLetter"


interface constructorParameters {
  derived: Derived
}

export class DotAnimator {
  #derived: Derived
  #_leftOverNotes: LeftOverNotes | null | undefined

  constructor({
    derived,
  }: constructorParameters) {
    this.#derived = derived
  }

  getFinishHour(
    startHour: number,
    naturalNote: NaturalNote,
    solfegeLetter: SolfegeLetter,
  ): number {
    const { clockSettings, motion } = this.#derived
    if (motion === Motion.Still) {
      return startHour
    }
    if (motion === Motion.ToCaterpillarPattern || motion === Motion.ToButterlflyPattern) {
      if (getRemainder(startHour, 2) === 1) {
        return getRemainder(startHour + 6, 12)
      }
      return startHour
    }
    const { animationOption } = clockSettings
    if (animationOption === AnimationOption.FollowsOrdinaryLabel) {
      return this.#followsOrdinaryLabel(naturalNote)
    }
    if (animationOption === AnimationOption.FollowsSolfegeLabel) {
      return this.#followsSolfegeLabel(solfegeLetter)
    }
    if (animationOption === AnimationOption.FollowsSimplifiedLabel) {
      return this.#followsSimplifiedLabel(naturalNote)
    }
    if (animationOption === AnimationOption.Minimal) {
      return this.#minimal(startHour)
    }
    if (animationOption === AnimationOption.Combo) {
      return this.#combo(startHour, naturalNote)
    }
    throw Error(`Unexpected animation option ${animationOption}`)
  }

  #followsOrdinaryLabel(
    naturalNote: NaturalNote,
  ): number {
    const { nextMusicalKey } = this.#derived
    const note = nextMusicalKey.noteFromNaturalNote(naturalNote)
    return getNextHour(this.#derived, note)
  }

  #followsSolfegeLabel(
    solfegeLetter: SolfegeLetter,
  ): number {
    const { nextMusicalKey } = this.#derived
    const note = nextMusicalKey.noteFromSolfegeLetter(solfegeLetter)
    return getNextHour(this.#derived, note)
  }

  #followsSimplifiedLabel(
    naturalNote: NaturalNote,
  ): number {
    const { currentMusicalKey, nextMusicalKey } = this.#derived
    const simplifiedLetter = currentMusicalKey.simplifiedLetterFromNaturalNote(naturalNote)
    const note = nextMusicalKey.noteFromSimplifiedLetter(simplifiedLetter)
    return getNextHour(this.#derived, note)
  }

  #minimal(
    startHour: number,
  ): number {
    if (this.#leftOverNotes === null) return startHour
    const { currentLeftOverNoteHour, nextLeftOverNoteHour } = this.#leftOverNotes
    return startHour === currentLeftOverNoteHour ? nextLeftOverNoteHour : startHour
  }

  #combo(
    startHour: number,
    naturalNote: NaturalNote,
  ): number {
    const { currentIsCaterpillarPattern } = this.#derived
    if (currentIsCaterpillarPattern) {
      return this.#followsSimplifiedLabel(naturalNote)
    } else {
      return this.#minimal(startHour)
    }
  }

  get #leftOverNotes(
  ): LeftOverNotes | null {
    if (this.#_leftOverNotes === undefined) {
      this.#_leftOverNotes = getLeftOverNotes(this.#derived)
    }
    return this.#_leftOverNotes
  }
}

// *** Private functions below this line ***

interface LeftOverNotes {
  currentLeftOverNoteHour: number,
  nextLeftOverNoteHour: number,
}

function getLeftOverNotes(
  derived: Derived,
): LeftOverNotes | null {
  const { currentMusicalKey, nextMusicalKey } = derived
  const caterpillarIndices = buildInclusiveRange(-3, 3)
  const currentHours = new Set(caterpillarIndices.map((caterpillarIndex) => {
    const note = currentMusicalKey.noteFromCaterpillarIndex(caterpillarIndex)
    return getCurrentHour(derived, note)
  }))
  const nextHours = new Set(caterpillarIndices.map((caterpillarIndex) => {
    const note = nextMusicalKey.noteFromCaterpillarIndex(caterpillarIndex)
    return getNextHour(derived, note)
  }))
  const sharedHours = currentHours.intersection(nextHours)
  if (sharedHours.size === 7) {
    return null
  }
  if (sharedHours.size === 6) {
    const [ currentLeftOverNoteHour ] = [ ...currentHours.difference(sharedHours) ]
    const [ nextLeftOverNoteHour ] = [ ...nextHours.difference(sharedHours) ]
    return { currentLeftOverNoteHour, nextLeftOverNoteHour }
  }
  throw Error("Unrecognized transition between musical keys")
}
