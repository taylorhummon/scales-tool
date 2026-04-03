import { ModeName } from "@/enumerations";


export const MAX_MODE = 3;
export const MIN_MODE = - MAX_MODE;

export const MODE_NAME_BY_POSITION: Map<number, ModeName> = new Map([
  [3, ModeName.Lydian],
  [2, ModeName.Major],
  [1, ModeName.Mixolydian],
  [0, ModeName.Dorian],
  [-1, ModeName.Minor],
  [-2, ModeName.Phrygian],
  [-3, ModeName.Locrian]
]);
