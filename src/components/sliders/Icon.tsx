import { Motion } from "@/enumerations";


interface IconProps {
  motion: Motion;
}

export function Icon({
  motion
}: IconProps): JSX.Element | null {
  if (motion === Motion.DecrementMode || motion === Motion.DecrementDegree) {
    return (
      <svg
        viewBox="-23 -20 46 40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          points="-12,-5 0,5 12,-5 0,3"
          strokeWidth="1"
          stroke="black"
          fill="black"
        />
      </svg>
    );
  }
  if (motion === Motion.IncrementMode || motion === Motion.IncrementDegree) {
    return (
      <svg
        viewBox="-23 -20 46 40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          points="-12,5 0,-5 12,5 0,-3"
          strokeWidth="1"
          stroke="black"
          fill="black"
        />
      </svg>
    );
  }
  if (motion === Motion.DecrementBoth) {
    return (
      <svg
        viewBox="-50 -20 100 40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          points="-20,-8 0,8 20,-8 0,5"
          strokeWidth="1"
          stroke="black"
          fill="black"
        />
      </svg>
    );
  }
  if (motion === Motion.IncrementBoth) {
    return (
      <svg
        viewBox="-50 -20 100 40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polyline
          points="-20,8 0,-8 20,8 0,-5"
          strokeWidth="1"
          stroke="black"
          fill="black"
        />
      </svg>
    );
  }
  return null;
}
