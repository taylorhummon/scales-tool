import { NaturalNote } from "src/enumerations";
import ArrowButton from "src/components/ArrowButton";
import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/ModeNote.module.css";


interface ModeNoteProps {
  modeNote: NaturalNote;
  buildChangeMode: (isIncrement: boolean) => ((() => void) | undefined);
}

export default function ModeNote({
  modeNote,
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
          {modeNote}
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
