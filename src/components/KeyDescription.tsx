import type { Note } from "src/types";

import { MODE_NAMES_IN_FCGDAEB_ORDER } from "src/enumerations";
import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/KeyDescription.module.css";


interface KeyDescriptionProps {
  modeNumber: number;
  rootNote: Note;
}

export default function KeyDescription({
  modeNumber,
  rootNote,
}: KeyDescriptionProps): JSX.Element {
  const keyDescription = getKeyDescription(modeNumber, rootNote);
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
  modeNumber: number,
  rootNote: Note
): JSX.Element {
  const className = buildClassString(cssModule, ["note-font"]);
  if (modeNumber === -2) {
    return (
      <>
        <span className={className}>{rootNote}</span>-Major
      </>
    );
  }
  if (modeNumber === 1) {
    return (
      <>
        <span className={className}>{rootNote}</span>-Minor
      </>
    );
  }
  const modeName = MODE_NAMES_IN_FCGDAEB_ORDER[modeNumber + 3];
  return (
    <>
      The {modeName} mode on <span className={className}>{rootNote}</span>
    </>
  );
}
