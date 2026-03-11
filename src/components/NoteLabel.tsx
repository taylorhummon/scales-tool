import { SolfegeName, Location } from "src/enumerations";
import type { Note } from "src/types";
import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/NoteLabel.module.css";


interface NoteLabelProps {
  location: Location;
  note: Note;
  solfegeName: SolfegeName;
}

export default function NoteLabel({
  location,
  note,
  solfegeName
}: NoteLabelProps): JSX.Element {
  return (
    <g
      className={className(location, solfegeName)}
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
  location: Location,
  solfegeName: SolfegeName
): string {
  const classNames = ["note-label", solfegeName, location];
  return buildClassString(cssModule, classNames);
}
