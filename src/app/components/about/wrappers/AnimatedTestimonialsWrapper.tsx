"use client";

import { AnimatedTestimonials } from "@/app/components/ui/testimonial-card";
import { testimonials } from "@/app/data/about";

export default function AnimatedTestimonialsWrapper() {
  return <AnimatedTestimonials testimonials={testimonials} autoplay={true} />;
}
