import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/RootDot.module.css";


interface RootDotProps {
  rootHour: number;
}

export default function RootDot({
  rootHour
}: RootDotProps): JSX.Element {
  return (
    <circle
      className={className(rootHour)}
      cx="0"
      cy="0"
      r="10"
    />
  );
}

function className(
  rootHour: number
): string {
  const classNames = ["root-dot", `hour-${rootHour}`];
  return buildClassString(cssModule, classNames);
}
