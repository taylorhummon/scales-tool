export function registerEventListener(
  element: Window | HTMLElement | null,
  eventType: string,
  listener: (event: any) => void,
): () => void {
  if (element) element.addEventListener(eventType, listener)
  return () => {
    if (element) element.removeEventListener(eventType, listener)
  }
}
