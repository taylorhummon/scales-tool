import { Note } from "src/classes/Note";
import { NaturalNote } from "src/enumerations";
import { buildClassString } from "src/utilities/css";
import { getModeName } from "src/utilities/scale";

import cssModule from "src/components/summary/KeyDescription.module.css";


interface KeyDescriptionProps {
  modeNote: NaturalNote;
  rootNote: Note;
}

export function KeyDescription({
  modeNote,
  rootNote,
}: KeyDescriptionProps): JSX.Element {
  const keyDescription = getKeyDescription(modeNote, rootNote);
  return (
    <>
      <div
        className={buildClassString(cssModule, ["key-description-label"])}
      >
        description:
      </div>
      <div
        className={buildClassString(cssModule, ["key-description-content"])}
      >
        {keyDescription}
      </div>
    </>
  );
}

function getKeyDescription(
  modeNote: NaturalNote,
  rootNote: Note
): JSX.Element {
  const className = buildClassString(cssModule, ["note-font"]);
  if (modeNote === NaturalNote.C) {
    return (
      <>
        <span className={className}>{rootNote.name}</span>-Major
      </>
    );
  }
  if (modeNote === NaturalNote.A) {
    return (
      <>
        <span className={className}>{rootNote.name}</span>-Minor
      </>
    );
  }
  return (
    <>
      The {getModeName(modeNote)} mode on <span className={className}>{rootNote.name}</span>
    </>
  );
}
