"use client";

import type { ComponentType } from "react";
import { ExpandableCardDemo } from "@/app/components/ui/expandable-card";
import { expandableCards } from "@/app/data/about/achievements.data"; // or correct path

const ExpandableCardDemoAny = ExpandableCardDemo as unknown as ComponentType<{
  expandableCards: typeof expandableCards;
}>;

export default function ExpandableCardsWrapper() {
  return (
    <div className="py-12">
      <h3 className="text-3xl font-bold text-center mb-8">Explore Projects</h3>
      <ExpandableCardDemoAny expandableCards={expandableCards} />
    </div>
  );
}
