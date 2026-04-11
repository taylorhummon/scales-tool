export function SelectionBox(
): JSX.Element {
  return (
    <>
      <rect
        stroke="none"
        x="-50"
        y="-15"
        width="100"
        height="30"
        fill="rgba(255, 187, 0, 0.1)"

      />
      <g
        strokeWidth="1.5"
        stroke="rgb(180, 120, 80)"
        fill="none"
      >
        <polyline
          points="-50,9 -50,15 -42,15"
        />
        <polyline
          points="-50,-9 -50,-15 -42,-15"
        />
        <polyline
          points="50,9 50,15 42,15"
        />
        <polyline
          points="50,-9 50,-15 42,-15"
        />
      </g>
    </>
  );
}
