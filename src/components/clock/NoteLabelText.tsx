import type { Note } from "@/classes/Note";
import type { NoteLabelAnimator } from "@/classes/NoteLabelAnimator";
import { buildClassString } from "@/utilities/css";

import cssModule from "@/components/clock/NoteLabelText.module.scss";


interface NoteLabelTextProps {
  note: Note;
  noteLabelAnimator: NoteLabelAnimator | null;
}

export function NoteLabelText({
  note,
  noteLabelAnimator
}: NoteLabelTextProps): JSX.Element {
  if (noteLabelAnimator === null || ! noteLabelAnimator.willAnimate(note)) {
    return (
      <text>
        {note.name}
      </text>
    );
  }
  const noteToDisplay = noteLabelAnimator.noteWithLongerName;
  if (noteToDisplay.sharpsCount > 0) {
    const opaqueSharpsCount = noteToDisplay.sharpsCount - 1;
    return (
      <text>
        {note.naturalNote}
        {"♯".repeat(opaqueSharpsCount)}
        <tspan
          className={getClassName(noteLabelAnimator)}
        >
          ♯
        </tspan>
      </text>
    );
  }
  if (noteToDisplay.sharpsCount < 0) {
    const opaqueFlatsCount = (- noteToDisplay.sharpsCount) - 1;
    return (
      <text>
        {note.naturalNote}
        {"♭".repeat(opaqueFlatsCount)}
        <tspan className={getClassName(noteLabelAnimator)}>
          ♭
        </tspan>
      </text>
    );
  }
  return (
    <text>
      {note.name}
    </text>
  );
}

function getClassName(
  noteLabelAnimator: NoteLabelAnimator
): string {
  const classNames = [];
  if (noteLabelAnimator.isAddingCharacter) {
    classNames.push("appear");
  } else {
    classNames.push("disappear");
  }
  return buildClassString(cssModule, classNames);
}
