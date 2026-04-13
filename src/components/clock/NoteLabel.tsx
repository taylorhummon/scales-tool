import type { Note } from "@/classes/Note";
import type { NoteLabelAnimator } from "@/classes/NoteLabelAnimator";
import { NoteLabelText } from "@/components/clock/NoteLabelText";
import { buildClassString } from "@/utilities/css";

import cssModule from "@/components/clock/NoteLabel.module.scss";


interface NoteLabelProps {
  noteLabelAnimator: NoteLabelAnimator | null;
  note: Note;
}

export function NoteLabel({
  noteLabelAnimator,
  note
}: NoteLabelProps): JSX.Element {
  return (
    <g
      className={getClassName(noteLabelAnimator, note)}
      data-testid={`note-label-${note.solfege}`}
    >
      <NoteLabelText
        noteLabelAnimator={noteLabelAnimator}
        note={note}
      />
    </g>
  );
}

function getClassName(
  noteLabelAnimator: NoteLabelAnimator | null,
  note: Note
): string {
  const classNames = ["note-label", note.solfege];
  if (noteLabelAnimator !== null && noteLabelAnimator.willAnimate(note)) {
    classNames.push(`move-from-${noteLabelAnimator.startNote.name}-to-${noteLabelAnimator.finishNote.name}`);
  } else {
    classNames.push(`note-${note.name}`);
  }
  return buildClassString(cssModule, classNames);
}
