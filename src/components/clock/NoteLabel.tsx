import type { Note } from "src/classes/Note";
import type { LabelAnimation } from "src/classes/LabelAnimation";
import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/clock/NoteLabel.module.css";


interface NoteLabelProps {
  labelAnimation: LabelAnimation | null;
  note: Note;
}

export function NoteLabel({
  labelAnimation,
  note
}: NoteLabelProps): JSX.Element {
  return (
    <g
      className={className(labelAnimation, note)}
      data-testid={`note-label-${note.solfege}`}
    >
     {getNameToDisplay(labelAnimation, note)}
    </g>
  );
}

function className(
  labelAnimation: LabelAnimation | null,
  note: Note
): string {
  const classNames = ["note-label", note.solfege];
  if (labelAnimation === null || ! isNoteAnimated(labelAnimation, note)) {
    classNames.push(`note-${note.name}`);
    return buildClassString(cssModule, classNames);
  }
  classNames.push("move");
  classNames.push(`from-${labelAnimation.startNote.name}-to-${labelAnimation.finishNote.name}`);
  return buildClassString(cssModule, classNames);
}

function internalClassName(
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

function getNameToDisplay(
  labelAnimation: LabelAnimation | null,
  note: Note
): JSX.Element {
  if (labelAnimation === null || ! isNoteAnimated(labelAnimation, note)) {
    return (
      <text>
        {note.name}
      </text>
    );
  } else {
    const noteToDisplay = noteWithLongerName(labelAnimation);
    if (noteToDisplay.sharpsCount > 0) {
      const opaqueSharpsCount = noteToDisplay.sharpsCount - 1;
      return (
        <text>
          {note.naturalNote}
          {"♯".repeat(opaqueSharpsCount)}
          <tspan
            className={internalClassName(labelAnimation)}
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
          <tspan className={internalClassName(labelAnimation)}>
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
}

function isNoteAnimated(
  labelAnimation: LabelAnimation,
  note: Note
): boolean {
  return labelAnimation.startNote.hour === note.hour;
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
