import { Button } from "src/components/grid/Button";
import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/grid/RootNote.module.css";


interface RootNoteProps {
  rootNoteName: string;
  buildChangeRoot: (isIncrement: boolean) => ((() => void) | undefined);
  isWaiting: boolean;
}

export function RootNote({
  rootNoteName,
  buildChangeRoot,
  isWaiting
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
          isWaiting={isWaiting}
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
          isWaiting={isWaiting}
          dataTestid="increment-root-note"
        />
      </div>
    </>
  );
}
