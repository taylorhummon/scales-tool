import { NaturalNoteName } from "src/enumerations";
import { ArrowButton } from "src/components/ArrowButton";
import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/ModeNote.module.css";


interface ModeNoteProps {
  modeNoteName: NaturalNoteName;
  buildChangeMode: (isIncrement: boolean) => ((() => void) | undefined);
}

export function ModeNote({
  modeNoteName,
  buildChangeMode
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
        <ArrowButton
          isRight={false}
          onClick={buildChangeMode(false)}
          dataTestid="decrement-mode-note"
        />
        <div
          className={buildClassString(cssModule, ["mode-note-text"])}
        >
          {modeNoteName}
        </div>
        <ArrowButton
          isRight={true}
          onClick={buildChangeMode(true)}
          dataTestid="increment-mode-note"
        />
      </div>
    </>
  );
}
