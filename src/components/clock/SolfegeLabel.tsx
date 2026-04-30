import type { Note } from "@/classes/Note";
import { SolfegeLabelAnimator } from "@/classes/SolfegeLabelAnimator";
import { useDerivedContext } from "@/contexts/derived";
import { buildClassName } from "@/utilities/css";
import type { Settings } from "@/utilities/settings";
import { SolfegeLetter } from "@/utilities/solfege";

import solfegeLabelCssModule from "@/components/clock/SolfegeLabel.module.scss";


interface SolfegeLabelProps {
  solfegeLabelAnimator: SolfegeLabelAnimator | null;
  note: Note;
}

export function SolfegeLabel({
  solfegeLabelAnimator,
  note,
}: SolfegeLabelProps): JSX.Element {
  const { settings } = useDerivedContext();

  return (
    <g
      className={getClassName(settings, solfegeLabelAnimator, note)}
      data-testid={`solfege-label-${note.solfegeLetter}`}
    >
      <g className={getInnerClassName(note)}>
        <text className={solfegeLabelCssModule["text"]}>
          {note.solfegeLetter}
        </text>
      </g>
    </g>
  );
}

function getClassName(
  settings: Settings,
  solfegeLabelAnimator: SolfegeLabelAnimator | null,
  note: Note,
): string {
  const classNames = ["solfege-label"];
  const startHour = note.getHour(settings);
  const finishHour = solfegeLabelAnimator?.finishHour(note.getHour(settings));
  if (typeof finishHour !== "number") {
    classNames.push(`hour-${startHour}`);
  } else {
    classNames.push(`move-from-${startHour}-to-${finishHour}`);
  }
  return buildClassName(solfegeLabelCssModule, classNames);
}

function getInnerClassName(
  note: Note,
): string {
  const classNames = ["solfege-label-inner"];
  if (note.solfegeLetter === SolfegeLetter.Sol) {
    classNames.push("wide");
  } else {
    classNames.push("regular");
  }
  return buildClassName(solfegeLabelCssModule, classNames);
}
