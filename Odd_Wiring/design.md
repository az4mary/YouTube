---
name: Odd Wiring
colors:
  surface: '#f4faff'
  surface-dim: '#cbdde8'
  surface-bright: '#f4faff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#e8f6ff'
  surface-container: '#dff1fc'
  surface-container-high: '#d9ebf6'
  surface-container-highest: '#d3e5f1'
  on-surface: '#0c1e26'
  on-surface-variant: '#43474a'
  inverse-surface: '#22333b'
  inverse-on-surface: '#e1f3ff'
  outline: '#74777b'
  outline-variant: '#c4c7ca'
  surface-tint: '#556067'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131d23'
  on-primary-container: '#7b858d'
  inverse-primary: '#bdc8d0'
  secondary: '#006d2f'
  on-secondary: '#ffffff'
  secondary-container: '#5dfd8a'
  on-secondary-container: '#007232'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#042108'
  on-tertiary-container: '#6c8c69'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d9e4ec'
  primary-fixed-dim: '#bdc8d0'
  on-primary-fixed: '#131d23'
  on-primary-fixed-variant: '#3e484f'
  secondary-fixed: '#66ff8e'
  secondary-fixed-dim: '#3de273'
  on-secondary-fixed: '#002109'
  on-secondary-fixed-variant: '#005322'
  tertiary-fixed: '#c9ecc3'
  tertiary-fixed-dim: '#add0a8'
  on-tertiary-fixed: '#042108'
  on-tertiary-fixed-variant: '#304e2f'
  background: '#f4faff'
  on-background: '#0c1e26'
  surface-variant: '#d3e5f1'
  surface-panel: '#f0f2f5'
  surface-card: '#ffffff'
  bubble-sent: '#d9fdd3'
  bubble-received: '#ffffff'
  text-primary: '#1c1e21'
  text-muted: '#667781'
  accent-emerald: '#005c4b'
  border-subtle: '#e9edef'
typography:
  headline-lg:
    fontFamily: Work Sans
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Work Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  title-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 22px
  body-lg:
    fontFamily: Work Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 21px
  body-md:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Work Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-md:
    fontFamily: Work Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  label-sm:
    fontFamily: Work Sans
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 0.5rem
  margin: 0.75rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1rem
  space-xl: 1.5rem
---

## Brand & Style

This design system establishes an ultra-clean, clinical-grade messaging experience centered on psychological phenomena, cognitive quirks, and neurological facts. Borrowing the operational efficiency and zero-friction familiarity of top-tier messaging clients, the interface discards ornamental flourishes in favor of relentless scannability, rapid information absorption, and structural clarity.

The aesthetic fuses utilitarian minimalism with high-density messaging ergonomics:
- **Tone:** Analytical, candid, objective, and intellectually engaging.
- **Visual Style:** High-density, utilitarian flat design. It avoids heavy gradients and dramatic drop shadows, relying entirely on strict spatial rhythm, crisp typography, and disciplined contrast hierarchies.
- **Experience:** Information is consumed effortlessly through chat-style bite-sized factual nuggets, conversational debates, and modular fact streams.

## Colors

The color system is calibrated for hyper-legibility and long reading sessions, drawing direct structural inspiration from utility-first chat environments:
- **Primary (`#111b21`):** Deep charcoal slate used for primary navigational anchors, structural chrome, and prominent typography.
- **Secondary (`#25d366`):** Vibrant transmission green deployed sparingly for interactive affordances, confirmed statuses, and active notification triggers.
- **Tertiary (`#d9fdd3`):** Soft, desaturated mint used for highlighted cognitive insights, user-curated fact modules, and sent-bubble containers.
- **Neutral (`#667781`):** Slate-gray utility neutral reserved for secondary metadata, timestamps, categorization tags, and structural delimiters.

Surfaces default to clean white (`#ffffff`) offset by an engineered panel wash (`#f0f2f5`), offering zero eye fatigue and rapid glanceable contrast.

## Typography

The typographic engine uses **Work Sans** across all roles to achieve a balance between mechanical precision and humanist clarity. Its structured letterforms provide high scannability in dense messaging rows and rapid-read factual streams.

