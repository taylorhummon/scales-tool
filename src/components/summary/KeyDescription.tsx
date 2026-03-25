import { buildClassString } from "src/utilities/css";
import { getModeName } from "src/utilities/scale";

import cssModule from "src/components/summary/KeyDescription.module.css";


interface KeyDescriptionProps {
  mode: number;
  rootNoteName: string;
}

export function KeyDescription({
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
  rootNoteName: string
): JSX.Element {
  const className = buildClassString(cssModule, ["note-font"]);
  if (mode === 2) {
    return (
      <>
        <span className={className}>{rootNoteName}</span>-Major
      </>
    );
  }
  if (mode === -1) {
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
