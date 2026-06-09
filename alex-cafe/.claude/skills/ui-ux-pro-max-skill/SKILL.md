---
name: ui-ux-pro-max-skill
description: Use for all responsive design, mobile-first decisions, touch optimization, cross-platform UX, in-app browser compatibility, CTA placement, and conversion flow optimization. Activates when building responsive layouts, forms, navigation, or any user flow.
version: 1.0.0
---

# ui-ux-pro-max-skill — Multi-Platform Intelligence

## Role
Guarantee that the entire user experience is responsive, touch-friendly, mobile-first, and operational across web, iOS, Android, Telegram webview, and WhatsApp-opened browser contexts.

## When This Skill Applies
- Responsive layout decisions
- Mobile-first component design
- CTA placement and sizing
- Form design and validation UX
- Navigation behavior
- In-app browser compatibility
- Touch target sizing
- Conversion flow optimization

## Core Principles

### Mobile-First, Always
Every component and page is designed for mobile first, then enhanced for larger screens.

```
Mobile:   ≤ 640px   — single column, thumb-friendly, minimal
Tablet:   641-1024px — 2 columns, more detail visible
Desktop:  ≥ 1025px   — full layout, hover states, more density
```

### Thumb-First CTA Placement
- Primary CTAs must be in the bottom 40% of the viewport on mobile
- Use `position: sticky; bottom: 0` for critical actions
- Minimum touch target: 48px x 48px
- Minimum spacing between touch targets: 8px

### In-App Browser Resilience
The experience must work in:
- Instagram in-app browser (limited API access)
- Facebook in-app browser
- Telegram webview
- WhatsApp-opened browser contexts

**Rules:**
- No reliance on `window.open()` or popups
- No complex scroll-jacking
- No hover-dependent critical interactions
- No heavy visual effects that harm weaker phones
- Test with user-agent strings from these browsers

## Responsive Rules by Component

### Header/Navigation
- Mobile: hamburger menu, logo left, essential icons right
- Desktop: horizontal nav, logo center or left, full menu visible
- Sticky header: compact on scroll, transparent on hero

### Homepage Hero
- Mobile: full width, text overlay on image, CTAs stacked vertically at bottom
- Desktop: text left, image right or full background, CTAs side by side

### Menu Page
- Mobile: horizontal scrollable tabs, items full width
- Desktop: sidebar or centered tabs, items in 2-3 column grid

### Reservation Form
- Mobile: full-width inputs, stacked vertically, submit button sticky at bottom
- Desktop: max-width 560px centered, inputs can be inline where logical

### Cards (Offers, Events, Menu Items)
- Mobile: full width, single column
- Tablet: 2 columns
- Desktop: 3 columns (or as appropriate)

### Footer
- Mobile: stacked sections, accordion for links
- Desktop: multi-column layout

## Form UX Rules
- Labels above inputs (never placeholder-only)
- Minimum input height: 48px on mobile
- Clear focus states with visible ring
- Inline validation only after field is blurred
- Success states: prominent, celebratory, with clear next action
- Never require more than 5 fields for MVP forms

## CTA Hierarchy
Every page must have exactly:
1. **Primary CTA** — the one thing we want the user to do (most prominent)
2. **Secondary CTA** — alternative action (less prominent)
3. **Tertiary CTA** — escape hatch (WhatsApp, phone, etc.)

Visual treatment:
- Primary: solid accent color, large, high contrast
- Secondary: outline or lighter weight
- Tertiary: text link or icon button

## Accessibility Minimums
- Color contrast: 4.5:1 for text, 3:1 for large text
- Focus visible on all interactive elements
- Semantic HTML (nav, main, section, article, footer)
- Alt text on all images
- Form inputs associated with labels
- Skip-to-content link

## Anti-Patterns
- No desktop-only thinking
- No hidden primary actions on mobile
- No hover-dependent critical interactions
- No heavy visual behavior on weaker phones
- No broken in-app browser assumptions
- No forms with more than 5-6 fields in MVP
- No friction-heavy reservation flows
