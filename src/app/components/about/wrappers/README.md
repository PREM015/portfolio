# Wrapper Components

This folder contains self-contained wrapper components that handle their own data internally.

## Purpose
- **Clean Page Code**: Keep `about/page.tsx` ultra-clean with no data passing
- **Self-Contained**: Each wrapper imports and manages its own data
- **Reusable**: Can be used in other parts of the application
- **Maintainable**: Changes are isolated to individual components

## Components

| Component | Purpose | Data Source |
|-----------|---------|-------------|
| `TypewriterHero` | Animated typewriter effect | `typewriterWords` |
| `ClientLogosInfinite` | Infinite scrolling client logos | `clientLogos` |
| `TimelineWrapper` | Journey timeline | `journeyTimeline` |
| `SkillsHeader` | Skills section header | N/A (static) |
| `FocusCardsWrapper` | Focus cards display | `focusCards` |
| `ProjectsHeader` | Projects section header | N/A (static) |
| `ProjectsCarousel` | Projects carousel | `projectSlides` |
| `ExpandableCardsWrapper` | Expandable project cards | `expandableCardsData` |
| `ComparisonHeader` | Comparison section header | N/A (static) |
| `CompareWrapper` | Before/after comparison | `beforeAfterComparison` |
| `TestimonialsHeader` | Testimonials section header | N/A (static) |
| `AnimatedTestimonialsWrapper` | Animated testimonials | `testimonials` |

## Usage

```typescript
import * as C from "@/app/components/about";

// In your page
<C.TypewriterHero />
<C.ClientLogosInfinite />
<C.TimelineWrapper />
// ... etc
```

## Adding New Wrappers

1. Create new `.tsx` file in this folder
2. Import required UI components and data
3. Export default component
4. Add export to `../index.ts`

Example:
```typescript
"use client";

import { SomeUIComponent } from "@/app/components/ui/some-component";
import { someData } from "@/app/data/about";

export default function NewWrapper() {
  return <SomeUIComponent data={someData} />;
}
```
