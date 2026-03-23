import { Button } from "src/components/grid/Button";
import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/grid/RootNote.module.css";


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
        <Button
          isPlus={false}
          onClick={buildChangeRoot(false)}
          dataTestid="decrement-root-note"
        />
        <div
          className={buildClassString(cssModule, ["root-note-text"])}
        >
          {rootNoteName}
        </div>
        <Button
          isPlus={true}
          onClick={buildChangeRoot(true)}
          dataTestid="increment-root-note"
        />
      </div>
    </>
  );
}
