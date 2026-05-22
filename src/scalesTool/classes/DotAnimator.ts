import { type MusicalKey } from "@scalesTool/classes/MusicalKey"
import { AnimationOption, type ClockSettings, getHour } from "@scalesTool/utilities/clock"
import { getRemainder } from "@scalesTool/utilities/math"
import { Motion } from "@scalesTool/utilities/motion"
import { type NaturalNote } from "@scalesTool/utilities/naturalNote"
import { type SolfegeLetter } from "@scalesTool/utilities/solfege"


interface constructorParameters {
  clockSettings: ClockSettings,
  motion: Motion,
  currentMusicalKey: MusicalKey,
  nextMusicalKey: MusicalKey,
}

export class DotAnimator {
  #clockSettings: ClockSettings
  #motion: Motion
  #currentMusicalKey: MusicalKey
  #nextMusicalKey: MusicalKey
  #_leftOverNotes: LeftOverNotes | null | undefined

  constructor({
    clockSettings,
    motion,
    currentMusicalKey,
    nextMusicalKey,
  }: constructorParameters) {
    this.#clockSettings = clockSettings
    this.#motion = motion
    this.#currentMusicalKey = currentMusicalKey
    this.#nextMusicalKey = nextMusicalKey
  }

  getFinishHour(
    startHour: number,
    naturalNote: NaturalNote,
    solfegeLetter: SolfegeLetter,
  ): number {
    if (this.#motion === Motion.Still) {
      return startHour
    }
    const { animationOption } = this.#clockSettings
    if (animationOption === AnimationOption.Ballet) {
      return this.#notesBallet(startHour)
    }
    if (animationOption === AnimationOption.Minimal) {
      return this.#minimal(startHour)
    }
    if (animationOption === AnimationOption.FollowsOrdinaryLabel) {
      return this.#followsOrdinaryLabel(naturalNote)
    }
    if (animationOption === AnimationOption.FollowsSolfegeLabel) {
      return this.#followsSolfegeLabel(solfegeLetter)
    }
    throw Error(`Unknown animation option ${animationOption}`)
  }

  #notesBallet(
    startHour: number,
  ): number {
    if (this.#leftOverNotes === null) return startHour
    const { currentLeftOverNoteHour, nextLeftOverNoteHour } = this.#leftOverNotes
    return getRemainder(startHour + nextLeftOverNoteHour - currentLeftOverNoteHour + 6, 12)
  }

  #minimal(
    startHour: number,
  ): number {
    if (this.#leftOverNotes === null) return startHour
    const { currentLeftOverNoteHour, nextLeftOverNoteHour } = this.#leftOverNotes
    return startHour === currentLeftOverNoteHour ? nextLeftOverNoteHour : startHour
  }

  #followsOrdinaryLabel(
    naturalNote: NaturalNote,
  ): number {
    return getHour({
      clockSettings: this.#clockSettings,
      note: this.#nextMusicalKey.noteFromNaturalNote(naturalNote),
    })
  }

  #followsSolfegeLabel(
    solfegeLetter: SolfegeLetter,
  ): number {
    return getHour({
      clockSettings: this.#clockSettings,
      note: this.#nextMusicalKey.noteFromSolfegeLetter(solfegeLetter),
    })
  }

  get #leftOverNotes(
  ): LeftOverNotes | null {
    if (this.#_leftOverNotes === undefined) {
      this.#_leftOverNotes = getLeftOverNotes(this.#clockSettings, this.#currentMusicalKey, this.#nextMusicalKey)
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
  clockSettings: ClockSettings,
  currentMusicalKey: MusicalKey,
  nextMusicalKey: MusicalKey,
): LeftOverNotes | null {
  const currentHours = new Set(currentMusicalKey.notes.map(
    (note) => getHour({ clockSettings, note }))
  )
  const nextHours = new Set(nextMusicalKey.notes.map(
    (note) => getHour({ clockSettings, note })
  ))
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
