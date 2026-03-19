import { Solfege } from "src/enumerations";
import type { Note } from "src/classes/Note";
import type { LabelAnimation } from "src/classes/LabelAnimation";
import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/NoteLabel.module.css";


interface NoteLabelProps {
  labelAnimation: LabelAnimation | null;
  note: Note;
  solfege: Solfege;
}

export function NoteLabel({
  labelAnimation,
  note,
  solfege
}: NoteLabelProps): JSX.Element {
  return (
    <g
      className={className(labelAnimation, note, solfege)}
      data-testid={`note-label-${solfege}`}
    >
      <text>
        {note.name}
      </text>
    </g>
  );
}

function className(
  labelAnimation: LabelAnimation | null,
  note: Note,
  solfege: Solfege
): string {
  const classNames = ["note-label", solfege];
  if (labelAnimation === null) {
    classNames.push(`note-${note.name}`);
    return buildClassString(cssModule, classNames);
  }
  const startNote = labelAnimation.startNote;
  if (startNote.hour !== note.hour) {
    classNames.push(`note-${note.name}`);
    return buildClassString(cssModule, classNames);
  }
  classNames.push("move");
  classNames.push(`from-${startNote.name}-to-${labelAnimation.finishNote.name}`);
  return buildClassString(cssModule, classNames);
}
