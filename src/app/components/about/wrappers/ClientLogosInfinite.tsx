"use client";

import { InfiniteMovingCards } from "@/app/components/ui/infinite-moving-cards";
import { clientLogosData } from "@/app/data/about";

export default function ClientLogosInfinite() {
  return (
    <div className="py-12">
      <h2 className="text-4xl font-bold text-center mb-8">Trusted By</h2>
      <InfiniteMovingCards 
        items={clientLogosData} 
        renderItem={(logo) => (
          <div className="flex items-center justify-center h-20 px-8 bg-white/10 rounded-lg backdrop-blur-sm">
            <span className="text-2xl font-bold text-white">{logo.name}</span>
          </div>
        )} 
        speed="slow" 
        pauseOnHover={true} 
      />
    </div>
  );
}
