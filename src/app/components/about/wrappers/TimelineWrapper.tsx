"use client";

import { Timeline } from "@/app/components/ui/timeline";
import { journeyTimeline } from "@/app/data/about/timeline.data";

export default function TimelineWrapper() {
  return <Timeline data={journeyTimeline} />;
}
