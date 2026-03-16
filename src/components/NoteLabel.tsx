import { Solfege } from "src/enumerations";
import type { NoteName } from "src/types";
import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/NoteLabel.module.css";


interface NoteLabelProps {
  noteName: NoteName;
  noteHour: number;
  solfege: Solfege;
}

export default function NoteLabel({
  noteName,
  noteHour,
  solfege
}: NoteLabelProps): JSX.Element {
  return (
    <g
      className={className(noteHour, solfege)}
      data-testid={`note-label-${solfege}`}
    >
      <text
        style={{
          dominantBaseline: "central",
          textAnchor: "middle"
        }}
      >
        {noteName}
      </text>
    </g>
  );
}

function className(
  noteHour: number,
  solfege: Solfege
): string {
  const classNames = ["note-label", `hour-${noteHour}`, solfege];
  return buildClassString(cssModule, classNames);
}
