import { Accordion, Stack } from "@mantine/core";

import { AnimationTypeChooser } from "@/components/settings/AnimationTypeChooser";
import { SolfegeSwitch } from "@/components/settings/SolfegeSwitch";

import cssModule from "@/components/settings/SettingsAccordion.module.scss";


export function SettingsAccordion(
): JSX.Element {
  return (
    <Accordion
      classNames={{
        root: cssModule["accordion-root"],
        item: cssModule["accordion-item"],
        label: cssModule["accordion-label"],
      }}
      order={3}
      variant="contained"
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
            <AnimationTypeChooser />
            <SolfegeSwitch />
          </Stack>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
