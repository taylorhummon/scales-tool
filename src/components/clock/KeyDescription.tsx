import type { MusicalKey } from "@/classes/MusicalKey";
import { buildClassString } from "@/utilities/css";

import cssModule from "@/components/clock/KeyDescription.module.css";


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
          musicalKey={musicalKey}
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
  musicalKey: MusicalKey;
}

function TextContent({
  musicalKey
}: TextContentProps): JSX.Element {
  const noteFontClassName = buildClassString(cssModule, ["note-font"]);
  const rootNoteName = musicalKey.rootNote.name;
  if (musicalKey.mode === 2) {
    return (
      <>
        <tspan className={noteFontClassName}>{rootNoteName}</tspan>-Major.
      </>
    );
  }
  if (musicalKey.mode === -1) {
    return (
      <>
        <tspan className={noteFontClassName}>{rootNoteName}</tspan>-Minor.
      </>
    );
  }
  return (
    <>
      The {musicalKey.modeName} mode on <tspan className={noteFontClassName}>{rootNoteName}</tspan>.
    </>
  );
}

function getDegreeExplanation(
  degree: number,
): string {
  if (degree === 0)  return "No sharps or flats.";
  if (degree === 1)  return "One sharp.";
  if (degree === -1) return "One flat.";
  if (degree >= 2)   return `${getWrittenOutNumber(degree)} sharps.`;
  if (degree <= -2)  return `${getWrittenOutNumber(- degree)} flats.`;
  throw `Unexpected degree ${degree}`;
}

function getWrittenOutNumber(
  n: number
): string {
  if (n >= WRITTEN_OUT_NUMBERS.length) return "Many";
  return WRITTEN_OUT_NUMBERS[n];
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
