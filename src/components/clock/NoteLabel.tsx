import type { Note } from "@/classes/Note";
import type { NoteLabelAnimator } from "@/classes/NoteLabelAnimator";
import { NoteLabelText } from "@/components/clock/NoteLabelText";
import { buildClassName } from "@/utilities/css";

import noteLabelCssModule from "@/components/clock/NoteLabel.module.scss";


interface NoteLabelProps {
  noteLabelAnimator: NoteLabelAnimator | null;
  note: Note;
}

export function NoteLabel({
  noteLabelAnimator,
  note,
}: NoteLabelProps): JSX.Element {
  return (
    <g
      className={getClassName(noteLabelAnimator, note)}
      data-testid={`note-label-${note.solfegeLetter}`}
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
  note: Note,
): string {
  const classNames = ["note-label"];
  if (noteLabelAnimator === null || ! noteLabelAnimator.willAnimate(note)) {
    const characterCount = note.name.length;
    classNames.push(`hour-${note.hour}-cc-${characterCount}`);
  } else {
    const startHour = noteLabelAnimator.startNote.hour;
    const startCharacterCount = noteLabelAnimator.startNote.name.length;
    const finishHour = noteLabelAnimator.finishNote.hour;
    const finishCharacterCount = noteLabelAnimator.finishNote.name.length;
    classNames.push(`move-from-${startHour}-cc-${startCharacterCount}-to-${finishHour}-cc-${finishCharacterCount}`);  }
  return buildClassName(noteLabelCssModule, classNames);
}
