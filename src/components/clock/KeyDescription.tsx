import { Note } from "src/classes/Note";
import { NaturalNote } from "src/enumerations";
import { MusicalKey } from "src/classes/MusicalKey";
import { buildClassString } from "src/utilities/css";
import { getModeName } from "src/utilities/mode";

import cssModule from "src/components/clock/KeyDescription.module.css";


interface KeyDescriptionProps {
  musicalKey: MusicalKey;
}

export function KeyDescription({
  musicalKey
}: KeyDescriptionProps): JSX.Element {
  return (
    <>
      <text
        className={buildClassString(cssModule, ["key-description"])}
        textAnchor="middle"
      >
        <TextContent
          modeNote={musicalKey.modeNote}
          rootNote={musicalKey.rootNote}
        />
        {"\n"}
      </text>
      <text
        className={buildClassString(cssModule, ["degree-explanation"])}
        textAnchor="middle"
      >
        {getDegreeExplanation(musicalKey.degree)}
      </text>
    </>
  );
}

interface TextContentProps {
  modeNote: NaturalNote;
  rootNote: Note;
}

function TextContent({
  modeNote,
  rootNote
}: TextContentProps): JSX.Element {
  const noteFontClassName = buildClassString(cssModule, ["note-font"]);
  if (modeNote === NaturalNote.C) {
    return (
      <>
        <tspan className={noteFontClassName}>{rootNote.name}</tspan>-Major.
      </>
    );
  }
  if (modeNote === NaturalNote.A) {
    return (
      <>
        <tspan className={noteFontClassName}>{rootNote.name}</tspan>-Minor.
      </>
    );
  }
  return (
    <>
      The {getModeName(modeNote)} mode on <tspan className={noteFontClassName}>{rootNote.name}</tspan>.
    </>
  );
}

function getDegreeExplanation(
  degree: number,
): string {
  if (degree === 0)  return "No sharps or flats.";
  if (degree === 1)  return "One sharp.";
  if (degree === -1) return "One flat.";
  if (degree >= 2)   return `${WRITTEN_OUT_NUMBERS[degree]} sharps.`;
  if (degree <= -2)  return `${WRITTEN_OUT_NUMBERS[- degree]} flats.`;
  throw `Unexpected degree ${degree}`;
}

const WRITTEN_OUT_NUMBERS = [
  "Zero",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
  "Eleven",
  "Twelve",
  "Thirteen",
  "Fourteen",
];
