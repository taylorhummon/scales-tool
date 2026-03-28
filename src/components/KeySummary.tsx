import { MusicalKey } from "src/classes/MusicalKey";
import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/KeySummary.module.css";


interface KeySummaryProps {
  musicalKey: MusicalKey;
  isEnabled: boolean;
}

export function KeySummary({
  musicalKey,
  isEnabled
}: KeySummaryProps): JSX.Element | null {
  if (! isEnabled) return null;
  return (
    <div
      className={buildClassString(cssModule, ["key-summary"])}
    >
      <div
        className={buildClassString(cssModule, ["root-note", "label"])}
      >
        root note:
      </div>
      <div
        className={buildClassString(cssModule, ["root-note", "content"])}
      >
        {musicalKey.rootNote.name}
      </div>
      <div
        className={buildClassString(cssModule, ["mode-note", "label"])}
      >
        mode note:
      </div>
      <div
        className={buildClassString(cssModule, ["mode-note", "content"])}
      >
        {musicalKey.modeNote}
      </div>
      <div
        className={buildClassString(cssModule, ["key-degree", "label"])}
      >
        degree:
      </div>
      <div
        className={buildClassString(cssModule, ["key-degree", "content"])}
      >
        {musicalKey.degree}
      </div>
    </div>
  );
}
