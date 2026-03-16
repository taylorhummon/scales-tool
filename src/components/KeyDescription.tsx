import type { NoteName } from "src/types";
import { buildClassString } from "src/utilities/css";
import { getModeName } from "src/utilities/scale";

import cssModule from "src/components/KeyDescription.module.css";


interface KeyDescriptionProps {
  mode: number;
  rootNoteName: NoteName;
}

export default function KeyDescription({
  mode,
  rootNoteName,
}: KeyDescriptionProps): JSX.Element {
  const keyDescription = getKeyDescription(mode, rootNoteName);
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
  mode: number,
  rootNoteName: NoteName
): JSX.Element {
  const className = buildClassString(cssModule, ["note-font"]);
  if (mode === -2) {
    return (
      <>
        <span className={className}>{rootNoteName}</span>-Major
      </>
    );
  }
  if (mode === 1) {
    return (
      <>
        <span className={className}>{rootNoteName}</span>-Minor
      </>
    );
  }
  return (
    <>
      The {getModeName(mode)} mode on <span className={className}>{rootNoteName}</span>
    </>
  );
}
