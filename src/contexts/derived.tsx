import {
  Context,
  createContext,
  useReducer,
  useContext,
  useMemo,
} from "react";

import { MusicalKey, DEFAULT_MUSICAL_KEY } from "@/classes/MusicalKey";
import { DispatchContext } from "@/contexts/dispatch";
import { ActionType, Action } from "@/utilities/action";
import { Motion, getNextMusicalKey } from "@/utilities/motion";
import type { Settings } from "@/utilities/settings";
import { DEFAULT_SETTINGS } from "@/utilities/settings";
import type { State } from "@/utilities/state";
import { getInitialState } from "@/utilities/state";


// We derive some information from the state and then make it easily available to all
// subcomponents by putting it into a context.

export interface Derived {
  settings: Settings;
  motion: Motion;
  musicalKey: MusicalKey;
  nextMusicalKey: MusicalKey;
}

// The DEFAULT_DERIVED will only be used outside of the DerivedContext provider.
// We don't expect this to ever happen.
const DEFAULT_DERIVED: Derived = {
  settings: DEFAULT_SETTINGS,
  motion: Motion.Still,
  musicalKey: DEFAULT_MUSICAL_KEY,
  nextMusicalKey: DEFAULT_MUSICAL_KEY,
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
  const {
    isClusteringNotes,
    isUsingSolfege,
    isUsingAnimation,
    isUsingNotesBallet,
    motion,
    root,
    degree,
  } = state;
  const settings = useMemo(
    () => {
      return {
        isClusteringNotes,
        isUsingSolfege,
        isUsingAnimation,
        isUsingNotesBallet,
      };
    },
    [isClusteringNotes, isUsingSolfege, isUsingAnimation, isUsingNotesBallet]
  )
  const musicalKey = useMemo(
    () => {
      return new MusicalKey({ root, degree });
    },
    [root, degree],
  );
  const nextMusicalKey = useMemo(
    () => {
      return getNextMusicalKey(musicalKey, motion);
    },
    [musicalKey, motion],
  );
  const derived = {
    settings,
    motion,
    musicalKey,
    nextMusicalKey,
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
    const { motion } = action;
    return { ...state, motion };
  }
  if (action.type === ActionType.ChangeKey) {
    return {
      ...state,
      motion: Motion.Still,
      root: action.nextMusicalKey.root,
      degree: action.nextMusicalKey.degree,
    };
  }
  if (action.type === ActionType.SelectIsClusteringNotes) {
    const { isClusteringNotes } = action;
    return { ...state, isClusteringNotes };
  }
  if (action.type === ActionType.SelectIsUsingSolfege) {
    const { isUsingSolfege } = action;
    return { ...state, isUsingSolfege };
  }
  if (action.type === ActionType.SelectIsUsingAnimation) {
    const { isUsingAnimation } = action;
    return { ...state, isUsingAnimation };
  }
  if (action.type === ActionType.SelectIsUsingNotesBallet) {
    const { isUsingNotesBallet } = action;
    return { ...state, isUsingNotesBallet };
  }
  return state;
}
