import {
  Context,
  createContext,
  useReducer,
  useContext,
  useMemo,
} from "react";

import {
  DEFAULT_IS_USING_SOLFEGE,
  DEFAULT_IS_USING_ANIMATION,
  DEFAULT_IS_USING_NOTES_BALLET,
} from "@/config";
import { MusicalKey, DEFAULT_MUSICAL_KEY } from "@/classes/MusicalKey";
import { DispatchContext } from "@/contexts/dispatch";
import { ActionType, Action } from "@/utilities/action";
import { Motion, getNextMusicalKey } from "@/utilities/motion";
import type { State } from "@/utilities/state";
import { getInitialState } from "@/utilities/state";


// We derive some information from the state and then make it easily available to all
// subcomponents by putting it into a context.

export interface Derived {
  musicalKey: MusicalKey;
  nextMusicalKey: MusicalKey;
  motion: Motion;
  isUsingSolfege: boolean;
  isUsingAnimation: boolean;
  isUsingNotesBallet: boolean;
}

// The DEFAULT_DERIVED will only be used outside of the DerivedContext provider.
// We don't expect this to ever happen.
const DEFAULT_DERIVED: Derived = {
  musicalKey: DEFAULT_MUSICAL_KEY,
  nextMusicalKey: DEFAULT_MUSICAL_KEY,
  motion: Motion.Still,
  isUsingSolfege: DEFAULT_IS_USING_SOLFEGE,
  isUsingAnimation: DEFAULT_IS_USING_ANIMATION,
  isUsingNotesBallet: DEFAULT_IS_USING_NOTES_BALLET,
};

export const DerivedContext: Context<Derived> = createContext(DEFAULT_DERIVED);

export function useDerivedContext(
) {
  return useContext(DerivedContext);
}

interface DerivedProviderProps {
  children: JSX.Element | null,
}

export function DerivedProvider({
  children,
}: DerivedProviderProps): JSX.Element {
  const [state, dispatch] = useReducer(reducer, getInitialState());
  const { mode, root, motion, isUsingSolfege, isUsingAnimation, isUsingNotesBallet } = state;
  const musicalKey = useMemo(
    () => {
      return new MusicalKey({ mode, root });
    },
    [mode, root],
  );
  const nextMusicalKey = useMemo(
    () => {
      return getNextMusicalKey(musicalKey, motion);
    },
    [musicalKey, motion],
  );
  const derived = {
    musicalKey,
    nextMusicalKey,
    motion,
    isUsingSolfege,
    isUsingAnimation,
    isUsingNotesBallet,
  };

  return (
    <DerivedContext.Provider value={derived}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </DerivedContext.Provider>
  );
}

function reducer(
  state: State,
  action: Action,
): State {
  if (action.type === ActionType.ActivateMotion) {
    return { ...state, motion: action.motion };
  }
  if (action.type === ActionType.ChangeKey) {
    return {
      ...state,
      mode: action.nextMusicalKey.mode,
      root: action.nextMusicalKey.root,
      motion: Motion.Still
    }
  }
  if (action.type === ActionType.SelectIsUsingSolfege) {
    return { ...state, isUsingSolfege: action.isUsingSolfege };
  }
  if (action.type === ActionType.SelectIsUsingAnimation) {
    return { ...state, isUsingAnimation: action.isUsingAnimation };
  }
  if (action.type === ActionType.SelectIsUsingNotesBallet) {
    return { ...state, isUsingNotesBallet: action.isUsingNotesBallet };
  }
  return state;
}
