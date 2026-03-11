import {
  NATURAL_NOTES_IN_FCGDAEB_ORDER,
  NaturalNote,
  SolfegeName,
} from "src/enumerations";
import type { Note } from "src/types";
import { remainderFor } from "src/utilities/math";


export function getNoteBySolfegeName(
  modeNumber: number,
  rootNumber: number
): Map<SolfegeName, Note> {
  const notes = getNotes(modeNumber, rootNumber);
  const result = new Map();
  for (let i = 0; i < 7; i++) {
    result.set(SOLFEGE_NAMES[i], notes[i]);
  }
  return result;
}

const SOLFEGE_NAMES = Object.values(SolfegeName);

function getNotes(
  modeNumber: number,
  rootNumber: number
): Array<Note> {
  const rootNote = NATURAL_NOTES_IN_FCGDAEB_ORDER[remainderFor(rootNumber + 3, 7)];
  const naturalNotes = getNaturalNotesStartingWith(rootNote);
  const degree = rootNumber - modeNumber;
  if (degree >= 0) {
    return getNotesWhenSharpsInvolved(naturalNotes, degree);
  } else {
    return getNotesWhenFlatsInvolved(naturalNotes, - degree);  // - degree > 0
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
