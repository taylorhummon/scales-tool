import { Motion } from "@/enumerations";


interface IconProps {
  motion: Motion;
}

export function Icon({
  motion
}: IconProps): JSX.Element | null {
  if (motion === Motion.DecrementMode || motion === Motion.DecrementDegree) {
    return (
      <polygon
        points="-12,-5 0,5 12,-5 0,3"
        strokeWidth="1"
        stroke="black"
        fill="black"
      />
    );
  }
  if (motion === Motion.IncrementMode || motion === Motion.IncrementDegree) {
    return (
      <polygon
        points="-12,5 0,-5 12,5 0,-3"
        strokeWidth="1"
        stroke="black"
        fill="black"
      />
    );
  }
  if (motion === Motion.DecrementBoth) {
    return (
      <polygon
        points="-20,-8 0,8 20,-8 0,5"
        strokeWidth="1"
        stroke="black"
        fill="black"
      />
    );
  }
  if (motion === Motion.IncrementBoth) {
    return (
      <polyline
        points="-20,8 0,-8 20,8 0,-5"
        strokeWidth="1"
        stroke="black"
        fill="black"
      />
    );
  }
  return null;
}
