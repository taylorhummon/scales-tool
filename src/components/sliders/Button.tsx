import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/sliders/Button.module.css";


interface ButtonProps {
  isPlus: boolean;
  onClick: (() => void) | undefined;
  isWaiting: boolean;
  dataTestid: string;
}

export function Button({
  isPlus,
  onClick,
  isWaiting,
  dataTestid
}: ButtonProps): JSX.Element {
  const isDisabled = ! onClick;
  return (
    <button
      type="button"
      className={className(isDisabled, isWaiting)}
      onClick={onClick}
      disabled={isDisabled}
      data-testid={dataTestid}
    >
      {isPlus ? "+" : "-"}
    </button>
  );
}

function className(
  isDisabled: boolean,
  isWaiting: boolean
): string {
  const classNames = ["button"];
  if (isDisabled) classNames.push("disabled");
  if (isWaiting) classNames.push("waiting");
  return buildClassString(cssModule, classNames);
}
