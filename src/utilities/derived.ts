import type { Derived, LocatedNote, Note } from "src/types";

import {
  Location,
  NATURAL_NOTES_IN_FCGDAEB_ORDER,
  NaturalNote,
  SOLFEGE_NAMES_IN_FCGDAEB_ORDER,
  SolfegeName,
} from "src/enumerations";
import { buildMap } from "src/utilities/map";
import { getNoteBySolfegeName } from "src/utilities/music";


export function derivedFromState(
  rootNumber: number,
  modeNumber: number
): Derived {
  const noteBySolfegeName = getNoteBySolfegeName(modeNumber, rootNumber);
  return {
    rootNumber,
    modeNumber,
    rootNote: getRootNote(noteBySolfegeName),
    modeNote: getModeNote(modeNumber),
    keyDegree: rootNumber - modeNumber,
    locatedNoteBySolfegeName: getLocatedNoteBySolfegeName(noteBySolfegeName, modeNumber),
  };
}

function getModeNote(
  modeNumber: number
): NaturalNote {
  return NATURAL_NOTES_IN_FCGDAEB_ORDER[modeNumber + 3];
}

function getRootNote(
  noteBySolfegeName: Map<SolfegeName, Note>
): Note {
  const note = noteBySolfegeName.get(SolfegeName.Do);
  if (! note) throw 'Oops. Could not find root note';
  return note;
}

function getLocatedNoteBySolfegeName(
  noteBySolfegeName: Map<SolfegeName, Note>,
  modeNumber: number
): Map<SolfegeName, LocatedNote> {
  return buildMap(SOLFEGE_NAMES_IN_FCGDAEB_ORDER, ((solfegeName: SolfegeName) => ({
    note: getNote(noteBySolfegeName, solfegeName),
    location: getLocation(solfegeName, modeNumber),
  })));
}

function getNote(
  noteBySolfegeName: Map<SolfegeName, Note>,
  solfegeName: SolfegeName
): Note {
  const note = noteBySolfegeName.get(solfegeName);
  if (! note) throw 'Oops. Could not find note!';
  return note;
}

function getLocation(
  solfegeName: SolfegeName,
  modeNumber: number
): Location {
  if (solfegeName === SolfegeName.Do) return Location.Only;
  const index = SOLFEGE_NAMES_IN_FCGDAEB_ORDER.indexOf(solfegeName);
  if (index === -1) throw new Error(`invalid solfege note: ${solfegeName}`);
  return (modeNumber > index - 3) ? Location.Early : Location.Late;
}
