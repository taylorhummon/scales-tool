import type { Note } from "src/classes/Note";
import type { LabelAnimation } from "src/classes/LabelAnimation";
import { NoteLabelText } from "src/components/clock/NoteLabelText";
import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/clock/NoteLabel.module.css";


interface NoteLabelProps {
  note: Note;
  labelAnimation: LabelAnimation | null;
}

export function NoteLabel({
  note,
  labelAnimation
}: NoteLabelProps): JSX.Element {
  return (
    <g
      className={className(note, labelAnimation)}
      data-testid={`note-label-${note.solfege}`}
    >
      <NoteLabelText
        note={note}
        labelAnimation={labelAnimation}
      />
    </g>
  );
}

function className(
  note: Note,
  labelAnimation: LabelAnimation | null
): string {
  const classNames = ["note-label", note.solfege];
  if (labelAnimation === null || ! labelAnimation.isNoteAnimated(note)) {
    classNames.push(`note-${note.name}`);
    return buildClassString(cssModule, classNames);
  }
  classNames.push(`move-from-${labelAnimation.startNote.name}-to-${labelAnimation.finishNote.name}`);
  return buildClassString(cssModule, classNames);
}
