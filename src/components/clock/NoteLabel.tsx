import type { Note } from "@/classes/Note";
import type { NoteLabelAnimator } from "@/classes/NoteLabelAnimator";
import { NoteLabelText } from "@/components/clock/NoteLabelText";
import { useDerivedContext } from "@/contexts/derived";
import { buildClassName } from "@/utilities/css";
import type { Settings } from "@/utilities/settings";

import noteLabelCssModule from "@/components/clock/NoteLabel.module.scss";


interface NoteLabelProps {
  noteLabelAnimator: NoteLabelAnimator | null;
  note: Note;
}

export function NoteLabel({
  noteLabelAnimator,
  note,
}: NoteLabelProps): JSX.Element {
  const { settings } = useDerivedContext();

  return (
    <g
      className={getClassName(settings, noteLabelAnimator, note)}
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
  settings: Settings,
  noteLabelAnimator: NoteLabelAnimator | null,
  note: Note,
): string {
  const classNames = ["note-label"];
  if (noteLabelAnimator === null || ! noteLabelAnimator.willAnimate(note)) {
    const hour = note.getHour(settings);
    const characterCount = note.name.length;
    classNames.push(`hour-${hour}-cc-${characterCount}`);
  } else {
    const startHour = noteLabelAnimator.startNote.getHour(settings);
    const startCharacterCount = noteLabelAnimator.startNote.name.length;
    const finishHour = noteLabelAnimator.finishNote.getHour(settings);
    const finishCharacterCount = noteLabelAnimator.finishNote.name.length;
    classNames.push(`move-from-${startHour}-cc-${startCharacterCount}-to-${finishHour}-cc-${finishCharacterCount}`);  }
  return buildClassName(noteLabelCssModule, classNames);
}
