# DESIGN.md - WhatsApp Messenger Style Token Profile

## Metadata
- **Theme Archetype:** Utilitarian, high-density chat interface (Light & Dark modes)
- **Visual Goal:** Absolute legibility, zero-frills speed, calm trustworthiness

## Color System (Tokens)
- **Primary Text (Light):** `#1c1e21`
- **Primary Accent / Borders:** `#111b21`
- **Dark Mode Background:** `#111b21`
- **Light Mode Surface:** `#ffffff` / `#f0f2f5` (Chat background panel)
- **Brand / Sent Bubble (Light):** `#d9fdd3` (Soft WhatsApp Green)
- **Brand / Action Accent:** `#25d366` (Classic WhatsApp Green)
- **Received Bubble (Light):** `#ffffff`
- **Dark Mode Sent Bubble:** `#005c4b`
- **Dark Mode Received Bubble:** `#202c33`

## Typography
- **Primary Font Family:** `WhatsApp Sans Var`, fallback to system sans-serif (`SF Pro Text`, `Roboto`, `Helvetica Neue`)
- **Chat Body Size:** 14.5px / 20px line-height (optimized for high-density readability)
- **Timestamps:** 11px, muted secondary color (`#667781`)

## Layout & Spacing Scale
- **Base Grid Unit:** 4px scale (Spacing increments: 4, 8, 12, 16, 24px)
- **List Density:** High-density contact/chat rows (minimum row height: 72px)
- **Conversation Padding:** Horizontal screen padding 8px–12px; message bubble max-width capped at 65%–75% of viewport width.

## Elevation & Depth
- **Flat UI Policy:** Zero structural drop shadows on structural list items or headers. 
- **Overlay Shadows:** Soft, diffuse ambient shadows used exclusively for Floating Action Buttons (FABs) and dropdown menus.
