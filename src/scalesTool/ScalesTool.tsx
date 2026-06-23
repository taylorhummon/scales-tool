"use client"

import { useRef, useReducer, useEffect, useCallback } from "react"

import { getInitialState } from "@scalesTool/initialState"
import { Canvas } from "@scalesTool/Canvas"
import { SettingsPanel } from "@scalesTool/SettingsPanel"

import { ActionType } from "@shared/utilities/action"
import { AnimationOption } from "@shared/utilities/clock"
import { useDerived } from "@shared/utilities/derived"
import { registerEventListener } from "@shared/utilities/eventListener"
import {
  Motion,
  getNextMusicalKey,
  getNextIsCaterpillarPattern,
  getNextTriadOffset,
} from "@shared/utilities/motion"
import { reducer } from "@shared/utilities/state"


export function ScalesTool(
): React.ReactNode {
  const domNodeRef = useRef<HTMLDivElement>(null)
  const animationsCountRef = useRef<number>(0)
  const [ state, dispatch ] = useReducer(reducer, getInitialState())
  const derived = useDerived(state)
  const {
    clockSettings,
    motion,
    currentMusicalKey,
    nextMusicalKey,
    currentIsCaterpillarPattern,
    nextIsCaterpillarPattern,
    currentTriadOffset,
    nextTriadOffset,
  } = derived

  // When the user clicks on a button
  const buttonClickHandler = useCallback(
    (motion: Motion) => {
      if (clockSettings.animationOption === AnimationOption.None) {
        dispatch({
          type: ActionType.CompleteMotion,
          nextMusicalKey: getNextMusicalKey({ motion, currentMusicalKey }),
          nextIsCaterpillarPattern: getNextIsCaterpillarPattern({ motion, currentIsCaterpillarPattern }),
          nextTriadOffset: getNextTriadOffset({ motion, currentTriadOffset }),
        })
      } else {
        dispatch({ type: ActionType.ActivateMotion, motion })
      }
    },
    [ dispatch, clockSettings.animationOption, currentMusicalKey, currentIsCaterpillarPattern ],
  )

  // Count how many animations are runnning
  useEffect(() => {
    function animationStartHandler(): void {
      animationsCountRef.current += 1
    }
    return registerEventListener(domNodeRef.current, "animationstart", animationStartHandler)
  })

  // What to do when an animation ends
  useEffect(
    () => {
      function animationEndHandler(): void {
        animationsCountRef.current -= 1
        if (animationsCountRef.current >= 1) return
        dispatch({
          type: ActionType.CompleteMotion,
          nextMusicalKey,
          nextIsCaterpillarPattern,
          nextTriadOffset,
        })
      }
      return registerEventListener(domNodeRef.current, "animationend", animationEndHandler)
    },
    [
      dispatch,
      motion,
      nextMusicalKey,
      nextIsCaterpillarPattern,
      nextTriadOffset,
    ]
  )

  return (
    <div ref={domNodeRef}>
      <Canvas
        derived={derived}
        buttonClickHandler={buttonClickHandler}
      />
      <SettingsPanel
        clockSettings={clockSettings}
        dispatch={dispatch}
      />
    </div>
  )
}
