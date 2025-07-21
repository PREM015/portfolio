"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: { text: string; className?: string }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const word = words[index].text;
    let currentIndex = 0;

    const type = () => {
      setDisplayedText(word.slice(0, currentIndex + 1));
      currentIndex++;

      if (currentIndex === word.length) {
        clearInterval(interval);
        timeout = setTimeout(() => {
          setIndex((prev) => (prev + 1) % words.length);
        }, 2000);
      }
    };

    setDisplayedText("");
    const interval = setInterval(type, 70); // ✅ Now using `const` as suggested by ESLint

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [index, words]);

  return (
    <div
      className={cn(
        "flex items-center space-x-2 text-base sm:text-xl md:text-3xl lg:text-4xl font-bold",
        className
      )}
    >
      <span className={words[index].className ?? "text-white"}>
        {displayedText}
      </span>
      <motion.span
        className={cn(
          "inline-block w-[3px] h-5 sm:h-6 md:h-8 lg:h-10 bg-blue-500",
          cursorClassName
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </div>
  );
};
