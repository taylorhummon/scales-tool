# Terminology

**key degree**: The number of sharps or flats in the key. Is positive when using sharps and 
negative when using flats.

**mode name**: We work with seven musical modes. They correspond to natural notes and to numbers as
follows.

    name          note    number
    ----          ----    ------
    Lydian        F       -3
    Major         C       -2
    Mixolydian    G       -1
    Dorian        D       0
    Minor         A       1
    Phrygian      E       2
    Locrian       B       3
  
**root note**: The first (and last) note in the scale. A root note corresponds to a number as 
follows.

    note    number
    ----    ------
    A♭      -6
    E♭      -5
    B♭      -4
    F       -3
    C       -2
    G       -1
    D       0
    A       1
    E       2
    B       3
    F♯      4
    C♯      5
    G♯      6

**hour**: A number from 0 to 11 that represents where a note is located on the clock face.
We prefer to use 0 instead of 12 to match conventions with modular arithemtic.

**position**: A number that represents where a note is located on a slider. Negative three is at 
the top, zero is at the center, and three is at the bottom. A note may have a position outside of 
the range [-3, 3], but it won't be displayed on the slider.


## An important relationship

The following relationship holds for all of our keys

    degree = root - mode

where we interpret the mode and the root as numbers.
