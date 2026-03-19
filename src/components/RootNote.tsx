import { ArrowButton } from "src/components/ArrowButton";
import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/RootNote.module.css";


interface RootNoteProps {
  rootNoteName: string;
  buildChangeRoot: (isIncrement: boolean) => ((() => void) | undefined);
}

export function RootNote({
  rootNoteName,
  buildChangeRoot
}: RootNoteProps): JSX.Element {
  return (
    <>
      <div
        className={buildClassString(cssModule, ["root-note-label"])}
      >
        root note:
      </div>
      <div
        className={buildClassString(cssModule, ["root-note-content"])}
      >
        <ArrowButton
          isRight={false}
          onClick={buildChangeRoot(false)}
          dataTestid="decrement-root-note"
        />
        <div
          className={buildClassString(cssModule, ["root-note-text"])}
        >
          {rootNoteName}
        </div>
        <ArrowButton
          isRight={true}
          onClick={buildChangeRoot(true)}
          dataTestid="increment-root-note"
        />
      </div>
    </>
  );
}
