import type { MusicalKey } from "@/classes/MusicalKey";
import  { Note } from "@/classes/Note";
import type { Motion } from "@/utilities/motion";
import { getWillIncrementDegree, getWillDecrementDegree } from "@/utilities/motion";


export function buildNoteLabelAnimator(
  musicalKey: MusicalKey,
  motion: Motion
): NoteLabelAnimator | null {
  if (getWillIncrementDegree(motion) || getWillDecrementDegree(motion)) {
    return new NoteLabelAnimator(musicalKey, motion);
  }
  return null;
}


export class NoteLabelAnimator {
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
    this.finishNote = getFinishNote(this.startNote, isIncrement);
    this.isIncrement = isIncrement;
    this.isAddingCharacter = getIsAddingCharacter(musicalKey, isIncrement);
    this.noteWithLongerName = getNoteWithLongerName(this.isAddingCharacter, this.startNote, this.finishNote);
  }

  willAnimate(
    note: Note
  ): boolean {
    return note.hour === this.startNote.hour;
  }
}

// *** Private functions below this line ***

function getStartNote(
  musicalKey: MusicalKey,
  isIncrement: boolean
): Note {
  if (isIncrement) {
    return musicalKey.noteInTopPosition;
  } else {
    return musicalKey.noteInBottomPosition;
  }
}

function getFinishNote(
  startNote: Note,
  isIncrement: boolean
): Note {
  if (isIncrement) {
    return new Note(startNote.naturalNote, startNote.sharpsCount + 1, startNote.position + 7);
  } else {
    return new Note(startNote.naturalNote, startNote.sharpsCount - 1, startNote.position - 7);
  }
}

function getIsIncrement(
  motion: Motion
): boolean {
  if (getWillIncrementDegree(motion)) return true;
  if (getWillDecrementDegree(motion)) return false;
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
