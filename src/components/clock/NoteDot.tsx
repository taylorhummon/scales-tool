import type { MusicalKey } from "@/classes/MusicalKey";
import type { Note } from "@/classes/Note";
import { useDerivedContext } from "@/contexts/derived";
import { AnimationType, getNoteFinishHour } from "@/utilities/animation";
import { buildClassName } from "@/utilities/css";

import noteDotCssModule from "@/components/clock/NoteDot.module.scss";


interface NoteDotProps {
  note: Note;
}

export function NoteDot({
  note
}: NoteDotProps): JSX.Element {
  const { animationType, musicalKey, nextMusicalKey } = useDerivedContext();

  return (
    <circle
      className={getClassName(animationType, musicalKey, nextMusicalKey, note)}
      data-testid={`note-dot-${note.solfegeLetter}`}
      cx="0"
      cy="0"
      r="8"
      fill="black"
    />
  );
}

function getClassName(
  animationType: AnimationType,
  musicalKey: MusicalKey,
  nextMusicalKey: MusicalKey,
  note: Note
): string {
  const classNames = ["note-dot"];
  const startHour = note.hour;
  const finishHour = getNoteFinishHour(animationType, musicalKey, nextMusicalKey, note);
  if (finishHour === startHour) {
    classNames.push(`hour-${startHour}`);
  } else {
    classNames.push(`move-from-${startHour}-to-${finishHour}`);
  }
  return buildClassName(noteDotCssModule, classNames);
}
