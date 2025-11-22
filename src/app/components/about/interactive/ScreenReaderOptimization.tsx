'use client';
export default function ScreenReaderOptimization() {
  return (
    <div className="sr-only" aria-live="polite" aria-atomic="true">
      Screen reader optimizations active
    </div>
  );
}
