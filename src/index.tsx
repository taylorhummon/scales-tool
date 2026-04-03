import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import ScalesTool from "@/components/ScalesTool";


const container = document.getElementById("scales-tool-mount-point") as HTMLElement;
const root = createRoot(container);
root.render(
  <StrictMode>
    <ScalesTool />
  </StrictMode>
);
