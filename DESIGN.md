---
name: Emery Reszka — Recruiter View
description: A swim-meet program. Facts read as a heat-sheet entry; projects swim in lanes and touch the wall.
colors:
  teal: "#00595F"
  teal-d: "#00444A"
  gold: "#F0B429"
  float-shade: "#C98F10"
  water: "#D9EEEC"
  paper: "#F6F8F7"
  sheet: "#FFFFFF"
  ink: "#0C1719"
  mute: "#44585A"
  rule: "#B9CBCA"
typography:
  display:
    fontFamily: "Big Shoulders Display, Arial Narrow, sans-serif"
    fontSize: "clamp(3.25rem, 10.5vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.86
    letterSpacing: "0.005em"
  headline:
    fontFamily: "Big Shoulders Display, Arial Narrow, sans-serif"
    fontSize: "clamp(3rem, 9vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "0.005em"
  lane-number:
    fontFamily: "Big Shoulders Display, Arial Narrow, sans-serif"
    fontSize: "clamp(4rem, 9vw, 7.5rem)"
    fontWeight: 900
    lineHeight: 0.8
  title:
    fontFamily: "Big Shoulders Display, Arial Narrow, sans-serif"
    fontSize: "clamp(2rem, 4.4vw, 3.25rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "0.01em"
  plate:
    fontFamily: "Big Shoulders Display, Arial Narrow, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.08em"
  standfirst:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.125rem, 2.1vw, 1.4375rem)"
    fontWeight: 500
    lineHeight: 1.38
  lead:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.3125rem"
    fontWeight: 600
    lineHeight: 1.4
  body:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  body-small:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
  data-label:
    fontFamily: "Courier Prime, Courier New, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    letterSpacing: "0.04em"
  data-value:
    fontFamily: "Courier Prime, Courier New, monospace"
    fontSize: "0.9375rem"
    fontWeight: 700
    lineHeight: 1.4
rounded:
  none: "0px"
  float: "7px"
spacing:
  edge: "clamp(1rem, 4vw, 3rem)"
  action-gap: "0.625rem"
  lane-gap: "clamp(1.25rem, 3vw, 2.75rem)"
  section: "clamp(3.5rem, 9vw, 6.5rem)"
  measure: "64ch"
  max: "76rem"
components:
  button-primary:
    backgroundColor: "{colors.teal}"
    textColor: "{colors.sheet}"
    typography: "{typography.body-small}"
    rounded: "{rounded.none}"
    padding: "0.7rem 1.2rem"
    height: "50px"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.sheet}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body-small}"
    rounded: "{rounded.none}"
    padding: "0.7rem 1.2rem"
    height: "50px"
  button-secondary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.sheet}"
  button-quiet:
    backgroundColor: "transparent"
    textColor: "{colors.mute}"
    typography: "{typography.body-small}"
    rounded: "{rounded.none}"
    padding: "0.7rem 1.2rem"
    height: "50px"
  button-quiet-hover:
    backgroundColor: "{colors.water}"
    textColor: "{colors.ink}"
  heat-sheet-cell:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    typography: "{typography.data-value}"
    rounded: "{rounded.none}"
    padding: "0.75rem 0.9rem 0.9rem"
  touchpad:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    typography: "{typography.plate}"
    rounded: "{rounded.none}"
    width: "3.25rem"
  touchpad-touched:
    backgroundColor: "{colors.teal}"
    textColor: "{colors.sheet}"
  block-plate:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.sheet}"
    typography: "{typography.plate}"
    rounded: "{rounded.none}"
    padding: "0.45em 0.5em 0.4em"
  nav-link:
    textColor: "{colors.mute}"
    typography: "{typography.body-small}"
    height: "44px"
  dock:
    backgroundColor: "{colors.paper}"
    padding: "0.5rem clamp(1rem, 4vw, 3rem)"
---

# Design System: Emery Reszka — Recruiter View

Scope: this file's frontmatter and this section govern the recruiter view (`index.html`, `pro.css`, `pro.js`). The retro desktop-OS easter egg (`desktop.html`, `style.css`, `basement.js`) is a second world, not bound by anything here; it is recorded below under "Design System: The Basement (desktop.html)", with its tokens in `.impeccable/design.basement.json`.

## Overview

**Creative North Star: "The Meet Heat Sheet"**

The page is a printed swim-meet program on pool-deck paper. The candidate's facts are one entry on a heat sheet: condensed block type for the swimmer's name, a monospaced results row under a double rule, a numbered starting-block plate under the headshot. The projects are swimmers in lanes. Lanes are separated by lane ropes of alternating gold and white floats, each lane has a pool-bottom line that ends in a T at the wall, and each lane finishes on a touchpad that flashes gold when the lane arrives and then holds teal.

Density is that of a printed program: flat paper and water, hairline and dashed rules, square corners, very little ornament that does not come from the pool. Teal carries lines, T-marks and the one primary action; pale water fills the lanes and the closing wall; gold lives on the floats and in the moment of touch. Motion is scroll-driven and bold but has one grammar: a single staggered load sequence, then transforms tied to scroll position. Everything is laid out in its settled state before any script runs.

The world rejects the category default of a name-and-photo hero over a grid of project cards that fade up.

