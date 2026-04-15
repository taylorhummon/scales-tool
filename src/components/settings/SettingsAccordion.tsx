import { AnimationTypeChooser } from "@/components/settings/AnimationTypeChooser";
import { buildClassString } from "@/utilities/css";

import cssModule from "@/components/settings/SettingsAccordion.module.scss";


export function SettingsAccordion(
): JSX.Element {
  return (
    <details
      className={buildClassString(cssModule, ["settings-accordion"])}
    >
      <summary
        className={buildClassString(cssModule, ["settings-summary"])}
      >
        Settings
      </summary>
      <AnimationTypeChooser />
    </details>
  );
}
