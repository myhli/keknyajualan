# Design Direction: keknyaJualan

## Identity & Voice
- Brand: keknyaJualan
- Character: Curated digital goods atelier, editorial catalog, transparent inventory kiosk.
- Inspiration: Leonhart portfolio (`https://leonhart.vercel.app/`) — typographic confidence, structured metadata, authentic craftsmanship, zero generic marketing slop.

## Color Palette (黎明の教会 / Dawn Church on White)
- Canvas: Pure White `#ffffff`
- Primary Dark: Shadow Navy `#0b2b51` (Deepest tone for text, primary CTA buttons, high-contrast borders)
- Secondary Tone: Misty Indigo `#3c4d70` (Secondary headers, active states, focus rings)
- Muted Metadata & Subtle Lines: Soft Graphite `#7a7b8f` (Muted labels, time indicators, borders)
- Earth Neutral: Slate Mauve `#807073` (Subtle divider and tone)
- Warm Accent: Warm Wood `#c5a8a1` (Soft almond blush wood tone for highlights, tags, and selection)

## Layout & Interaction
- Product Presentation: Full-width vertical stack with prominent typographic scale.
- Interactive Disclosure: Accessible HTML `<details>` and `<summary>` accordion. Descriptions and specifications remain collapsed until clicked, keeping initial scan friction low and revealing actionable WhatsApp checkout upon expansion.

## Typography & Hierarchy
- Display Font: Anton (Display / Headings: bold condensed uppercase typography, balanced line breaks `text-balance`)
- Text Font: Manrope (Body copy, specifications, UI text, labels)
- Metadata: Clean tabular figures (`tabular-nums`), uppercase micro-labels with restrained tracking.
- Zero decorative glyphs: No sparkles (`✦`), no kaomoji, no decorative arrows (`→`).

## Anti-Slop Discipline
- No fake statistics or fabricated trust claims.
- No boilerplate "Hero + 3 feature cards" template.
- Direct inventory presentation: clear plan details, verified stock count, unambiguous WhatsApp action.
- Discrete, purposeful interactive states: distinct disabled state for depleted stock, keyboard-accessible focus rings.

## Dials
- ENERGY: 2
- RHYTHM: 2
- MOTION: 1
