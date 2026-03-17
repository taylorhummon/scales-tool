import { Solfege } from "src/enumerations";
import type { NoteName } from "src/types";
import { LabelAnimation } from "src/classes/label_animation";
import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/NoteLabel.module.css";


interface NoteLabelProps {
  labelAnimation: LabelAnimation | null;
  noteName: NoteName;
  noteHour: number;
  solfege: Solfege;
}

export default function NoteLabel({
  labelAnimation,
  noteName,
  noteHour,
  solfege
}: NoteLabelProps): JSX.Element {
  return (
    <g
      className={className(labelAnimation, noteHour, solfege)}
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
  labelAnimation: LabelAnimation | null,
  noteHour: number,
  solfege: Solfege
): string {
  const classNames = ["note-label", solfege];
  if (labelAnimation === null || labelAnimation.fromHour != noteHour) {
    classNames.push(`hour-${noteHour}`);
  } else {
    classNames.push("move");
    classNames.push(`from-${labelAnimation.fromHour}-to-${labelAnimation.toHour}`);
  }
  return buildClassString(cssModule, classNames);
}
