import { SolfegeName, Location } from "src/enumerations";
import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/NoteDot.module.css";


interface NoteDotProps {
  location: Location;
  solfegeName: SolfegeName;
}

export default function NoteDot({
  location,
  solfegeName
}: NoteDotProps): JSX.Element {
  return (
    <circle
      className={buildClassString(cssModule, ["note-dot", solfegeName, location])}
      cx="0"
      cy="0"
      r="10"
      data-testid={`note-dot-${solfegeName}`}
    />
  );
}
