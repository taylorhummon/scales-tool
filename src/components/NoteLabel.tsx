import { SolfegeName } from "src/enumerations";
import type { Note } from "src/types";
import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/NoteLabel.module.css";


interface NoteLabelProps {
  hour: number;
  note: Note;
  solfegeName: SolfegeName;
}

export default function NoteLabel({
  hour,
  note,
  solfegeName
}: NoteLabelProps): JSX.Element {
  return (
    <g
      className={className(hour, solfegeName)}
      data-testid={`note-label-${solfegeName}`}
    >
      <text
        style={{
          dominantBaseline: "central",
          textAnchor: "middle"
        }}
      >
        {note}
      </text>
    </g>
  );
}

function className(
  hour: number,
  solfegeName: SolfegeName
): string {
  const classNames = ["note-label", `hour-${hour}`, solfegeName];
  return buildClassString(cssModule, classNames);
}
