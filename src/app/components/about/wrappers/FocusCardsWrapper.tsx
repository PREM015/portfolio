"use client";

import { FocusCards } from "@/app/components/ui/focus-cards";
import { focusCards } from "@/app/data/about";

export default function FocusCardsWrapper() {
  return <FocusCards cards={focusCards} />;
}
