import {
  Location,
  NATURAL_NOTES_IN_FCGDAEB_ORDER,
  NaturalNote,
  SOLFEGE_NAMES_IN_FCGDAEB_ORDER,
  SolfegeName,
} from "src/enumerations";
import type { Derived, LocatedNote, Note } from "src/types";
import { buildMap } from "src/utilities/map";
import { getNoteBySolfegeName } from "src/utilities/music";


export function derivedFromState(
  rootNumber: number,
  modeNumber: number
): Derived {
  const noteBySolfegeName = getNoteBySolfegeName(modeNumber, rootNumber);
  const locatedNoteBySolfegeName = getLocatedNoteBySolfegeName(noteBySolfegeName, modeNumber);
  return {
    rootNumber,
    modeNumber,
    rootNote: getRootNote(noteBySolfegeName),
    modeNote: getModeNote(modeNumber),
    keyDegree: rootNumber - modeNumber,
    locatedNoteBySolfegeName,
    occupiedTickMarks: getOccupiedTickMarks(locatedNoteBySolfegeName),
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
  if (! note) throw "Oops. Could not find root note";
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
  if (! note) throw "Oops. Could not find note!";
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

function getOccupiedTickMarks(
  locatedNoteBySolfegeName: Map<SolfegeName, LocatedNote>
): Set<number> {
  const tickMarks: Set<number> = new Set();
  const doLocation = locatedNoteBySolfegeName.get(SolfegeName.Do)?.location;
  if (doLocation === Location.Only) tickMarks.add(0);
  const reLocation = locatedNoteBySolfegeName.get(SolfegeName.Re)?.location;
  if (reLocation === Location.Early) tickMarks.add(1);
  if (reLocation === Location.Late) tickMarks.add(2);
  const miLocation = locatedNoteBySolfegeName.get(SolfegeName.Mi)?.location;
  if (miLocation === Location.Early) tickMarks.add(3);
  if (miLocation === Location.Late) tickMarks.add(4);
  const faLocation = locatedNoteBySolfegeName.get(SolfegeName.Fa)?.location;
  if (faLocation === Location.Early) tickMarks.add(5);
  if (faLocation === Location.Late) tickMarks.add(6);
  const solLocation = locatedNoteBySolfegeName.get(SolfegeName.Sol)?.location;
  if (solLocation === Location.Early) tickMarks.add(6);
  if (solLocation === Location.Late) tickMarks.add(7);
  const laLocation = locatedNoteBySolfegeName.get(SolfegeName.La)?.location;
  if (laLocation === Location.Early) tickMarks.add(8);
  if (laLocation === Location.Late) tickMarks.add(9);
  const tiLocation = locatedNoteBySolfegeName.get(SolfegeName.Ti)?.location;
  if (tiLocation === Location.Early) tickMarks.add(10);
  if (tiLocation === Location.Late) tickMarks.add(11);
  return tickMarks;
}