- **Body Text (`body-md` / 14px on 20px leading):** The primary workhorse for bite-sized psychology facts and interaction logs, maintaining comfortable character tracking and distinct punctuation.
- **Labels & Micro-data (`label-sm` / 11px on 14px leading):** Modeled directly on chat message timestamps and status tags to convey publication provenance, psychological categories, and reading time without cluttering the viewport.
- **Headlines:** Kept tight and strictly functional, avoiding exaggerated scale jumps to maintain high vertical viewport efficiency on handheld displays.

## Layout & Spacing

Layout geometry follows a strict 4px base increment (4px, 8px, 12px, 16px, 24px) tuned for mobile-first handheld usage:
- **Screen Margins:** Fixed at `0.75rem` (12px) horizontally to maximize horizontal real estate while insulating content from hardware display radiuses.
- **Gutter Spacing:** `0.5rem` (8px) between columnar items and stream entries.
- **Message & Fact Bubbles:** Capped at an assertive width of 75% to 82% of the viewport width, ensuring line lengths never strain scanning speed.
- **Feed Rhythm:** Dense list items (e.g., topic channels, psychological paradoxes, daily logs) adhere to a 64px–72px standard tap target height, maximizing interactive density without compromising touch accuracy.

## Elevation & Depth

This design system enforces a **Zero-Structural-Shadow Policy**:
- **Base Hierarchy:** Elevation is expressed exclusively through tonal contrast. The surface backdrop (`#f0f2f5`) sets the canvas floor, while factual payloads sit atop sharp `#ffffff` or `#d9fdd3` containers separated by razor-thin `1px` borders (`#e9edef`).
- **Floating Overlays:** Shadows are withheld entirely from content cards, list rows, and headers. They are permitted only on transient contextual elements:
  - **Floating Action Buttons (FAB) & Bottom Drawers:** Rendered with a tight, diffused ambient shadow: `box-shadow: 0 2px 6px rgba(17, 27, 33, 0.16)`.
  - **Tooltips & Popovers:** Rendered with `box-shadow: 0 4px 12px rgba(17, 27, 33, 0.12)`.

## Shapes

A subtle roundedness profile (`roundedness: 1`, base `0.25rem` / 4px) ensures sharp, tool-like efficiency while preventing clinical austerity:
- **Base Surfaces & Cards:** Styled with `4px` or `8px` radii (`rounded-lg`) to mirror compact messaging containers.
- **Fact Bubbles:** Styled with asymmetrical corners (`8px` across three corners and `2px` on the anchor corner) to communicate directional discourse and micro-dialogue context.
- **Input Fields & Search Bars:** Use a disciplined `8px` corner radius. Full pill geometries (`rounded-full`) are reserved solely for unread badges and active filter pills.

## Components

### Fact Bubbles & Chat Cards
- **Fact Bubble (Received / Scientific Source):** Background `#ffffff`, border `1px solid #e9edef`, padding `8px 12px`. Contains factual premise, citation metadata, and `label-sm` timestamp/reference anchor.
- **Insight Bubble (Sent / User Hypothesis):** Background `#d9fdd3`, border none, text `#1c1e21`. Asymmetric cornering aligned flush right.

### Buttons & Quick Interactions
- **Primary Action:** Background `#25d366`, text `#ffffff`, height 40px, font `title-md`, radius 8px. Hover/active shifts to `#005c4b`.
- **Secondary Utility Button:** Background `#ffffff`, border `1px solid #e9edef`, text `#111b21`, height 36px.
- **Quick Reaction Chip:** Background `#f0f2f5`, border `none`, padding `4px 8px`, text `label-md` (`#1c1e21`), interactive active-press tone `#e9edef`.

### Lists & Navigation
- **Topic Channel Row:** 68px fixed height, padding `8px 12px`, bottom border `1px solid #f0f2f5`. Left avatar/glyph slot (48px circle), centered title + last-fact snippet, right-aligned time and notification pill.
- **Filter Chips:** 28px height, `space-sm` horizontal padding, border `1px solid #e9edef`, radius 16px. Active state flips to `#111b21` with `#ffffff` text.

### Inputs
- **Fact Query / Input Field:** Background `#ffffff`, border `1px solid #e9edef`, text `body-md`, padding `8px 12px`, radius 8px. Focus state shifts border color to `#111b21` without outline glow.
- **Checkbox & Radio:** 18px square/circle with crisp 1.5px border (`#667781`). Selected state renders solid `#25d366` with clean white glyph.
