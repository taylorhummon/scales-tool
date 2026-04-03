// Default to Major with no sharps or flats, a.k.a. C-Major.
export const DEFAULT_MODE: number = 2;
export const DEFAULT_DEGREE: number = 0;

// Allow up to two sharps or two flats on each note in the scale.
export const MAX_DEGREE: number = 14;
export const MIN_DEGREE: number = -14;

// Is the user allowed to loop between min and max modes?
export const ALLOW_LYDIAN_LOCRIAN_LOOP: boolean = true;
