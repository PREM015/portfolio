"use client";

import { Carousel } from "@/app/components/ui/slider";
import { projectSlides } from "@/app/data/about";

export default function ProjectsCarousel() {
  return <Carousel slides={projectSlides} />;
}
