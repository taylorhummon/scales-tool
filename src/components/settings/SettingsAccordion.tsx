import { Accordion, Stack } from "@mantine/core";

import { AnimationTypeChooser } from "@/components/settings/AnimationTypeChooser";
import { SolfegeSwitch } from "@/components/settings/SolfegeSwitch";

import settingsAccordionCssModule from "@/components/settings/SettingsAccordion.module.scss";


export function SettingsAccordion(
): JSX.Element {
  return (
    <Accordion
      classNames={{
        root: settingsAccordionCssModule["accordion-root"],
        label: settingsAccordionCssModule["accordion-label"],
      }}
      order={3}
      chevronPosition="left"
      variant="unstyled"
    >
      <Accordion.Item
        key={"Settings"}
        value={"Settings"}
      >
        <Accordion.Control>
          Settings
        </Accordion.Control>
        <Accordion.Panel>
          <Stack
            align="stretch"
            gap="lg"
          >
            <SolfegeSwitch />
            <AnimationTypeChooser />
          </Stack>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
