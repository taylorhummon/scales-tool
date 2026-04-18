import type { Note } from "@/classes/Note";
import { SolfegeLabelAnimator } from "@/classes/SolfegeLabelAnimator";
import { buildClassString } from "@/utilities/css";
import { SolfegeLetter } from "@/utilities/solfege";

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
      data-testid={`solfege-label-${note.solfegeLetter}`}
    >
      <g
        className={getInnerClassName(note)}
      >
        <text
          className={buildClassString(cssModule, ["text"])}
        >
          {note.solfegeLetter}
        </text>
      </g>
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
  if (typeof finishHour !== "number") {
    classNames.push(`hour-${startHour}`);
  } else {
    classNames.push(`move-from-${startHour}-to-${finishHour}`);
  }
  return buildClassString(cssModule, classNames);
}

function getInnerClassName(
  note: Note
): string {
  const classNames = ["solfege-label-inner"];
  if (note.solfegeLetter === SolfegeLetter.Sol) {
    classNames.push("wide");
  } else {
    classNames.push("regular");
  }
  return buildClassString(cssModule, classNames);
}
