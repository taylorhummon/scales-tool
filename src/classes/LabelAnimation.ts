import type { Motion } from "@/enumerations";
import type { MusicalKey } from "@/classes/MusicalKey";
import  { Note } from "@/classes/Note";
import { willDecrementDegree, willIncrementDegree } from "@/utilities/motion";


export function buildLabelAnimation(
  musicalKey: MusicalKey,
  motion: Motion
): LabelAnimation | null {
  if (willDecrementDegree(motion) || willIncrementDegree(motion)) {
    return new LabelAnimation(musicalKey, motion);
  }
  return null;
}


export class LabelAnimation {
  startNote: Note;
  finishNote: Note;
  isIncrement: boolean;
  isAddingCharacter: boolean;
  noteWithLongerName: Note;

  constructor(
    musicalKey: MusicalKey,
    motion: Motion
  ) {
    const isIncrement = getIsIncrement(motion);
    this.startNote = getStartNote(musicalKey, isIncrement);
    this.finishNote = getFinishNote(isIncrement, this.startNote);
    this.isIncrement = isIncrement;
    this.isAddingCharacter = getIsAddingCharacter(musicalKey, isIncrement);
    this.noteWithLongerName = getNoteWithLongerName(this.isAddingCharacter, this.startNote, this.finishNote);
  }

  isNoteAnimated(
    note: Note
  ): boolean {
    return this.startNote.hour === note.hour;
  }
}

// *** Private functions below this line ***

function getStartNote(
  musicalKey: MusicalKey,
  isIncrement: boolean
): Note {
  const position = isIncrement ? 3 : -3;
  return musicalKey.noteAt(position);
}

function getFinishNote(
  isIncrement: boolean,
  startNote: Note
): Note {
  if (isIncrement) {
    return new Note(startNote.naturalNote, startNote.sharpsCount + 1, startNote.solfege, -3);
  } else {
    return new Note(startNote.naturalNote, startNote.sharpsCount - 1, startNote.solfege, 3);
  }
}

function getIsIncrement(
  motion: Motion
): boolean {
  if (willDecrementDegree(motion)) return false;
  if (willIncrementDegree(motion)) return true;
  throw Error("LabelAnimation requires incrementing or decrementing key degree");
}

function getIsAddingCharacter(
  musicalKey: MusicalKey,
  isIncrement: boolean
): boolean {
  if (isIncrement && musicalKey.degree < 0) {
    return false;
  }
  if (! isIncrement && musicalKey.degree > 0) {
    return false;
  }
  return true;
}

function getNoteWithLongerName(
  isAddingCharacter: boolean,
  startNote: Note,
  finishNote: Note
): Note {
  return isAddingCharacter ? finishNote : startNote;
}
