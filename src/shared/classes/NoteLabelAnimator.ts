import { type MusicalKey } from "@shared/classes/MusicalKey"
import { Note } from "@shared/classes/Note"
import { type NaturalNote } from "@shared/utilities/naturalNote"


interface constructorInput {
  musicalKey: MusicalKey,
  nextMusicalKey: MusicalKey,
}

export class NoteLabelAnimator {
  #startNoteByNaturalNote: Map<NaturalNote, Note>
  #finishNoteByNaturalNote: Map<NaturalNote, Note>

  constructor({
    musicalKey,
    nextMusicalKey,
  }: constructorInput) {
    this.#startNoteByNaturalNote = musicalKey.noteByNaturalNote
    this.#finishNoteByNaturalNote = nextMusicalKey.noteByNaturalNote
  }

  startNote(
    naturalNote: NaturalNote,
  ): Note {
    const startNote = this.#startNoteByNaturalNote.get(naturalNote)
    if (startNote === undefined) throw `Could not find note for ${naturalNote}`
    return startNote
  }

  finishNote(
    naturalNote: NaturalNote,
  ): Note {
    const finishNote = this.#finishNoteByNaturalNote.get(naturalNote)
    if (finishNote === undefined) throw `Could not find note for ${naturalNote}`
    return finishNote
  }
}
