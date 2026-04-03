import type { Note } from "@/classes/Note";
import type { LabelAnimation } from "@/classes/LabelAnimation";
import { buildClassString } from "@/utilities/css";

import cssModule from "@/components/clock/NoteLabelText.module.css";


interface NoteLabelTextProps {
  note: Note;
  labelAnimation: LabelAnimation | null;
}

export function NoteLabelText({
  note,
  labelAnimation
}: NoteLabelTextProps): JSX.Element {
  if (labelAnimation === null || ! labelAnimation.isNoteAnimated(note)) {
    return (
      <text>
        {note.name}
      </text>
    );
  }
  const noteToDisplay = labelAnimation.noteWithLongerName;
  if (noteToDisplay.sharpsCount > 0) {
    const opaqueSharpsCount = noteToDisplay.sharpsCount - 1;
    return (
      <text>
        {note.naturalNote}
        {"♯".repeat(opaqueSharpsCount)}
        <tspan
          className={getClassName(labelAnimation)}
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
        <tspan className={getClassName(labelAnimation)}>
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
  labelAnimation: LabelAnimation
): string {
  const classNames = [];
  if (labelAnimation.isAddingCharacter) {
    classNames.push("appear");
  } else {
    classNames.push("disappear");
  }
  return buildClassString(cssModule, classNames);
}
