import { NaturalNote, SolfegeName, ModeName, Motion } from "src/enumerations";
import type { Note, LocatedNote } from "src/types";
import { remainderFor } from "src/utilities/math";


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
  if (modeNumber < -3 || modeNumber > 3) throw `Invalid modeNumber (${modeNumber})`;
  // mode number 0 corresponds to D
  return NATURAL_NOTES_IN_FCGDAEB_ORDER[modeNumber + 3];
}

export function modeNameFromModeNumber(
  modeNumber: number,
): ModeName {
  if (modeNumber < -3 || modeNumber > 3) throw `Invalid modeNumber (${modeNumber})`;
  // mode number 0 corresponds to Dorian
  return MODE_NAMES_IN_FCGDAEB_ORDER[modeNumber + 3];
}

export function rootHourFromRootNumber(
  rootNumber: number
): number {
  return remainderFor(rootNumber * 7, 12);
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
  const sharpsMultiset = new Map();
  for (const naturalNote of naturalNotes) {
    sharpsMultiset.set(naturalNote, 0);
  }
  const queue = [...NATURAL_NOTES_IN_FCGDAEB_ORDER]; // FCGDAEB
  for (let i = 0; i < sharpTotal; i += 1) {
    const toSharp = queue.shift();
    if (toSharp === undefined) throw "Ooops"; // This should never be tripped -- it's here for type check
    queue.push(toSharp);
    const sharpCount = sharpsMultiset.get(toSharp);
    sharpsMultiset.set(toSharp, sharpCount + 1);
  }
  return naturalNotes.map((naturalNote) => addSharps(sharpsMultiset, naturalNote));
}

function getNotesWhenFlatsInvolved(
  naturalNotes: Array<NaturalNote>,
  flatTotal: number
): Array<Note> {
  const flatsMultiset = new Map();
  for (const naturalNote of naturalNotes) {
    flatsMultiset.set(naturalNote, 0);
  }
  const queue = [...NATURAL_NOTES_IN_FCGDAEB_ORDER].reverse(); // BEADGCF
  for (let i = 0; i < flatTotal; i += 1) {
    const toFlat = queue.shift();
    if (toFlat === undefined) throw "Ooops"; // This should never be tripped -- it's here for type check
    queue.push(toFlat);
    const flatCount = flatsMultiset.get(toFlat);
    flatsMultiset.set(toFlat, flatCount + 1);
  }
  return naturalNotes.map((naturalNote) => addFlats(flatsMultiset, naturalNote));
}

function addSharps(
  sharpsMultiset: Map<Note, number>,
  naturalNote: NaturalNote
): Note {
  const sharpCount = sharpsMultiset.get(naturalNote);
  if (sharpCount === undefined) throw "Ooops"; // This should never be tripped -- it's here for type check
  return naturalNote + "♯".repeat(sharpCount);
}

function addFlats(
  flatsMultiset: Map<Note, number>,
  naturalNote: NaturalNote
): Note {
  const flatCount = flatsMultiset.get(naturalNote);
  if (flatCount === undefined) throw "Ooops"; // This should never be tripped -- it's here for type check
  return naturalNote + "♭".repeat(flatCount);
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
  if (! note) throw "Oops. Could not find note!";
  return note;
}

export function getRootNote(
  noteBySolfegeName: Map<SolfegeName, Note>
): Note {
  const note = noteBySolfegeName.get(SolfegeName.Do);
  if (! note) throw "Oops. Could not find root note";
  return note;
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
