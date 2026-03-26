import { Note } from "src/classes/Note";
import { NaturalNote } from "src/enumerations";
import { buildClassString } from "src/utilities/css";
import { getModeName } from "src/utilities/scale";

import cssModule from "src/components/Key.module.css";


interface KeyProps {
  modeNote: NaturalNote;
  rootNote: Note;
}

export function Key({
  modeNote,
  rootNote
}: KeyProps): JSX.Element {
  return (
    <text
      className={buildClassString(cssModule, ["key"])}
      textAnchor="middle"
    >
      <KeyTextContent
        modeNote={modeNote}
        rootNote={rootNote}
      />
    </text>
  );
}

interface KeyTextContentProps {
  modeNote: NaturalNote;
  rootNote: Note;
}

function KeyTextContent({
  modeNote,
  rootNote
}: KeyTextContentProps): JSX.Element {
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
