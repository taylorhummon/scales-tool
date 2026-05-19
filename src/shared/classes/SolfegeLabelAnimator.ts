import { type MusicalKey } from "@shared/classes/MusicalKey"
import { Note } from "@shared/classes/Note"
import { type SolfegeLetter } from "@shared/utilities/solfege"


interface constructorInput {
  musicalKey: MusicalKey,
  nextMusicalKey: MusicalKey,
}

export class SolfegeLabelAnimator {
  #startNoteBySolfegeLetter: Map<SolfegeLetter, Note>
  #finishNoteBySolfegeLetter: Map<SolfegeLetter, Note>

  constructor({
    musicalKey,
    nextMusicalKey,
  }: constructorInput) {
    this.#startNoteBySolfegeLetter = musicalKey.noteBySolfegeLetter
    this.#finishNoteBySolfegeLetter = nextMusicalKey.noteBySolfegeLetter
  }

  startNote(
    solfegeLetter: SolfegeLetter,
  ): Note {
    const startNote = this.#startNoteBySolfegeLetter.get(solfegeLetter)
    if (startNote === undefined) throw Error(`Missing note for: ${solfegeLetter}`)
    return startNote
  }

  finishNote(
    solfegeLetter: SolfegeLetter,
  ): Note {
    const finishNote = this.#finishNoteBySolfegeLetter.get(solfegeLetter)
    if (finishNote === undefined) throw Error(`Missing note for: ${solfegeLetter}`)
    return finishNote
  }
}
