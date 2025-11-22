"use client";

import { motion } from "framer-motion";
import { TypewriterEffectSmooth } from "@/app/components/ui/typewriter-effect";
import { typewriterWords } from "@/app/data/about";

export default function TypewriterHero() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
      <TypewriterEffectSmooth words={typewriterWords} />
    </motion.div>
  );
}
