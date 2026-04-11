import { AnimationTypeSelector } from "@/components/settings/AnimationTypeSelector";

import type { Dispatch, SetStateAction } from "react";

import { AnimationType } from "@/enumerations";
import { buildClassString } from "@/utilities/css";
import type { State } from "@/utilities/state";

import cssModule from "@/components/settings/SettingsAccordion.module.scss";


interface SettingsAccordionProps {
  animationType: AnimationType;
  isUsingSolfege: boolean;
  setState: Dispatch<SetStateAction<State>>;
}


export function SettingsAccordion({
  animationType,
  isUsingSolfege,
  setState
}: SettingsAccordionProps): JSX.Element {
  return (
    <details
      className={buildClassString(cssModule, ["settings-accordion"])}
    >
      <summary
        className={buildClassString(cssModule, ["settings-summary"])}
      >
        Settings
      </summary>
      <AnimationTypeSelector
        animationType={animationType}
        setState={setState}
      />
    </details>
  );
}
