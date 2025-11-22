"use client";

import { Compare } from "@/app/components/ui/compare";
// ❌ WRONG: import { beforeAfterComparison } from "@/app/data/about/beforeAfterComparison";
// ✅ CORRECT - Import directly from the file:
import { beforeAfterComparison } from "@/app/data/about/beforeAfterComparison";

export default function CompareWrapper() {
  return (
    <div className="flex justify-center">
      <Compare 
        firstImage={beforeAfterComparison.firstImage} 
        secondImage={beforeAfterComparison.secondImage} 
        className="w-full max-w-4xl" 
        autoplay={true} 
        autoplayDuration={3000} 
      />
    </div>
  );
}