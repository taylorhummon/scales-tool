import { Motion } from "src/enumerations";


export interface State {
  doPosition: number; // the position of the left slider
  keyDegree: number;  // the position of the right slider
  motion: Motion;
}
