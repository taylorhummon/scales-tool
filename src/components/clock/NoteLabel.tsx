import type { Note } from "src/classes/Note";
import type { LabelAnimation } from "src/classes/LabelAnimation";
import { isNoteAnimated, NoteLabelText } from "src/components/clock/NoteLabelText";
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
      <NoteLabelText
        labelAnimation={labelAnimation}
        note={note}
      />
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
