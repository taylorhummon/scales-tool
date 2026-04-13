import { Motion } from "@/enumerations";
import type { Note } from "@/classes/Note";
import { useDerivedContext } from "@/contexts/derived";
import { buildClassString } from "@/utilities/css";

import cssModule from "@/components/sliders/Root.module.scss";


interface RootProps {
  note: Note;
  firstPosition: number;
  lastPosition: number;
}

export function Root({
  note,
  firstPosition,
  lastPosition
}: RootProps): JSX.Element {
  const { motion } = useDerivedContext();
  return (
    <g
      className={getClassName(note, motion, firstPosition, lastPosition)}
    >
      <text
        className={buildClassString(cssModule, ["text"])}
      >
        {note.name}
      </text>
    </g>
  );
}

function getClassName(
  note: Note,
  motion: Motion,
  firstPosition: number,
  lastPosition: number
): string {
  const classNames = ["root", note.name, `position-${note.position}`];
  classNames.push(getFadingClassName(note.position, motion, firstPosition, lastPosition));
  return buildClassString(cssModule, classNames);
}

function getFadingClassName (
  position: number,
  motion: Motion,
  firstPosition: number,
  lastPosition: number
): string {
  if (motion === Motion.IncrementDegree) {
    return whenIncrementingDegree(position, firstPosition, lastPosition);
  }
  if (motion === Motion.DecrementDegree) {
    return whenDecrementingDegree(position, firstPosition, lastPosition);
  }
  if (motion === Motion.IncrementRoot) {
    return whenIncrementingRoot(position, firstPosition, lastPosition);
  }
  if (motion === Motion.DecrementRoot) {
    return whenDecrementingRoot(position, firstPosition, lastPosition);
  }
  if (motion === Motion.IncrementBoth) {
    return whenIncrementingBoth(position, firstPosition, lastPosition);
  }
  if (motion === Motion.DecrementBoth) {
    return whenDecrementingBoth(position, firstPosition, lastPosition);
  }
  return fallback(position, firstPosition, lastPosition);
}

function whenIncrementingDegree(
  position: number,
  firstPosition: number,
  lastPosition: number
): string {
  if (position === firstPosition - 1) {
    return "fade-from-gone-to-unselected";
  }
  if (position === lastPosition) {
    return "fade-from-unselected-to-gone";
  }
  return fallback(position, firstPosition, lastPosition);
}

function whenDecrementingDegree(
  position: number,
  firstPosition: number,
  lastPosition: number
): string {
  if (position === lastPosition + 1) {
    return "fade-from-gone-to-unselected";
  }
  if (position === firstPosition) {
    return "fade-from-unselected-to-gone";
  }
  return fallback(position, firstPosition, lastPosition);
}

function whenIncrementingRoot(
  position: number,
  firstPosition: number,
  lastPosition: number
): string {
  if (position === 0) {
    return "fade-from-selected-to-unselected";
  }
  if (position === -1) {
    return "fade-from-unselected-to-selected";
  }
  return fallback(position, firstPosition, lastPosition);
}

function whenDecrementingRoot(
  position: number,
  firstPosition: number,
  lastPosition: number
): string {
  if (position === 0) {
    return "fade-from-selected-to-unselected";
  }
  if (position === 1) {
    return "fade-from-unselected-to-selected";
  }
  return fallback(position, firstPosition, lastPosition);
}

function whenIncrementingBoth(
  position: number,
  firstPosition: number,
  lastPosition: number
): string {
  if (position === 0) {
    if (lastPosition === 0) {
      return "fade-from-selected-to-gone";
    } else {
      return "fade-from-selected-to-unselected";
    }
  }
  if (position === -1) {
    if (firstPosition === 0) {
      return "fade-from-gone-to-selected";
    } else {
      return "fade-from-unselected-to-selected";
    }
  }
  if (position === firstPosition - 1) {
    return "fade-from-gone-to-unselected";
  }
  if (position === lastPosition) {
    return "fade-from-unselected-to-gone";
  }
  return fallback(position, firstPosition, lastPosition);
}

function whenDecrementingBoth(
  position: number,
  firstPosition: number,
  lastPosition: number
): string {
  if (position === 0) {
    if (firstPosition === 0) {
      return "fade-from-selected-to-gone";
    } else {
      return "fade-from-selected-to-unselected";
    }
  }
  if (position === 1) {
    if (lastPosition === 0) {
      return "fade-from-gone-to-selected";
    } else {
      return "fade-from-unselected-to-selected";
    }
  }
  if (position === lastPosition + 1) {
    return "fade-from-gone-to-unselected";
  }
  if (position === firstPosition) {
    return "fade-from-unselected-to-gone";
  }
  return fallback(position, firstPosition, lastPosition);
}

function fallback(
  position: number,
  firstPosition: number,
  lastPosition: number
) {
  if (position === 0) {
    return "selected";
  }
  if (position >= firstPosition && position <= lastPosition) {
    return "unselected";
  }
  return "gone";
}
