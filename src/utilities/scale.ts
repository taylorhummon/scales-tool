import { NaturalNoteName, Solfege, ModeName, Motion } from "src/enumerations";
import { Multiset } from "src/classes/Multiset";
import { Note } from "src/classes/Note";
import { buildIndicesArray } from "src/utilities/array";
import { remainderFor } from "src/utilities/math";


export const NATURAL_NOTES_IN_FCGDAEB_ORDER = [
  NaturalNoteName.F,
  NaturalNoteName.C,
  NaturalNoteName.G,
  NaturalNoteName.D,
  NaturalNoteName.A,
  NaturalNoteName.E,
  NaturalNoteName.B
];
export const NATURAL_NOTES_IN_BEADGCF_ORDER = [...NATURAL_NOTES_IN_FCGDAEB_ORDER].reverse();


export function getKeyDegree(
  root: number,
  mode: number
) {
  return root + mode;
}

export function getModeNoteName(
  mode: number
): NaturalNoteName {
  if (mode < -3 || mode > 3) throw Error(`Invalid mode (${mode})`);
  // mode number 0 corresponds to D
  return NATURAL_NOTES_IN_BEADGCF_ORDER[mode + 3];
}

export function getModeName(
  mode: number
): ModeName {
  if (mode < -3 || mode > 3) throw Error(`Invalid mode (${mode})`);
  // mode number 0 corresponds to Dorian
  return MODE_NAMES_IN_BEADGCF_ORDER[mode + 3];
}

const MODE_NAMES_IN_BEADGCF_ORDER = [
  ModeName.Locrian,
  ModeName.Phrygian,
  ModeName.Aeolian,
  ModeName.Dorian,
  ModeName.Mixolydian,
  ModeName.Ionian,
  ModeName.Lydian
];

export function getRootNote(
  notes: Array<Note>,
  mode: number
): Note {
  // 3 - mode describes how far the root is off-center on the slider
  return notes[3 - mode];
}

export function getNotes(
  root: number,
  mode: number
): Array<Note> {
  const keyDegree = getKeyDegree(root, mode);
  const firstNaturalNoteName = NATURAL_NOTES_IN_FCGDAEB_ORDER[remainderFor(keyDegree, 7)];
  const naturalNoteNames = getNaturalNoteNamesStartingWith(firstNaturalNoteName);
  if (keyDegree >= 0) {
    return getNotesWhenSharpsInvolved(naturalNoteNames, mode, keyDegree);
  } else {
    return getNotesWhenFlatsInvolved(naturalNoteNames, mode, - keyDegree);  // - keyDegree > 0
  }
}

function getNaturalNoteNamesStartingWith(
  naturalNoteName: NaturalNoteName
): Array<NaturalNoteName> {
  const fcgdaebfcgdaeb = NATURAL_NOTES_IN_FCGDAEB_ORDER.concat(NATURAL_NOTES_IN_FCGDAEB_ORDER);
  const i = fcgdaebfcgdaeb.indexOf(naturalNoteName);
  const j = fcgdaebfcgdaeb.lastIndexOf(naturalNoteName);
  return fcgdaebfcgdaeb.slice(i, j);
}

function getNotesWhenSharpsInvolved(
  naturalNoteNames: Array<NaturalNoteName>,
  mode: number,
  sharpTotal: number
): Array<Note> {
  const sharpsMultiset = new Multiset<NaturalNoteName>();
  const queue = [...NATURAL_NOTES_IN_FCGDAEB_ORDER];
  for (const _ of buildIndicesArray(sharpTotal)) {
    const toSharp = rotateQueue(queue);
    sharpsMultiset.add(toSharp);
  }
  const notes = [];
  for (const location of buildIndicesArray(7)) {
    const naturalNoteName = naturalNoteNames[location];
    const sharpsCount = sharpsMultiset.count(naturalNoteName);
    const note = new Note(naturalNoteName, sharpsCount, getSolfege(mode, location), location);
    notes.push(note);
  }
  return notes;
}

function getNotesWhenFlatsInvolved(
  naturalNoteNames: Array<NaturalNoteName>,
  mode: number,
  flatTotal: number
): Array<Note> {
  const flatsMultiset = new Multiset<NaturalNoteName>();
  const queue = [...NATURAL_NOTES_IN_BEADGCF_ORDER];
  for (const _ of buildIndicesArray(flatTotal)) {
    const toFlat = rotateQueue(queue);
    flatsMultiset.add(toFlat);
  }
  const notes = [];
  for (const location of buildIndicesArray(7)) {
    const naturalNoteName = naturalNoteNames[location];
    const flatsCount = flatsMultiset.count(naturalNoteName);
    const note = new Note(naturalNoteName, - flatsCount, getSolfege(mode, location), location);
    notes.push(note);
  }
  return notes;
}

export function getSolfege(
  mode: number,
  location: number
): Solfege {
  return SOLFEGES[remainderFor(location - (3 - mode), 7)];
}

const SOLFEGES = [
  Solfege.Do,
  Solfege.Sol,
  Solfege.Re,
  Solfege.La,
  Solfege.Mi,
  Solfege.Ti,
  Solfege.Fa,
];

// Warning: rotateQueue mutates queue and returns a value
function rotateQueue(
  queue: Array<NaturalNoteName>
): NaturalNoteName {
  const naturalNoteName = queue.shift();
  if (naturalNoteName === undefined) throw Error("Somehow queue was empty");
  queue.push(naturalNoteName);
  return naturalNoteName;
}

export function getDotMotionEndHour(
  motion: Motion,
  hour: number
): number | null {
  if (motion === Motion.IncrementRoot || motion === Motion.IncrementMode) {
    return remainderFor(hour + 7, 12);
  }
  if (motion === Motion.DecrementRoot || motion === Motion.DecrementMode) {
    return remainderFor(hour - 7, 12);
  }
  return null;
}
