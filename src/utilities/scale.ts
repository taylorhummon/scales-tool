import { NaturalNoteName, Solfege, ModeName, Motion } from "src/enumerations";
import type { NoteName, Note } from "src/types";
import { Multiset } from "src/classes/multiset";
import { buildIndicesArray } from "src/utilities/array";
import { remainderFor } from "src/utilities/math";


const SOLFEGE_NAMES = Object.values(Solfege);
const NATURAL_NOTES_IN_FCGDAEB_ORDER = [
  NaturalNoteName.F,
  NaturalNoteName.C,
  NaturalNoteName.G,
  NaturalNoteName.D,
  NaturalNoteName.A,
  NaturalNoteName.E,
  NaturalNoteName.B
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
  root: number,
  mode: number
) {
  return root - mode;
}

export function getModeNoteName(
  mode: number
): NaturalNoteName {
  if (mode < -3 || mode > 3) throw Error(`Invalid mode (${mode})`);
  // mode number 0 corresponds to D
  return NATURAL_NOTES_IN_FCGDAEB_ORDER[mode + 3];
}

export function getModeName(
  mode: number
): ModeName {
  if (mode < -3 || mode > 3) throw Error(`Invalid mode (${mode})`);
  // mode number 0 corresponds to Dorian
  return MODE_NAMES_IN_FCGDAEB_ORDER[mode + 3];
}

export function getRootNoteHour(
  root: number
): number {
  return remainderFor(7 * root, 12);
}

export function getRootNoteName(
  root: number,
  mode: number
): NoteName {
  const noteNameBySolfege = getNoteNameBySolfege(root, mode);
  return getNoteName(noteNameBySolfege, Solfege.Do);
}

export function getNotes(
  root: number,
  mode: number
): Array<Note> {
  const noteNameBySolfege = getNoteNameBySolfege(root, mode);
  const rootNoteHour = getRootNoteHour(root);
  return SOLFEGE_NAMES.map((solfege: Solfege, solfegeIndex: number) => ({
    name: getNoteName(noteNameBySolfege, solfege),
    hour: getNoteHour(mode, solfegeIndex, rootNoteHour),
    solfege: solfege
  }));
}

function getNoteNameBySolfege(
  root: number,
  mode: number
): Map<Solfege, NoteName> {
  const noteNames = getNoteNames(root, mode);
  const noteNameBySolfege = new Map();
  for (let i in buildIndicesArray(7)) {
    noteNameBySolfege.set(SOLFEGE_NAMES[i], noteNames[i]);
  }
  return noteNameBySolfege;
}

function getNoteNames(
  root: number,
  mode: number
): Array<NoteName> {
  const firstNaturalNoteName = NATURAL_NOTES_IN_FCGDAEB_ORDER[remainderFor(root + 3, 7)];
  const naturalNoteNames = getNaturalNoteNamesStartingWith(firstNaturalNoteName);
  const keyDegree = getKeyDegree(root, mode);
  if (keyDegree >= 0) {
    return getNoteNamesWhenSharpsInvolved(naturalNoteNames, keyDegree);
  } else {
    return getNoteNamesWhenFlatsInvolved(naturalNoteNames, - keyDegree);  // - keyDegree > 0
  }
}

function getNaturalNoteNamesStartingWith(
  naturalNoteName: NaturalNoteName
): Array<NaturalNoteName> {
  const abcde = Object.values(NaturalNoteName);
  const abcdefgabcdefg = abcde.concat(abcde);
  const i = abcdefgabcdefg.indexOf(naturalNoteName);
  const j = abcdefgabcdefg.lastIndexOf(naturalNoteName);
  return abcdefgabcdefg.slice(i, j);
}

function getNoteNamesWhenSharpsInvolved(
  naturalNoteNames: Array<NaturalNoteName>,
  sharpTotal: number
): Array<NoteName> {
  const sharpsMultiset = new Multiset<NaturalNoteName>();
  const queue = [...NATURAL_NOTES_IN_FCGDAEB_ORDER]; // FCGDAEB
  for (let _ in buildIndicesArray(sharpTotal)) {
    const toSharp = rotateQueue(queue);
    sharpsMultiset.add(toSharp);
  }
  return naturalNoteNames.map((naturalNoteName) => {
    const sharpCount = sharpsMultiset.count(naturalNoteName);
    return naturalNoteName + "♯".repeat(sharpCount);
  });
}

function getNoteNamesWhenFlatsInvolved(
  naturalNoteNames: Array<NaturalNoteName>,
  flatTotal: number
): Array<NoteName> {
  const flatsMultiset = new Multiset<NaturalNoteName>();
  const queue = [...NATURAL_NOTES_IN_FCGDAEB_ORDER].reverse(); // BEADGCF
  for (let _ in buildIndicesArray(flatTotal)) {
    const toFlat = rotateQueue(queue);
    flatsMultiset.add(toFlat);
  }
  return naturalNoteNames.map((naturalNoteName) => {
    const flatCount = flatsMultiset.count(naturalNoteName);
    return naturalNoteName + "♭".repeat(flatCount);
  });
}

// Warning: rotateQueue mutates queue and returns a value
function rotateQueue(
  queue: Array<NaturalNoteName>
): NaturalNoteName {
  const naturalNoteName = queue.shift();
  if (naturalNoteName === undefined) throw Error("Somehow queue was empty");
  queue.push(naturalNoteName);
  return naturalNoteName;
}

// This table gives the hour positions of solfege notes, assuming the root note occurs at hour 0.
const HOUR_TABLE = [
  [0, 2, 4, 6, 7, 9, 11],  // mode = -3
  [0, 2, 4, 5, 7, 9, 11],
  [0, 2, 4, 5, 7, 9, 10],
  [0, 2, 3, 5, 7, 9, 10],  // mode = 0
  [0, 2, 3, 5, 7, 8, 10],
  [0, 1, 3, 5, 7, 8, 10],
  [0, 1, 3, 5, 6, 8, 10],  // mode = 3
];

function getNoteHour(
  mode: number,
  solfegeIndex: number,
  rootHour: number
): number {
  const modeIndex = mode + 3;
  return (rootHour + HOUR_TABLE[modeIndex][solfegeIndex]) % 12;
}

function getNoteName(
  noteNameBySolfege: Map<Solfege, NoteName>,
  solfege: Solfege
): NoteName {
  const noteName = noteNameBySolfege.get(solfege);
  if (! noteName) throw Error(`Could not find note from ${solfege}!`);
  return noteName;
}

export function getDotMotionEndHour(
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
