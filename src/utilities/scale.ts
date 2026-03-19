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
const SOLFEGE_NAMES = Object.values(Solfege);
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

export function getNoteBySolfege(
  root: number,
  mode: number
): Map<Solfege, Note> {
  const notes = getNotes(root, mode);
  const noteBySolfege = new Map();
  for (let i in buildIndicesArray(7)) {
    noteBySolfege.set(SOLFEGE_NAMES[i], notes[i]);
  }
  return noteBySolfege;
}

function getNotes(
  root: number,
  mode: number
): Array<Note> {
  const firstNaturalNoteName = NATURAL_NOTES_IN_FCGDAEB_ORDER[remainderFor(root + 3, 7)];
  const naturalNoteNames = getNaturalNoteNamesStartingWith(firstNaturalNoteName);
  const keyDegree = getKeyDegree(root, mode);
  if (keyDegree >= 0) {
    return getNotesWhenSharpsInvolved(naturalNoteNames, keyDegree);
  } else {
    return getNotesWhenFlatsInvolved(naturalNoteNames, - keyDegree);  // - keyDegree > 0
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

function getNotesWhenSharpsInvolved(
  naturalNoteNames: Array<NaturalNoteName>,
  sharpTotal: number
): Array<Note> {
  const sharpsMultiset = new Multiset<NaturalNoteName>();
  const queue = [...NATURAL_NOTES_IN_FCGDAEB_ORDER];
  for (let _ in buildIndicesArray(sharpTotal)) {
    const toSharp = rotateQueue(queue);
    sharpsMultiset.add(toSharp);
  }
  return naturalNoteNames.map((naturalNoteName) => {
    const sharpsCount = sharpsMultiset.count(naturalNoteName);
    return new Note(naturalNoteName, sharpsCount);
  });
}

function getNotesWhenFlatsInvolved(
  naturalNoteNames: Array<NaturalNoteName>,
  flatTotal: number
): Array<Note> {
  const flatsMultiset = new Multiset<NaturalNoteName>();
  const queue = [...NATURAL_NOTES_IN_BEADGCF_ORDER];
  for (let _ in buildIndicesArray(flatTotal)) {
    const toFlat = rotateQueue(queue);
    flatsMultiset.add(toFlat);
  }
  return naturalNoteNames.map((naturalNoteName) => {
    const flatsCount = flatsMultiset.count(naturalNoteName);
    return new Note(naturalNoteName, - flatsCount);
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
