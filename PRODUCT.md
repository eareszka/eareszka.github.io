# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: recruiters doing a quick scan. University recruiting and in-house talent staff, often on a phone, deciding in under a minute whether to pass Emery Reszka along for a software engineering internship or 2027 graduate role. They filter on degree, graduation date, location, work authorization and what the candidate is looking for, then decide whether to download the résumé or send an email.

Secondary: engineers or hiring managers who get the link passed to them and read the project write-ups, open the repos and try the live apps.

## Product Purpose

A personal job-search site for Emery Reszka, a Computer Science student at Florida Gulf Coast University graduating May 2027. It exists to get a recruiter from first glance to a résumé download or an email. Success is a recruiter reaching out, or passing Emery to an engineer who does.

## Positioning

What a visitor should remember, in the user's own priorities:

- **Ships working software.** The projects are public and usable: two live web apps, a Chrome Web Store listing and a downloadable Windows release, not just coursework.
- **Discipline and work ethic.** Four seasons of NCAA Division I swimming (20–40 hours a week) alongside a full course load, plus a UPS preloader job during the school year.
- **Builds live-data tools.** A recurring pattern across RegionOS, Pulse and SnipAI: software that watches a screen, a market or a page and reacts when it changes. It does not describe every project (WingIt, the campus event system), so state it as a pattern and not as "everything I build".
- **Candid about hard problems.** Each project says plainly what was hard and what still doesn't work.

## Operating Context

- Recruiters arrive from a résumé, LinkedIn, a job application or a referral link, often on mobile, and spend under a minute.
- The key actions are downloading the résumé PDF and emailing. GitHub and LinkedIn come second.
- Hosted on GitHub Pages at https://eareszka.github.io/ as static HTML/CSS with no build step. `server.py` is a local preview server only.

## Capabilities and Constraints

- `index.html` + `pro.css`: the recruiter view and main landing page.
- `desktop.html` + `style.css`: a retro desktop-OS version of the portfolio. It is a **secondary easter egg**: an optional, playful extra that also holds smaller projects (a GameMaker JRPG, a Python/Tcod roguelike). The recruiter view links to it and must never depend on it.
- `privacy.html`: the SnipAI Chrome extension's privacy policy. The Chrome Web Store listing requires it, so it must stay published at that URL.
- Terminology: the Chrome extension is **SnipAI**. The screenshot `img/autoanswer-1.*` shows an older name, AutoAnswer. The texting app is **WingIt!**.

## Brand Commitments

- Voice: first person, plain and specific. State facts a recruiter can check. No slogans, aphorisms, "X is really Y" framings or claims that stretch beyond the projects.
- Contact: EmeryReszka@outlook.com, github.com/eareszka, linkedin.com/in/emery-reszka-a18336251.

## Evidence on Hand

- Résumé: `Emery_Reszka_Resume.pdf`.
- Project screenshots in `img/` (PNG plus WebP for the ones shown on the recruiter view). Known gaps: the SnipAI image is a title card rather than a screenshot, and the RegionOS shot doesn't fully show what their descriptions claim. Replacing them needs new captures.
- Live links: WingIt (wingit-backend.fly.dev), Pulse (pulse-sooty-pi.vercel.app), SnipAI on the Chrome Web Store, RegionOS v0.1.0 release on GitHub, campus event system repo.
- Facts: B.S. Computer Science at FGCU, expected May 2027. UW–Milwaukee coursework September 2022 to May 2026. Based in Osprey, Florida, will relocate within the state. U.S. citizen, no sponsorship needed.
- None exist, and future work must not invent them: testimonials, references, GPA, awards, usage numbers or user counts for any project, or employer endorsements.

## Product Principles

1. The 60-second scan decides everything. Degree, graduation date, location, work authorization and the two key actions must be readable in the first screen on a phone.
2. Proof over adjectives. Link to the live thing, the release or the source; don't describe it as impressive.
3. Honest, not humble-bragging. Say what was hard in plain terms, sized as supporting detail, not as the headline.
4. The recruiter view stands alone. The desktop OS is a reward for the curious, never a detour on the way to the résumé.

## Accessibility & Inclusion

No product-specific requirement established beyond WCAG 2.2 AA. The page already holds 44px minimum touch targets and a print stylesheet for recruiters who print the page.
