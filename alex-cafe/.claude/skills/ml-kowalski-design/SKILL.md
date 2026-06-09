---
name: ml-kowalski-design
description: Use for all motion, animation, transitions, micro-interactions, hero reveals, card entrances, tab switching, modal/sheet transitions, and CTA feedback. Activates when implementing animated elements, entrance choreography, or interaction smoothness.
version: 1.0.0
---

# ml-kowalski-design — Premium Motion Engine

## Role
Control all animation and motion behavior across the Alex Cafe platform to ensure smooth, intentional, premium-feeling interactions at 60fps.

## When This Skill Applies
- Homepage hero reveal
- Section entrance animations (staggered cards, fade-in blocks)
- Menu category/tab switching
- Offer and event card hover/tap states
- Reservation form transitions and success state
- QR request confirmation feedback
- Sticky CTA appearance/disappearance
- Modal/sheet open-close
- Navigation transitions

## Motion Philosophy
- Motion must **clarify**, **guide**, **reward**, **elevate**
- Motion must **never** distract, delay, confuse, or reduce performance
- Target: 60fps on modern devices
- Respect `prefers-reduced-motion: reduce`

## Technical Rules

### Easing
Use these curves exclusively:
```
--ease-out:    cubic-bezier(0.22, 1, 0.36, 1)    /* elements arriving */
--ease-in-out: cubic-bezier(0.45, 0, 0.55, 1)    /* elements transforming */
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1) /* playful bounce */
```

### Durations
```
--duration-fast:   150ms   /* hover, tap feedback */
--duration-normal: 250ms   /* tab switch, small transition */
--duration-slow:   400ms   /* modal, sheet, section reveal */
--duration-reveal: 600ms   /* hero entrance, major reveal */
```

### Entrance Pattern (staggered reveal)
```css
.animate-entrance {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity var(--duration-reveal) var(--ease-out),
              transform var(--duration-reveal) var(--ease-out);
}
.animate-entrance.visible {
  opacity: 1;
  transform: translateY(0);
}
/* Stagger: add delay per child */
.animate-entrance:nth-child(1) { transition-delay: 0ms; }
.animate-entrance:nth-child(2) { transition-delay: 100ms; }
.animate-entrance:nth-child(3) { transition-delay: 200ms; }
```

### CTA Feedback
- On hover: subtle scale(1.02) + shadow increase
- On tap: scale(0.98) + opacity dip, 150ms
- On success: brief scale bounce via spring easing

### Card Motion
- Hover: translateY(-2px) + shadow-lg, 250ms ease-out
- Tap: scale(0.98), 150ms
- Entrance: fade + slide up, staggered 80-120ms per card

### Tab/Category Switching
- Content crossfade: opacity 0→1, 200ms
- Tab indicator slide: translateX, 250ms ease-out
- No layout shift — use height transition or container query

### Modal/Sheet
- Backdrop: opacity 0→1, 300ms
- Content: translateY(100%) → translateY(0), 400ms ease-out (for bottom sheet)
- Or: scale(0.95) + opacity → scale(1) + opacity(1), 300ms (for centered modal)

## Anti-Patterns (never do)
- No random floating elements
- No excessive parallax scrolling
- No "gaming" style particle effects
- No slow animations (>600ms for UI transitions)
- No animations that block tap/click targets
- No layout-shifting animations on content-heavy elements

## Implementation Notes
- Use CSS transitions as primary animation method
- Use Intersection Observer for entrance animations (only animate when visible)
- Add `.reduce-motion` class when `prefers-reduced-motion: reduce` is detected
- Prefer `transform` and `opacity` over layout properties (width, height, margin)