**Key Characteristics:**
- Pool-deck paper, pale water sections, ink text, one teal accent, gold reserved for floats and touch.
- Three faces with fixed jobs: Big Shoulders Display for names, numbers and titles; Schibsted Grotesk for prose; Courier Prime for heat-sheet data only.
- Structure drawn from the pool: lane ropes as dividers, lane lines ending in a T, touchpads at the wall, double rules over tabular rows.
- Square corners everywhere except the rope floats.
- One load sequence plus scroll-linked transforms; reduced motion removes travel but keeps changes of state.

## Colors

A cool, low-chroma pool palette (paper, water, ink) with one saturated teal and one warm gold that appears only where the pool puts it.

### Primary
- **Lane-Line Teal** (#00595F): pool-bottom lane lines and T-marks, the primary action fill, link text, lane-number outlines, the touched touchpad's settled state, focus rings on links, text selection, the scrollbar thumb.
- **Deep Lane Teal** (#00444A): section titles set on water, the rope cord, labels in the stack and history lists. Teal one step darker where it sits on the pale water.

### Secondary
- **Float Gold** (#F0B429): the gold beads of the lane rope, the float bead that marks the swimming entry in the history list, and the flash of the touchpad at the instant a lane touches the wall.
- **Float Shade** (#C98F10): the grooves and outline of a gold float. It never appears apart from a float.

### Neutral
- **Pool Water** (#D9EEEC): the lanes section and the contact wall; the wipe fill of a quiet button on hover; the ground behind the headshot.
- **Pool-Deck Paper** (#F6F8F7): the page ground and the phone dock.
- **Sheet White** (#FFFFFF): printed surfaces sitting on the paper or water: the heat-sheet row, touchpads at rest, screenshot mats, the white float beads.
- **Program Ink** (#0C1719): all primary text, 2px borders on buttons, photo, touchpads and screenshots, the double rule, the starting-block plate.
- **Muted Ink** (#44585A): secondary text (blurbs, what-was-hard notes, stack lists, nav links, quiet buttons, heat-sheet column heads).
- **Rule Grey** (#B9CBCA): dashed separators between heat-sheet cells and list rows, Decorative only; never used for text.

### Named Rules
**The Float Rule.** Gold appears only on a lane-rope float (including a single float bead used as a marker) or in the touch flash. It is never a text color, a button, a border or a highlight.

**The One Teal Rule.** Teal is the only accent. If something needs emphasis and it is not a line, a T, a link or the primary action, it gets ink and weight, not teal.

## Typography

**Display Font:** Big Shoulders Display (with Arial Narrow)
**Body Font:** Schibsted Grotesk (with Helvetica Neue, Arial)
**Label/Mono Font:** Courier Prime (with Courier New)

**Character:** Condensed, heavy, uppercase block type like a meet program's event headers, over a plain grotesque that reads like a person talking. The typewriter mono is the heat sheet printing its results.

### Hierarchy
- **Display** (900, clamp(3.25rem, 10.5vw, 6rem), 0.86, uppercase): the swimmer's name only. Each line rises from a clipped mask on load.
- **Headline** (900, clamp(3rem, 9vw, 6rem), 0.9, uppercase, single line): section bands ("What I've built", "Stack", "School and jobs", "Contact"). Ink on paper, deep teal on water.
- **Lane Number** (900, clamp(4rem, 9vw, 7.5rem), 0.8): outlined in teal with a 2px stroke and transparent fill; fills solid teal when the lane touches.
- **Title** (800, clamp(2rem, 4.4vw, 3.25rem), 0.95, uppercase): project names in lanes.
- **Plate** (800, 1.375rem, 0.08em tracking, uppercase): touchpad status and the starting-block plate.
- **Standfirst** (500, clamp(1.125rem, 2.1vw, 1.4375rem), 1.38, max 34ch): the one-sentence introduction under the name; the contact ask uses the same voice.
- **Lead** (600, 1.3125rem, 1.4, max 40ch): the one-line "what it is" under each project title.
- **Body** (400, 1.0625rem, 1.6, max 64ch): prose.
- **Body Small** (400–600, 0.9375rem): buttons, nav, blurbs, what-was-hard notes, history dates.
- **Data Label** (Courier Prime 400, 0.8125rem, 0.04em, uppercase, muted): heat-sheet column heads.
- **Data Value** (Courier Prime 700, 0.9375rem, 1.4): heat-sheet entries; the same face at 0.8125rem sets stack lists and touchpad dates.

### Named Rules
**The Printed Data Rule.** Courier Prime sets data only: heat-sheet heads and values, stack lists, touchpad dates. Prose, buttons and headings never use it.

**The Tabular Figures Rule.** Tabular figures are on only where figures line up (touchpads, the plate). Prose keeps proportional figures, because Schibsted's tabular setting also puts commas and periods on the grid.

## Layout

A single column capped at 76rem with a fluid edge (clamp(1rem, 4vw, 3rem)). The entry is a grid: name and standfirst left, starting block right; the heat-sheet row spans full width; actions sit directly under it with the blurb to the right; a lane line closes the entry. The heat-sheet row is five proportional columns (1.55 / 0.75 / 1.15 / 1.15 / 1.4) separated by dashed rules.

The lanes section runs full-bleed on water. Each lane is a four-column grid: sticky lane number, body, screenshot, and a 3.25rem touchpad at the wall; text-only lanes let the body span the screenshot column. Lanes breathe (clamp(2rem, 4vw, 3rem) top, plus 60px at the bottom for the lane line and rope). The closing aside sits on the lanes' grid in the body column. Stack and history ("deck" sections) return to paper, as two-column 15rem / fluid tables under a double rule.

Below 60rem the heat-sheet row becomes two columns with the degree and the last two cells spanning, lanes stack (number, body, screenshot, pad), and the touchpad turns horizontal and sits at the end. Below 40rem the nav becomes a scrolling strip between dashed rules, the actions become a two-up grid with the résumé spanning, and a phone dock appears.

Touch targets are 44px minimum everywhere; buttons are 50px (48px on phones, 56px at the wall).

## Elevation & Depth

Flat. Depth comes from printed layers (sheet white on paper or water), 2px ink borders and z-order at the wall. The only shadow in the system belongs to the screenshots, a soft teal-tinted drop that reads as the image floating over the water.

### Shadow Vocabulary
- **Underwater drop** (`box-shadow: 0 18px 40px -18px rgba(0, 68, 74, .45)`): screenshots in lanes only. Removed in print.

### Named Rules
**The Wall Is On Top Rule.** A screenshot swims in under the touchpad, never over it (the pad sits above the shot in z-order).

## Shapes

Square corners everywhere: buttons, cells, photo, plates, pads, screenshots, the dock. The only rounded forms are the lane-rope floats (7px on a 14px bead) and the single float bead that marks the swimming entry in history. Borders are 2px ink for things you can touch or that frame a picture, 1px mute for quiet buttons, 4px double ink over tabular data, and 1px dashed rule grey between rows and cells.

The signature geometry is the pool's: the lane line (a 6px teal stripe ending in a 6×28px T bar at the wall), the rope (a 64×18px repeating float pair), and a large T-mark on the pool floor behind the contact section at 14% opacity.

## Components

### Buttons
Square, bordered and weighty, like stamped tabs on a program.
- **Shape:** square corners (0px), 2px ink border, 50px minimum height, 0.7rem × 1.2rem padding, 600 weight at 0.9375rem, optional 1em inline SVG icon.
- **Primary:** teal fill, white text, teal border. One per group: résumé in the entry and dock, email at the wall.
- **Secondary:** transparent, ink text, ink border.
- **Quiet:** 1px mute border, mute text, 500 weight; for GitHub and LinkedIn.
- **Hover:** a fill wipes in from the left behind the label over 0.45s (ink for primary and secondary, water for quiet); text turns white (ink on quiet). Active presses down 2px. Focus: 3px ink outline, 3px offset.

### Heat-Sheet Row
The entry's facts as one printed result line.
- **Frame:** 4px double ink rule on top, 1px ink rule below, white sheet ground, dashed rule-grey cell dividers.
- **Cells:** Courier Prime column head (uppercase, muted) over a bold Courier Prime value. Cells step in one after another on load (0.07s apart).
- The same double-rule-over-dashed-rows grammar sets the Stack and School-and-jobs tables, in Schibsted with deep-teal labels.

### Starting Block
The headshot on a block: 2px ink frame on three sides over water, closed by an ink plate carrying the school and class year in plate type. The photo surfaces from the bottom on load.

### Lane Rope
The page's divider: a repeating gold-and-white float pair on a deep-teal cord, 18px tall. It opens the page (pulled in from the left on load), tops the pool, runs under every lane edge to edge, and tops the wall. Floats roll with scroll (±0.45px per scrolled pixel), alternating direction lane to lane.

### Lane Line with T
A 6px teal stripe ending in a 28px T bar at the wall. It closes the entry (drawn left to right on load) and runs along the bottom of each lane, drawing toward the wall as the lane arrives.

### Touchpad
The status of each project at the wall.
- **Rest:** white, 2px ink border, plate type set vertically on desktop (horizontal on phones), optional Courier Prime date.
- **Touch:** when the lane's arrival passes 0.97, the pad flashes gold with ink text (widening 18% and settling) and then holds teal with white text; the lane number fills teal at the same moment. This is the only place gold moves.

### Navigation
Masthead: the name in plate type left, four section links in muted Body Small with a teal underline that draws in from the left on hover. On phones the links become a horizontally scrolling strip between dashed rules. The masthead carries no link to the basement; that door is at the bottom of the page.

### Basement Strip
The page's last element, under the contact wall: a full-bleed Program Ink band, the deepest point of the pool. Left, "The basement" in plate type, sheet white inside a 2px sheet-white frame (the starting-block plate, inverted); centre, one Body Small line in sheet white naming the two games; right, a secondary action inverted for ink (`.action--dark`: 2px sheet-white border, white text, a sheet-white wipe that turns the label ink) with a stairs icon, "Go down to the basement". One row on desktop; stacked below 40rem with a full-width action. The lanes' closing aside links down to it (`#basement`). The phone dock stays off while it is on screen. Hidden in print.

### Phone Dock
Below 40rem, a fixed bar on paper with a 2px ink top border holds résumé (primary) and email (secondary) side by side. It slides up once the entry's actions leave the screen and away again at the contact wall, which carries the same two actions.

### Motion Grammar
- **Load:** one staggered sequence, about 1.5s total: rope pulls in, name lines rise, photo surfaces, standfirst fades up, heat-sheet cells step in, actions and blurb follow, lane line draws. Ease `cubic-bezier(.16, 1, .3, 1)`.
- **Scroll:** script feeds `--sy` (scroll offset), `--p` (arrival, 0→1 by 40% up the viewport) and `--q` (passage through the viewport). Band titles slide horizontally with `--q`; screenshots swim in along the lane and unclip toward the wall with `--p`; lane numbers lift with `--p`; ropes roll with `--sy`; the wall's T-mark draws up with `--p`.
- **Reduced motion:** all animation and travel stop (no slides, rises, rolling ropes or dock transition); state still changes in place: lane lines draw, numbers fill, pads flash gold and settle to teal.

## Do's and Don'ts

### Do:
- **Do** separate major sections with the lane rope and close a run of content with a lane line ending in a T.
- **Do** keep gold on floats and the touch flash (The Float Rule).
- **Do** set tabular facts as a heat-sheet row: 4px double ink rule, dashed cell dividers, Courier Prime heads and values.
- **Do** keep every corner square except a rope float.
- **Do** lay everything out in its settled, visible position in CSS, and let script only feed `--sy`, `--p` and `--q`.
- **Do** keep state changes (lane line, number fill, pad flash) under reduced motion while removing all travel.
- **Do** hold 44px minimum touch targets and 50px buttons, and keep the print stylesheet stripping ropes, lines, T-marks and shadows.

### Don't:
- **Don't** use Courier Prime for prose, buttons or headings.
- **Don't** put gold on text, borders, focus rings, links or labels.
- **Don't** add a second accent color or a color gradient; teal is the only accent and surfaces are flat.
- **Don't** round buttons, cards, photos or pads.
- **Don't** add shadows beyond the underwater drop on screenshots, and never a hard offset shadow.
- **Don't** build a name-and-photo hero over a grid of project cards that fade up.
- **Don't** hide content until script runs or make anything depend on scroll to become visible.

# Design System: The Basement (desktop.html)

Scope: this section governs the easter egg only (`desktop.html`, `style.css`, `basement.js`). It is a second world with its own palette, faces and rules; nothing above binds it and nothing here binds the recruiter view. The YAML frontmatter at the top of this file belongs to the recruiter view, so The Basement's tokens (colors, typography, spacing, components, motion, sidecar snippets) live in `.impeccable/design.basement.json`, which follows the same schema as `.impeccable/design.json` and is normative for this section.

## Overview

**Creative North Star: "The Basement PC"**

The portfolio is an old computer in the basement. It boots through a black text-mode POST into a Windows 98 desktop: teal ground, grey bevelled chrome, navy title bars, a taskbar with a Start button and a clock. Double-clicking Internet Explorer opens a 940px IE5-style window on "Emery's Games & Software Zone", and each project is its own webmaster's page from about 2000, joined by a webring: WordArt banner, marquee, hit counter, 88x31 buttons, under-construction stripes, a facts table, a "last updated" line. Two layers share one stylesheet: the shell speaks Windows 98 system colours and Tahoma; the sites inside the browser each carry their own ground, palette and faces.

Everything is flat colour with 1px pixel discipline. Depth is the bevel (white and light grey on the top-left, dark grey and black on the bottom-right), never a soft shadow. Motion is stepped: the zoom rectangle, the throbber, the progress segments and the flying pages all animate in `steps()`, and the boot, marquee and blink collapse under reduced motion. The joke has a floor: every real button opens the real thing, the counter only counts you, the status bar tells the truth about where a link goes, and the decoy download ads are the only things that lie, and they lie into a Windows error box.

The world refuses the category default of a Win95 CSS kit with emoji icons and one Projects window of cards.

**Key Characteristics:**
- Windows 98 system palette on the shell: teal desktop, `#C0C0C0` face, four-colour bevels, navy-to-blue title gradient (the shell's only gradient family).
- Tahoma 11px for every shell control; the sites use Times New Roman, Verdana, Arial, Comic Sans MS and Courier New as their webmasters would, at period sizes.
- Drawn 32px and 16px SVG icons with crisp edges; no emoji, no icon fonts.
- Each site has its own tiled background, palette and WordArt banner; one green treatment is reserved for the real download.
- All motion in steps; zoom rectangles instead of eases; nothing fades.
- Product honesty inside the bit: own-visits counter, real links, real dates, status truth.

## Colors

Two palettes: the flat Windows 98 system set for the shell, and one small loud palette per site inside the browser.

### Primary (shell)
- **Desktop Teal** (#008080): the desktop ground and nothing else.
- **Title Navy** (#000080): the left end of the active title-bar gradient, the selected desktop-icon label, menu and Start-menu highlight, text selection, the progress-bar segments, the media-player track fill.
- **Title Blue** (#1084D0): the right end of the active title-bar gradient; also the Welcome window's side band and the Start-menu band (vertical), and the splash bar stripes with `#0000A0`.

### Neutral (shell)
- **Chrome Face** (#C0C0C0): every window, button, taskbar, menu, dialog and scrollbar thumb.
- **Bevel Highlight** (#FFFFFF): the outer top-left bevel line; also the document ground of the IE pane, fields and white sites.
- **Bevel Light** (#DFDFDF): the inner top-left bevel line and the scrollbar track.
- **Bevel Shadow** (#808080): the inner bottom-right bevel line, disabled text, the left end of the inactive title gradient, the image-viewer ground.
- **Bevel Dark** (#000000): the outer bottom-right bevel line, all shell text, the boot and off screens, the throbber well.
- **Inactive Grey** (#808080 to #B5B5B5): the inactive title-bar gradient.

### Secondary (sites, shared)
- **Hyperlink Blue / Visited Purple / Hover Red** (#0000FF / #800080 / #CC0000): default site link states. Sites on a dark ground override with their accent.
- **Download Green** (#00D000, hover #33FF33, bevel #7FFF7F): the real download button, and only that.
- **Counter Gold** (#FFD700): counter digits on black, under-construction stripes with black, the NEW!/WIP! star.
- **Decoy Ad** (blue #3D7BFF to #0034C0 with a four-colour border; orange #FFB000 to #FF6000; red/yellow #FF0000 / #FFFF00 stripes): the fake download ads. Loud on purpose, and never green.

### Tertiary (per site)
- **Portal**: cream confetti ground (#FFFFE8 with red, blue, gold and green dots), navy headings and table heads (#000080), "best viewed" red (#B00000), red WordArt (#FF0000 over #7A0000), rainbow WordArt on the banner.
- **Project Alpha**: starfield navy (#000033), off-white text (#EEEEEE), gold accent (#FFD700) on borders, headings and WordArt, links #FFCC66, visited #D9A3FF.
- **Project Beta** (C++ / SDL2 top-down RPG) and its **dev log** sub-page (`#s-beta-dev`, `beta_dev.htm`, same palette): black (#000000), silver text (#C0C0C0), white accent, grey borders (#888888), yellow hover (#FFFF00), ASCII map in #888 with white walls, yellow player and red monster (#FF4444).
- **Links**: white page, navy Comic Sans headings, blue WordArt (#0000FF over #000080).
- **404**: the IE "page cannot be displayed" page: white, Arial, heading #0000A0, a #C0C0C0 rule.

### Named Rules
**The One Green Rule.** Download Green appears on exactly one control per site: the link to the real thing. Decoy ads may be any colour but green. The quiet secondary (source code, mirror 2) is grey with a bevel, never green.

**The Shell Gradient Rule.** The shell's only gradient is navy to blue, and it appears on the active title bar, the Welcome side band, the Start-menu band and the splash bar. Every other shell surface is flat Chrome Face. The sites inside the browser are webmasters' pages and gradient as they please.

**The System Palette Rule.** Shell colours are the ten Windows 98 system values, unmodulated: no tints, no alpha, no hover lightening. A shell control changes state by swapping bevels or inverting to navy and white.

## Typography

**Shell Font:** Tahoma (with MS Sans Serif, Segoe UI, Arial)
**Boot / Notepad Font:** Lucida Console (with Courier New)
**WordArt Font:** Impact (with Arial Black, Franklin Gothic Medium)
**Site Fonts:** Times New Roman (default page), Verdana (labels, notes, tables, buttons), Arial (404), Comic Sans MS (taglines, portal and Links headings, "the hard part" heads), Courier New (Project Beta, counter digits, textareas)

**Character:** System type at pixel sizes with smoothing off, and webmaster type chosen page by page. The sizes are the era's: 11px Tahoma chrome, 9px Verdana badges, 16px Times body. They are deliberate and readable at 1:1, not a bug to fix.

### Hierarchy
- **WordArt** (900, clamp(34px, 6.5vw, 58px) / 1, uppercase, 1px tracking; clamp(28px, 9vw, 40px) on phones): the site banner. Fill in the site's WordArt colour, 1.5px outline stroke (`paint-order: stroke fill`), three stacked hard shadows (2px shade, 4px line, 6px drop), rotated -2deg unless `.straight`. The portal's is rainbow-clipped with a 3px black drop-shadow.
- **Ad Display** (Impact 900, 20px / 1, uppercase, 1px tracking): decoy ad text only.
- **Splash** (Tahoma 700, 38px / 1, 1px tracking): the boot splash title. Welcome band head is Tahoma 700 20px; Welcome body head 700 13px.
- **Tagline** (Comic Sans MS italic 700, 18px / 1.2): the line under each WordArt banner.
- **Site Heading** (per site: Comic Sans 700 18px navy on the portal and Links; Times italic 700 20px gold on Alpha; Courier New 700 13px between `==` on Beta).
- **Site Body** (Times New Roman 16px / 1.4 default; Courier New 13px / 1.4 on Beta).
- **Shell UI** (Tahoma 400, 11px / 1.3; 700 on title bars, the Start button and the active task): every control, menu, dialog, status bar and desktop icon label. `-webkit-font-smoothing: none`.
- **Site Label** (Verdana 700, 12px / 1.6): site nav, webring, under-construction text, "mail me". The marquee is Verdana 700 13px.
- **Facts** (Verdana 13px / 1.35): the spec table and rating line.
- **Site Small** (Verdana 11px / 1.4): counter notes, figcaptions, footer, last-updated lines, "best viewed" line.
- **Badge** (Verdana 700, 9px / 1.05, uppercase): 88x31 buttons.
- **Download** (Verdana 700, 15px / 1, uppercase, 0.02em): the real download button; its quiet sibling is 400 13px, mixed case.
- **Counter Digits** (Courier New 700, 16px / 20px, gold on #111 cells).
- **Boot** (Lucida Console 14px / 1.35, #C0C0C0 on black, `white-space: pre`). Notepad is 13px / 1.4. The off screen's "safe to turn off" is Lucida Console 700 clamp(20px, 4vw, 40px) in amber #F7B500.

### Named Rules
**The Period Sizes Rule.** 11px Tahoma, 9px badge type and 11px Verdana notes are the world's native sizes. Do not "fix" them upward; do not go below them either.

**The Webmaster's Faces Rule.** Each site picks its faces once and keeps them: the shell never borrows Impact or Comic Sans, and a site never uses Tahoma. Impact appears only in WordArt, decoy ads and the portal's rank numbers.

## Layout

The desktop is the viewport minus a 28px taskbar. Desktop icons are 76px wide and flow in a column down the left (flex column, wrapping into a second column if needed), with a bevelled "Back to the recruiter view" shortcut pinned top right (8px / 10px). Windows are absolutely positioned and cascade from fixed offsets: IE at 90 / 18 up to 940 x 760 (capped to the viewport minus 32 / 64), System Properties 430px wide at 260 / 70, Notepad 500 x 420 at 320 / 90, Outlook Express 520 x 440 at 200 / 60, Media Player 400px at 420 / 120 (laid out by its own width: under 640px a 16:9 screen over the playlist, from 640px, i.e. maximized or a landscape phone, the screen fills the window with the playlist as a full-height column on the right; videos play in the screen through the youtube-nocookie embed), Recycle Bin 460 x 320 at 360 / 140, Welcome 520px at 220 / 80, Image Preview 720 x 620 at 140 / 30. Dialogs are 420px wide, centred at 40% height. Windows are draggable by their title bar, resizable from a 14px grip, and maximise to the desktop. The IE window is toolbar (48px buttons with labels, 34px throbber well), address bar, pane, then a status bar with message, 120px progress well and 130px zone.

Inside the browser every site is a `.wrap` up to 780px with 8px / 10px / 14px padding, and a two-column `.cols` grid: 150px sidebar and fluid body (160px on the portal). The portal's body leads with two featured-game boxes side by side (one column under 700px): a navy title bar, a 16:10 screenshot thumbnail in a 2px black frame, one line, a three-row facts table and an "Enter" link. The 404 page is a 620px left-aligned column with 18px / 26px padding.

No window is ever taller than the screen above the taskbar or wider than the screen; when one is capped, its content pane scrolls and its button row stays in view. Phone mode is below 700px wide or 500px tall (landscape phones), one query shared by `style.css` and `basement.js`. In phone mode the desktop becomes an icon grid of 76px-minimum columns (four on a portrait phone; 8px row gap, 14px top padding); the Recycle Bin drops its Original location column; every non-dialog window fills the screen and loses its resize grip and maximise button; toolbar buttons drop their labels and the address label hides; the tray and clock hide and the recruiter-view shortcut moves into the taskbar at bottom right, with the task list reserving 118px for it; site columns stack to one; WordArt shrinks; the progress well narrows to 60px and the throbber to 28px; the Start menu caps at 260px.

Shell rhythm is 1 / 2 / 3 / 4 / 6 / 8 / 12px: 1px bevel lines, 2px pane and menu padding, 3px window padding, 4px control padding, 6px dialog button gaps, 8px site gutters, 12px dialog padding. Buttons are 75 x 23px minimum; taskbar tasks are 160px (110px on phones); Start-menu items are 32px tall.

## Elevation & Depth

No soft shadows anywhere in the shell. Depth is the four-line Windows 98 bevel drawn with inset box-shadows, and z-order (dialogs above windows, menus above both, the taskbar at 100, the Start menu at 110, the zoom rectangle at 8000, boot at 9000, the off screen at 9100). The default button adds a 1px black ring outside its bevel. Sites use hard offset shadows only as WordArt (stacked 2 / 4 / 6px text shadows) and the counter's 2px `outset` frame.

### Shadow Vocabulary
- **Raised** (`--raised`: `inset -1px -1px #000, inset 1px 1px #fff, inset -2px -2px #808080, inset 2px 2px #dfdfdf`): windows, buttons, taskbar tasks, menus, scrollbar thumbs and arrows, table headers in the Recycle Bin.
- **Pressed** (`--pressed`: the raised set mirrored): active and `aria-pressed` buttons; the pressed button's label shifts 1px down and right.
- **Sunken** (`--sunken`: `inset 1px 1px #808080, inset -1px -1px #fff, inset 2px 2px #000, inset -2px -2px #dfdfdf`): fields, panes, the throbber well, the copy progress well, the media screen, the playlist.
- **Groove** (`--groove`: `inset 1px 1px #808080, inset -1px -1px #fff`): status-bar cells, the tray, menu and Start-menu separators, toolbar separators, dialog group boxes.
- **Property tab** (`inset 1px 1px #fff, inset -1px 0 #808080, inset 2px 0 #dfdfdf`; selected adds `inset -1px 0 #000, inset -2px 0 #808080` and grows 1px): System Properties tabs over a sheet with a three-line bevel.
- **WordArt stack** (`text-shadow: 2px 2px 0 shade, 4px 4px 0 line, 6px 6px 0 drop`): banners only.

### Named Rules
**The Bevel Rule.** A shell surface is raised, pressed, sunken or grooved. There is no fifth state and no blur radius. Hover on a flat toolbar button draws a 1px light/dark border; it does not tint.

## Shapes

Square everything: `border-radius: 0` on every button, field, window, dialog, badge and table. Corners are made by 1px lines. Borders are 1px solid black on 88x31 badges, screenshot mats (2px), site-nav boxes (2px), spec tables (2px outer, 1px cells), "the hard part" (2px dashed), the webring (3px double), the real download button (3px `outset` green), decoy ads (3px solid, four colours). Site horizontal rules are the two-line 98 groove (#808080 over #FFFFFF). Icons are drawn SVG at 32px (desktop, dialogs, Start menu) and 16px (title bars, toolbars, tray), rendered `pixelated` where scaled. The signature silhouettes are the dotted 2px zoom rectangle (`mix-blend-mode: difference`), the diagonal 12/24px hazard stripes, the NEW! starburst and the flying page glyph.

## Components

### Buttons (shell)
Raised grey slabs, exactly as Windows 98 drew them.
- **Shape:** square, 75 x 23px minimum, 4px / 12px padding, Chrome Face, `--raised`.
- **Pressed / Active:** `--pressed`, label shifts 1px down-right. **Default:** 1px black ring around the bevel. **Disabled:** Bevel Shadow text with a 1px white text-shadow.
- **Focus:** 1px dotted black outline inset 4px.
- **Small** (2px / 6px, 21px) for dialog footers; **Icon** (16 x 14px, 10px glyph) for title-bar controls.

### Inputs / Fields
White, `--sunken`, 3px / 4px padding, 21px minimum, no focus ring of its own (the caret is the focus). The address field is a field containing a 16px page icon and a bare input. Textareas set Courier New 12px.

### Desktop Icon
A 76px column: 32px SVG over a Tahoma 11px white label with 1px / 2px padding. Selected or focused: label on Title Navy with a 1px dotted #FFFF80 border and the icon darkened (SVG select filter). A 10px shortcut-arrow overlay marks links that leave the desktop (Resume.pdf).

### Window and Title Bar
A 3px Chrome Face frame with `--raised`, 200 x 100 minimum. The title bar is 18px, navy-to-blue when active and grey when not, with a 16px icon, bold Tahoma title (ellipsised) and 2px-spaced icon buttons (minimise, maximise, close; close spaced 2px further). Body is a white `--sunken` pane with 2px padding and Windows 98 scrollbars (16px, checkered track). A 14px dotted grip sits bottom right. The status bar is 20px of grooved cells.

### Menu Bar and Menus
A 19px bar of flat Tahoma buttons with underlined access keys; hover or open inverts to navy and white. Menus are raised Chrome Face panels, 150px minimum, 2px padding; items are 3px / 18px / 3px / 22px, invert on hover and focus; separators are 2px grooves.

### Dialogs
420px raised windows centred at 40% height: a 12px body, a 32px icon beside the message, buttons centred (or right-aligned for wizards) with 6px gaps, the default button ringed. Group boxes are grooves with a legend on Chrome Face. The File Download dialog shows the file name and origin in a white sunken block, Open / Save radios, then OK, Cancel, More Info. Copying shows two folders with three pages flying between them, "From 'github.com' to 'this tab'", and a sunken progress well. Download complete shows the real address and an Open button. The error box is the Internet Explorer alert with the red X icon and one OK.

### Taskbar and Start Menu
28px Chrome Face bar with a white top line and a grey line above it; Start (bold, flag icon), a groove divider, 160px raised task buttons (pressed and checkered with a bold label when active), and a grooved tray with a speaker and a tabular-figure clock (updates every 10s). The Start menu is a 200px raised panel with a 21px vertical navy-to-blue band reading "The Basement 98" and 32px items that invert on hover; two groove separators split programs, documents and help, and log off / shut down.

### IE Toolbar, Address Bar and Status Bar
Toolbar buttons are flat 48px columns (20px icon over a label) that gain a 1px light/dark border on hover and the reverse on press; disabled buttons grey their icon. The throbber is a 34px black sunken well holding a 22px Windows flag that bobs in 4 steps only while `.loading`. The address bar is a labelled field plus a flat "Go" with a green arrow. The status bar reads "Opening page ..." then "Done", fills 120px of navy 8px segments in 10 steps while loading, and shows the zone "Internet" with a globe.

### WordArt Banner
See Typography. Set inside the site's `h1`, rotated -2deg on the portal, Alpha and Links; straight on Beta. Colours come from per-site `--wa-fill`, `--wa-line`, `--wa-shade`, `--wa-drop`.

### Marquee
Verdana 700 13px, one line, scrolling left over 22s linear from off-right. `aria-hidden`, and static (no padding offset) under reduced motion.

### Hit Counter
Six Courier New 700 16px gold digits in 14px #111 cells inside a black frame with a 2px outset grey border, followed by a Verdana 11px note. The digits come from `localStorage` (`basement-visits`) and the note says so on every site.

### 88x31 Badge
Exactly 88 x 31px, 1px black border, Verdana 700 9px uppercase, optional 16px icon. Variants: IE (pale blue), Netscape (black / green), résumé (yellow), text, HTML (pink / dark red), Windows 98 (navy-to-blue gradient), "nf" orange. Dark sites restyle the border and ground to their accent.

### Under-Construction Bar
A flex bar on diagonal 12/24px gold-and-black stripes, 4px padding, with a 24px hard-hat icon each end and a white Verdana 700 12px uppercase label between. Used on Alpha and Beta, which are actually unfinished.

### NEW! Burst
A 44px starburst SVG with "NEW!" in Verdana 700 10px white, rotated -12deg, pulled into the line with -8px margins. On the portal's download table only.

### Real Download Button vs Decoy Ads
- **Real** (`.dl-real`): Download Green, 3px outset `#7FFF7F` border, black Verdana 700 15px uppercase, 10px / 16px padding, 20px icon; hover `#33FF33`, active inset. Sits in a `.dl-row` next to its **quiet** sibling: `#E0E0E0` with a white/grey bevel, 400 13px mixed case (source code, mirror 2, read the source). Clicking a real link runs the download ritual; hovering shows its real URL in the status bar; `data-file`, `data-from` and `data-info` fill the dialogs.
- **Decoy** (`.ad`): 468 x 60px banner, Impact 900 20px white on a blue gradient with a gold / red / green / magenta border, a 28px bouncing arrow (2 steps) and a Verdana 700 10px subline; `.orange` and `.red` variants. It is a `<button>` with `data-msg`, and it opens the error box. Never green, never a link.

### Screenshots Strip
Wrapped row of 130px-tall images (110px for `.wide`) in white mats with a 2px black border and 2px padding; hover or focus turns the border red; dark sites recolour the mat to their accent. Click opens the Image Preview window (grey ground, contain-fit). A Verdana 11px figcaption or "click a picture to see it full size" note follows.

### Facts Table
`.spec`: 2px outer border, 1px cell borders, 2px cell spacing, Verdana 13px, bold nowrap heads on the left, values filling the width. Border colours inherit the site's accent.

### "The Hard Part" Box
2px dashed border in the site's accent, 8px / 10px padding, Comic Sans 700 13px uppercase head, 14px body. One per project site that has shipped.

### Webring Box
3px double border, centred Verdana 12px, uppercase 13px title "The Basement Webring", and a nav of Previous / Random / Next / List sites, each an in-page link to the next site in a fixed order.

### Dev Log Entry
Project Beta's dev log is a sub-page of its site, not a webring stop (its ring links walk as Beta). Entries run newest first: an `== DATE: TITLE ==` heading, one full-width screenshot up to 520px (opens full size in Image Preview), a plain paragraph saying what went wrong, then a "the hard part" box saying how it was found or measured. Numbers are the ones measured at the time; nothing is estimated.

### Site Nav
Verdana 700 12px list with a `»` glyph before each item, links underlined in the site's link colour, wrapped in a 2px solid `.box` with an uppercase title. Holds Home, the site's sections and the hit counter box.

### Motion Grammar
- **Boot:** POST lines appear one every 130ms (from 120ms), then the splash (flag, "The Basement", a 90px striped bar sliding 1.1s linear) for 1.1s, then the desktop. Any click or key skips it; it runs once per session (`sessionStorage`); it does not run under reduced motion.
- **Zoom:** opening or closing a window animates a 2px dotted rectangle from the icon (or task button or Start) to the window frame in 170ms `steps(5, end)`. Skipped under reduced motion.
- **Loading:** `.loading` on the IE window bobs the throbber 0.6s `steps(4)` and fills the progress well 0.9s `steps(10, end)`; status text reverts to "Done" after 700 to 1800ms.
- **Download ritual:** File Download, OK, Copying for 1150ms (150ms under reduced motion) with three pages flying 0.9s `steps(6)` staggered 0.3s and a 1.1s `steps(11, end)` bar, then Download complete, whose Open button opens the real link in a new tab. Cancel clears the timer.
- **Period tics:** marquee 22s linear; blink 1s `steps(1)`; ad arrow bounce 0.7s `steps(2)`; boot caret 1s `steps(1)`; the mail envelope wiggles 1.2s ease-in-out.
- **Reduced motion:** marquee, blink, arrow, envelope, splash bar, caret, throbber and flying pages stop; progress bars complete in 0.01s; the zoom and boot are skipped; anchor scrolling is instant.

## Do's and Don'ts

### Do:
- **Do** build every shell surface from Chrome Face plus one of the four bevels, and change state by swapping bevels or inverting to navy and white.
- **Do** keep Download Green for the one real link per site, put its quiet sibling in grey, and make every decoy a `<button>` that opens the error box (The One Green Rule).
- **Do** show a link's real destination in the status bar on hover and focus, and put the real URL in the File Download and Download complete dialogs.
- **Do** count only the visitor's own visits in the hit counter and say so in the note beside it.
- **Do** use only dates that happened (a page's own last-updated date) and no download counts, user numbers or ratings by others.
- **Do** animate in `steps()` and skip the boot, zoom and flying pages under reduced motion.
- **Do** keep the period sizes (Tahoma 11px, Verdana 9px badges, 11px notes) and draw every icon as crisp SVG at 32px or 16px.
- **Do** give every new site its own ground, link colours, heading face and WordArt colours, and its own webring box, counter, last-updated line and facts table.
- **Do** keep a way back to the recruiter view visible: the top-right shortcut on desktop (it sits behind windows so it never covers their title-bar buttons), the taskbar button on phones, and Log Off in the Start menu.

### Don't:
- **Don't** add soft shadows, blur, rounded corners, alpha tints or hover lightening to the shell.
- **Don't** put a second gradient family on the shell; navy-to-blue is the only one.
- **Don't** use emoji or icon fonts for any icon.
- **Don't** put Impact or Comic Sans on shell chrome, or Tahoma inside a site.
- **Don't** make a decoy ad green, or a real link look like an ad.
- **Don't** invent traffic, ratings by others, file sizes, mirrors that do not exist, or future dates.
- **Don't** ease anything softly; windows zoom in steps and dialogs appear at once.
- **Don't** let anything in the recruiter view depend on this surface.
