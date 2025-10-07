"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = <T extends { id?: string | number }>({
  items,
  renderItem,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: T[];
  renderItem: (item: T, idx: number) => React.ReactNode;
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const children = Array.from(scrollerRef.current.children);
      // Clone children for seamless scroll
      children.forEach((child) => {
        scrollerRef.current?.appendChild(child.cloneNode(true));
      });

      // Set speed
      const duration =
        speed === "fast" ? 20 : speed === "normal" ? 35 : 80;
      containerRef.current.style.setProperty("--scroll-duration", `${duration}s`);

      // Set direction
      containerRef.current.style.setProperty(
        "--scroll-direction",
        direction === "left" ? "normal" : "reverse"
      );

      setStart(true);
    }
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <div
        ref={scrollerRef}
        className={cn(
          "flex gap-8 w-max",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <React.Fragment key={item.id || idx}>{renderItem(item, idx)}</React.Fragment>
        ))}
      </div>

      <style jsx>{`
        .animate-scroll {
          display: flex;
          animation: scroll var(--scroll-duration) linear infinite;
          animation-direction: var(--scroll-direction);
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};
