import { DerivedProvider } from '@/contexts/derived';
import { ScalesToolInner } from "@/components/ScalesToolInner";


export default function ScalesTool(
): JSX.Element {
  return (
    <DerivedProvider>
      <ScalesToolInner />
    </DerivedProvider>
  );
}
