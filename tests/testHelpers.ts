export function cleanHistory(
) {
  if (window.history.length > 1) {
    const stepsBackToFirst = window.history.length - 1;
    window.history.go(- stepsBackToFirst);
  }
  window.history.replaceState(null, "", "/");
}
