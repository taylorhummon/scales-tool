import type { Note } from "src/classes/Note";
import type { LabelAnimation } from "src/classes/LabelAnimation";
import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/clock/NoteLabel.module.css";


export function isNoteAnimated(
  labelAnimation: LabelAnimation,
  note: Note
): boolean {
  return labelAnimation.startNote.hour === note.hour;
}

interface NoteLabelTextProps {
  labelAnimation: LabelAnimation | null;
  note: Note;
}

export function NoteLabelText({
  labelAnimation,
  note
}: NoteLabelTextProps): JSX.Element {
  if (labelAnimation === null || ! isNoteAnimated(labelAnimation, note)) {
    return (
      <text>
        {note.name}
      </text>
    );
  }
  const noteToDisplay = noteWithLongerName(labelAnimation);
  if (noteToDisplay.sharpsCount > 0) {
    const opaqueSharpsCount = noteToDisplay.sharpsCount - 1;
    return (
      <text>
        {note.naturalNote}
        {"♯".repeat(opaqueSharpsCount)}
        <tspan
          className={className(labelAnimation)}
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
        <tspan className={className(labelAnimation)}>
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

function className(
  labelAnimation: LabelAnimation
): string {
  const classNames = [];
  if (isLabelGettingLonger(labelAnimation)) {
    classNames.push("appear");
  } else {
    classNames.push("disappear");
  }
  return buildClassString(cssModule, classNames);
}

function noteWithLongerName(
  labelAnimation: LabelAnimation
): Note {
  if (isLabelGettingLonger(labelAnimation)) {
    return labelAnimation.finishNote;
  } else {
    return labelAnimation.startNote;
  }
}

function isLabelGettingLonger(
  labelAnimation: LabelAnimation
) {
  return labelAnimation.startNote.name.length < labelAnimation.finishNote.name.length;
}
