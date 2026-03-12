import type { Note } from "src/types";
import { buildClassString } from "src/utilities/css";
import { modeNameFromModeNumber } from "src/utilities/music";

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
        <div
          className={buildClassString(cssModule, ["key-description-text"])}
        >
          {keyDescription}
        </div>
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
  const modeName = modeNameFromModeNumber(modeNumber);
  return (
    <>
      The {modeName} mode on <span className={className}>{rootNote}</span>
    </>
  );
}
