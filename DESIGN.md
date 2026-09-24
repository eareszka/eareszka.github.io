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

Scope: this file governs the recruiter view (`index.html`, `pro.css`, `pro.js`). The retro desktop-OS easter egg (`desktop.html`, `style.css`) has its own look and is not bound by anything here.

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
- **Rule Grey** (#B9CBCA): dashed separators between heat-sheet cells and list rows, the quiet underline on the desktop-version link. Decorative only; never used for text.

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
Masthead: the name in plate type left, four section links in muted Body Small with a teal underline that draws in from the left on hover, and the desktop-version link in muted text with a rule-grey underline. On phones the links become a horizontally scrolling strip between dashed rules.

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
