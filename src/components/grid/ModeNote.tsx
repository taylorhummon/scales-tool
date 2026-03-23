import { NaturalNoteName } from "src/enumerations";
import { Button } from "src/components/grid/Button";
import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/grid/ModeNote.module.css";


interface ModeNoteProps {
  modeNoteName: NaturalNoteName;
  buildChangeMode: (isIncrement: boolean) => ((() => void) | undefined);
  isWaiting: boolean;
}

export function ModeNote({
  modeNoteName,
  buildChangeMode,
  isWaiting
}: ModeNoteProps): JSX.Element {
  return (
    <>
      <div
        className={buildClassString(cssModule, ["mode-note-label"])}
      >
        mode note:
      </div>
      <div
        className={buildClassString(cssModule, ["mode-note-content"])}
      >
        <Button
          isPlus={false}
          onClick={buildChangeMode(false)}
          isWaiting={isWaiting}
          dataTestid="decrement-mode-note"
        />
        <div
          className={buildClassString(cssModule, ["mode-note-text"])}
        >
          {modeNoteName}
        </div>
        <Button
          isPlus={true}
          onClick={buildChangeMode(true)}
          isWaiting={isWaiting}
          dataTestid="increment-mode-note"
        />
      </div>
    </>
  );
}
