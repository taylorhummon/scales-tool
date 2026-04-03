import type { Note } from "@/classes/Note";
import type { LabelAnimation } from "@/classes/LabelAnimation";
import { NoteLabelText } from "@/components/clock/NoteLabelText";
import { buildClassString } from "@/utilities/css";

import cssModule from "@/components/clock/NoteLabel.module.css";


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
      className={getClassName(note, labelAnimation)}
      data-testid={`note-label-${note.solfege}`}
    >
      <NoteLabelText
        note={note}
        labelAnimation={labelAnimation}
      />
    </g>
  );
}

function getClassName(
  note: Note,
  labelAnimation: LabelAnimation | null
): string {
  const classNames = ["note-label", note.solfege];
  if (labelAnimation !== null && labelAnimation.isNoteAnimated(note)) {
    classNames.push(`move-from-${labelAnimation.startNote.name}-to-${labelAnimation.finishNote.name}`);
  } else {
    classNames.push(`note-${note.name}`);
  }
  return buildClassString(cssModule, classNames);
}
