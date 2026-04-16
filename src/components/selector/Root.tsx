import type { Note } from "@/classes/Note";
import { useDerivedContext } from "@/contexts/derived";
import { buildClassString } from "@/utilities/css";
import { getFadingClassName } from "@/utilities/selector";

import cssModule from "@/components/selector/Selector.module.scss";


interface RootProps {
  note: Note;
}

export function Root({
  note
}: RootProps): JSX.Element {
  const { musicalKey, nextMusicalKey } = useDerivedContext();
  const position = note.position;
  const nextPosition = position - nextMusicalKey.root + musicalKey.root;
  return (
    <g
      className={getClassName(position, nextPosition)}
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
  position: number,
  nextPosition: number
): string {
  const classNames = [
    "root",
    "selector-value",
    `position-${position}`,
    getFadingClassName(position, nextPosition),
  ];
  return buildClassString(cssModule, classNames);
}
