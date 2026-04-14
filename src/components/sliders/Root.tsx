import type { Note } from "@/classes/Note";
import { useDerivedContext } from "@/contexts/derived";
import { buildClassString } from "@/utilities/css";
import { Motion } from "@/utilities/motion";

import cssModule from "@/components/sliders/Root.module.scss";


interface RootProps {
  note: Note;
  topPosition: number;
  bottomPosition: number;
}

export function Root({
  note,
  topPosition,
  bottomPosition
}: RootProps): JSX.Element {
  const { motion } = useDerivedContext();
  return (
    <g
      className={getClassName(note, motion, topPosition, bottomPosition)}
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
  topPosition: number,
  bottomPosition: number
): string {
  const classNames = ["root", note.name, `position-${note.position}`];
  classNames.push(getFadingClassName(note.position, motion, topPosition, bottomPosition));
  return buildClassString(cssModule, classNames);
}

function getFadingClassName (
  position: number,
  motion: Motion,
  topPosition: number,
  bottomPosition: number
): string {
  if (motion === Motion.IncrementDegree) {
    return whenIncrementingDegree(position, topPosition, bottomPosition);
  }
  if (motion === Motion.DecrementDegree) {
    return whenDecrementingDegree(position, topPosition, bottomPosition);
  }
  if (motion === Motion.IncrementRoot) {
    return whenIncrementingRoot(position, topPosition, bottomPosition);
  }
  if (motion === Motion.DecrementRoot) {
    return whenDecrementingRoot(position, topPosition, bottomPosition);
  }
  if (motion === Motion.IncrementBoth) {
    return whenIncrementingBoth(position, topPosition, bottomPosition);
  }
  if (motion === Motion.DecrementBoth) {
    return whenDecrementingBoth(position, topPosition, bottomPosition);
  }
  return fallback(position, topPosition, bottomPosition);
}

function whenIncrementingDegree(
  position: number,
  topPosition: number,
  bottomPosition: number
): string {
  if (position === bottomPosition + 1) {
    return "fade-from-gone-to-unselected";
  }
  if (position === topPosition) {
    return "fade-from-unselected-to-gone";
  }
  return fallback(position, topPosition, bottomPosition);
}

function whenDecrementingDegree(
  position: number,
  topPosition: number,
  bottomPosition: number
): string {
  if (position === topPosition - 1) {
    return "fade-from-gone-to-unselected";
  }
  if (position === bottomPosition) {
    return "fade-from-unselected-to-gone";
  }
  return fallback(position, topPosition, bottomPosition);
}

function whenIncrementingRoot(
  position: number,
  topPosition: number,
  bottomPosition: number
): string {
  if (position === 0) {
    return "fade-from-selected-to-unselected";
  }
  if (position === 1) {
    return "fade-from-unselected-to-selected";
  }
  return fallback(position, topPosition, bottomPosition);
}

function whenDecrementingRoot(
  position: number,
  topPosition: number,
  bottomPosition: number
): string {
  if (position === 0) {
    return "fade-from-selected-to-unselected";
  }
  if (position === -1) {
    return "fade-from-unselected-to-selected";
  }
  return fallback(position, topPosition, bottomPosition);
}

function whenIncrementingBoth(
  position: number,
  topPosition: number,
  bottomPosition: number
): string {
  if (position === 0) {
    if (topPosition === 0) {
      return "fade-from-selected-to-gone";
    } else {
      return "fade-from-selected-to-unselected";
    }
  }
  if (position === 1) {
    if (bottomPosition === 0) {
      return "fade-from-gone-to-selected";
    } else {
      return "fade-from-unselected-to-selected";
    }
  }
  if (position === bottomPosition + 1) {
    return "fade-from-gone-to-unselected";
  }
  if (position === topPosition) {
    return "fade-from-unselected-to-gone";
  }
  return fallback(position, topPosition, bottomPosition);
}

function whenDecrementingBoth(
  position: number,
  topPosition: number,
  bottomPosition: number
): string {
  if (position === 0) {
    if (bottomPosition === 0) {
      return "fade-from-selected-to-gone";
    } else {
      return "fade-from-selected-to-unselected";
    }
  }
  if (position === -1) {
    if (topPosition === 0) {
      return "fade-from-gone-to-selected";
    } else {
      return "fade-from-unselected-to-selected";
    }
  }
  if (position === topPosition - 1) {
    return "fade-from-gone-to-unselected";
  }
  if (position === bottomPosition) {
    return "fade-from-unselected-to-gone";
  }
  return fallback(position, topPosition, bottomPosition);
}

function fallback(
  position: number,
  topPosition: number,
  bottomPosition: number
) {
  if (position === 0) {
    return "selected";
  }
  if (position >= topPosition && position <= bottomPosition) {
    return "unselected";
  }
  return "gone";
}
