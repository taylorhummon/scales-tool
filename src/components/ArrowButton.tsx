import cssModule from "src/components/ArrowButton.module.css";
import { buildClassString } from "src/utilities/css";


interface ArrowButtonProps {
  isRight: boolean;
  onClick: (() => void) | undefined;
  dataTestid: string | undefined;
}

export default function ArrowButton({
  isRight,
  onClick,
  dataTestid
}: ArrowButtonProps): JSX.Element {
  const arrow = isRight ? "⮕" : "⬅";
  const isDisabled = ! onClick;
  return (
    <div
        className={className(isDisabled)}
        onClick={onClick}
        data-testid={dataTestid}
    >
        {arrow}
    </div>
  );
}

function className(
  isDisabled: boolean
): string {
  const classNames = ["arrow-button"];
  if (isDisabled) classNames.push("disabled");
  return buildClassString(cssModule, classNames);
}
