import type { Note } from "@/classes/Note";
import { useDerivedContext } from "@/contexts/derived";
import { buildClassName } from "@/utilities/css";
import { getSelectorValueState } from "@/utilities/selector";

import selectorValueCssModule from "@/components/selector/SelectorValue.module.scss";


interface RootProps {
  note: Note;
  className?: string;
}

export function Root({
  note,
  className,
}: RootProps): JSX.Element {
  const { musicalKey, nextMusicalKey } = useDerivedContext();
  const position = note.position;
  const nextPosition = position - nextMusicalKey.root + musicalKey.root;
  return (
    <g className={getClassName(position, nextPosition, className)}>
      <text
        className={selectorValueCssModule["text"]}
        textAnchor="middle"
      >
        {note.name}
      </text>
    </g>
  );
}

function getClassName(
  position: number,
  nextPosition: number,
  external: string | undefined,
): string {
  const classNames = [
    "root",
    "selector-value",
    `position-${position}`,
    getSelectorValueState(position, nextPosition),
  ];
  const internal = buildClassName(selectorValueCssModule, classNames);
  return [internal, external].filter((className) => className !== undefined).join(" ");
}
