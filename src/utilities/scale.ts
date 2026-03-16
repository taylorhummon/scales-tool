import { NaturalNote, SolfegeName, ModeName, Motion } from "src/enumerations";
import type { Note, LocatedNote } from "src/types";
import { buildIndicesArray } from "src/utilities/array";
import { remainderFor } from "src/utilities/math";
import { createMultiset, addToMultiset, getCountFromMultiset } from "src/utilities/multiset";


const SOLFEGE_NAMES = Object.values(SolfegeName);
const NATURAL_NOTES_IN_FCGDAEB_ORDER = [
  NaturalNote.F,
  NaturalNote.C,
  NaturalNote.G,
  NaturalNote.D,
  NaturalNote.A,
  NaturalNote.E,
  NaturalNote.B
]
const MODE_NAMES_IN_FCGDAEB_ORDER = [
  ModeName.Lydian,
  ModeName.Ionian,
  ModeName.Mixolydian,
  ModeName.Dorian,
  ModeName.Aeolian,
  ModeName.Phrygian,
  ModeName.Locrian
];


export function getKeyDegree(
  rootNumber: number,
  modeNumber: number
) {
  return rootNumber - modeNumber;
}

export function modeNoteFromModeNumber(
  modeNumber: number,
): NaturalNote {
  if (modeNumber < -3 || modeNumber > 3) throw Error(`Invalid modeNumber (${modeNumber})`);
  // mode number 0 corresponds to D
  return NATURAL_NOTES_IN_FCGDAEB_ORDER[modeNumber + 3];
}

export function modeNameFromModeNumber(
  modeNumber: number,
): ModeName {
  if (modeNumber < -3 || modeNumber > 3) throw Error(`Invalid modeNumber (${modeNumber})`);
  // mode number 0 corresponds to Dorian
  return MODE_NAMES_IN_FCGDAEB_ORDER[modeNumber + 3];
}

export function rootHourFromRootNumber(
  rootNumber: number
): number {
  return remainderFor(7 * rootNumber, 12);
}

export function getNoteBySolfegeName(
  rootNumber: number,
  modeNumber: number
): Map<SolfegeName, Note> {
  const notes = getNotes(rootNumber, modeNumber);
  const result = new Map();
  for (let i = 0; i < 7; i++) {
    result.set(SOLFEGE_NAMES[i], notes[i]);
  }
  return result;
}

function getNotes(
  rootNumber: number,
  modeNumber: number
): Array<Note> {
  const firstNaturalNote = NATURAL_NOTES_IN_FCGDAEB_ORDER[remainderFor(rootNumber + 3, 7)];
  const naturalNotes = getNaturalNotesStartingWith(firstNaturalNote);
  const keyDegree = getKeyDegree(rootNumber, modeNumber);
  if (keyDegree >= 0) {
    return getNotesWhenSharpsInvolved(naturalNotes, keyDegree);
  } else {
    return getNotesWhenFlatsInvolved(naturalNotes, - keyDegree);  // - keyDegree > 0
  }
}

function getNaturalNotesStartingWith(
  naturalNote: NaturalNote
): Array<NaturalNote> {
  const abcde = Object.values(NaturalNote);
  const abcdefgabcdefg = abcde.concat(abcde);
  const i = abcdefgabcdefg.indexOf(naturalNote);
  const j = abcdefgabcdefg.lastIndexOf(naturalNote);
  return abcdefgabcdefg.slice(i, j);
}

function getNotesWhenSharpsInvolved(
  naturalNotes: Array<NaturalNote>,
  sharpTotal: number
): Array<Note> {
  const sharpsMultiset = createMultiset(naturalNotes);
  const queue = [...NATURAL_NOTES_IN_FCGDAEB_ORDER]; // FCGDAEB
  for (let _ in buildIndicesArray(sharpTotal)) {
    const toSharp = rotateQueue(queue);
    addToMultiset(sharpsMultiset, toSharp);
  }
  return naturalNotes.map((naturalNote) => {
    const sharpCount = getCountFromMultiset(sharpsMultiset, naturalNote);
    return naturalNote + "♯".repeat(sharpCount);
  });
}

function getNotesWhenFlatsInvolved(
  naturalNotes: Array<NaturalNote>,
  flatTotal: number
): Array<Note> {
  const flatsMultiset = createMultiset(naturalNotes);
  const queue = [...NATURAL_NOTES_IN_FCGDAEB_ORDER].reverse(); // BEADGCF
  for (let _ in buildIndicesArray(flatTotal)) {
    const toFlat = rotateQueue(queue);
    addToMultiset(flatsMultiset, toFlat);
  }
  return naturalNotes.map((naturalNote) => {
    const flatCount = getCountFromMultiset(flatsMultiset, naturalNote);
    return naturalNote + "♭".repeat(flatCount);
  });
}

// Warning: rotateQueue mutates queue and returns a value
function rotateQueue(
  queue: Array<NaturalNote>
): NaturalNote {
  const naturalNote = queue.shift();
  if (naturalNote === undefined) throw Error("Somehow queue was empty");
  queue.push(naturalNote);
  return naturalNote;
}

export function getLocatedNotes(
  modeNumber: number,
  rootHour: number,
  noteBySolfegeName: Map<SolfegeName, Note>,
): Array<LocatedNote> {
  return SOLFEGE_NAMES.map((solfegeName: SolfegeName, solfegeIndex: number) => ({
    hour: getHour(modeNumber, solfegeIndex, rootHour),
    note: getNote(noteBySolfegeName, solfegeName),
    solfegeName: solfegeName
  }));
}

// This table gives the hour positions of solfege notes, assuming the root note occurs at hour 0.
const HOUR_TABLE = [
  [0, 2, 4, 6, 7, 9, 11],  // modeNumber = -3
  [0, 2, 4, 5, 7, 9, 11],
  [0, 2, 4, 5, 7, 9, 10],
  [0, 2, 3, 5, 7, 9, 10],  // modeNumber = 0
  [0, 2, 3, 5, 7, 8, 10],
  [0, 1, 3, 5, 7, 8, 10],
  [0, 1, 3, 5, 6, 8, 10],  // modeNumber = 3
];

function getHour(
  modeNumber: number,
  solfegeIndex: number,
  rootHour: number
): number {
  const modeIndex = modeNumber + 3;
  return (rootHour + HOUR_TABLE[modeIndex][solfegeIndex]) % 12;
}

function getNote(
  noteBySolfegeName: Map<SolfegeName, Note>,
  solfegeName: SolfegeName
): Note {
  const note = noteBySolfegeName.get(solfegeName);
  if (! note) throw Error(`Could not find note from ${solfegeName}!`);
  return note;
}

export function getRootNote(
  noteBySolfegeName: Map<SolfegeName, Note>
): Note {
  return getNote(noteBySolfegeName, SolfegeName.Do);
}

export function getMovingNoteEndHour(
  motion: Motion,
  hour: number
): number | null {
  if (motion === Motion.IncrementRoot || motion === Motion.DecrementMode) {
    return remainderFor(hour + 7, 12);
  }
  if (motion === Motion.DecrementRoot || motion === Motion.IncrementMode) {
    return remainderFor(hour - 7, 12);
  }
  return null;
}
