import { MantineProvider, createTheme } from "@mantine/core";

import { DerivedProvider } from "@/contexts/derived";
import { ScalesToolInner } from "@/components/ScalesToolInner";

import "@mantine/core/styles.css";


export default function ScalesTool(
): JSX.Element {
  return (
    <MantineProvider
      theme={createTheme({ primaryColor: "yellow" })}
    >
      <DerivedProvider>
        <ScalesToolInner />
      </DerivedProvider>
    </MantineProvider>
  );
}
