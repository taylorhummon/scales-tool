import { Note } from "src/classes/Note";
import { NaturalNote } from "src/enumerations";
import { MusicalKey } from "src/classes/MusicalKey";
import { buildClassString } from "src/utilities/css";
import { getModeName } from "src/utilities/mode";

import cssModule from "src/components/KeyDescription.module.css";


interface KeyDescriptionProps {
  musicalKey: MusicalKey;
}

export function KeyDescription({
  musicalKey
}: KeyDescriptionProps): JSX.Element {
  return (
    <text
      className={buildClassString(cssModule, ["key-description"])}
      textAnchor="middle"
    >
      <TextContent
        modeNote={musicalKey.modeNote}
        rootNote={musicalKey.rootNote}
      />
    </text>
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
        <tspan className={noteFontClassName}>{rootNote.name}</tspan>-Major
      </>
    );
  }
  if (modeNote === NaturalNote.A) {
    return (
      <>
        <tspan className={noteFontClassName}>{rootNote.name}</tspan>-Minor
      </>
    );
  }
  return (
    <>
      The {getModeName(modeNote)} mode on <tspan className={noteFontClassName}>{rootNote.name}</tspan>
    </>
  );
}
