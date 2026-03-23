import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/grid/Button.module.css";


interface ButtonProps {
  isPlus: boolean;
  onClick: (() => void) | undefined;
  dataTestid: string;
}

export function Button({
  isPlus,
  onClick,
  dataTestid
}: ButtonProps): JSX.Element {
  const isDisabled = ! onClick;
  return (
    <input
      type="button"
      className={className(isDisabled)}
      onClick={onClick}
      disabled={isDisabled}
      data-testid={dataTestid}
      value={isPlus ? "+" : "-"}
    />
  );
}

function className(
  isDisabled: boolean
): string {
  const classNames = ["button"];
  if (isDisabled) classNames.push("disabled");
  return buildClassString(cssModule, classNames);
}
