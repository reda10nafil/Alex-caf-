---
name: impeccable-design
description: Use for all layout, spacing, alignment, visual hierarchy, typography, grid systems, and component consistency decisions. Activates when building page layouts, arranging content blocks, designing card grids, or structuring forms.
version: 1.0.0
---

# impeccable-design — Layout Optimizer

## Role
Enforce excellent spacing, strong alignment, visual hierarchy, typographic rhythm, scanability, premium composition, and component consistency across all pages.

## When This Skill Applies
- Homepage section composition
- Menu page category layout and item card grids
- Offer and event card layouts
- Reservation form structure and input spacing
- Footer and contact information blocks
- Mobile layout collapse behavior
- All component-level spacing decisions

## Core Principles

### Spacing Must Feel Deliberate
- All margins and padding come from the spacing scale: `--space-1` through `--space-32`
- Never use arbitrary pixel values
- Sections use `--section-padding` (80px desktop, 48px mobile)
- Cards use consistent inner padding: `--space-6` to `--space-8`
- Between elements: minimum `--space-2` (8px), typically `--space-4` (16px)

### Visual Hierarchy
- **Level 1**: Page title / Hero headline — `--text-4xl` to `--text-5xl`, display font, bold
- **Level 2**: Section headings — `--text-2xl` to `--text-3xl`, display font, semibold
- **Level 3**: Card titles / Subheadings — `--text-lg` to `--text-xl`, body font, semibold
- **Level 4**: Body text — `--text-base` to `--text-md`, regular weight
- **Level 5**: Meta / Captions — `--text-sm` to `--text-xs`, muted color

### Grid System
```
Mobile:  1 column,  padding: 0 --space-5 (20px)
Tablet:  2 columns, padding: 0 --space-8 (32px)
Desktop: 12-column grid, max-width 1200px, centered, padding: 0 --space-8
```

### Component Consistency
- All cards share: same border-radius (`--radius-lg`), same shadow level, same inner padding
- All buttons share: same height (48px mobile, 44px desktop), same border-radius, same font size
- All inputs share: same height (48px), same border style, same focus ring
- Section headers share: same margin-bottom (`--space-8`), same text alignment

## Layout Rules by Page

### Homepage
- Hero: full viewport height on mobile, 80vh on desktop
- Sections: alternating `--bg-primary` and `--bg-secondary` for rhythm
- Content max-width: 1200px, centered
- Section spacing: `--section-padding` between major blocks
- Between heading and content: `--space-6`

### Menu
- Category tabs: horizontal scroll on mobile, centered on desktop
- Items grid: 1 column mobile, 2 columns tablet, 3 columns desktop
- Item card: image top (16:9), content below, price right-aligned
- Category spacing: `--space-12` between category groups

### Reservation Form
- Single column, max-width 560px, centered
- Input spacing: `--space-5` between fields
- Labels above inputs, `--space-2` gap
- Submit button: full-width on mobile, auto-width on desktop

### Offers / Events
- Cards: 1 column mobile, 2 columns tablet, 3 columns desktop
- Card spacing: `--space-6` gap
- Featured card: spans full width, larger image

## Anti-Patterns
- Never over-densify content — breathing room is premium
- Never center everything — use intentional alignment (left for text, center for hero)
- Never use identical repeated blocks without rhythm variation
- Never use inconsistent spacing between similar sections
- Never hide primary actions below the fold on mobile
