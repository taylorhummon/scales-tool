import type { Note } from "@/classes/Note";
import { SolfegeLabelAnimator } from "@/classes/SolfegeLabelAnimator";
import { buildClassString } from "@/utilities/css";

import cssModule from "@/components/clock/SolfegeLabel.module.scss";


interface SolfegeLabelProps {
  solfegeLabelAnimator: SolfegeLabelAnimator | null;
  note: Note;
}

export function SolfegeLabel({
  solfegeLabelAnimator,
  note
}: SolfegeLabelProps): JSX.Element {
  return (
    <g
      className={getClassName(solfegeLabelAnimator, note)}
      data-testid={`solfege-label-${note.solfege}`}
    >
      <text
        className={buildClassString(cssModule, ["text"])}
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {note.solfege}
      </text>
    </g>
  );
}

function getClassName(
  solfegeLabelAnimator: SolfegeLabelAnimator | null,
  note: Note
): string {
  const classNames = ["solfege-label"];
  const startHour = note.hour;
  const finishHour = solfegeLabelAnimator?.finishHour(note.hour);
  if (typeof finishHour === "number") {
    classNames.push(`move-from-${startHour}-to-${finishHour}`);
  } else {
    classNames.push(`hour-${note.hour}`);
  }
  return buildClassString(cssModule, classNames);
}
