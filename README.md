# Decision Control in C — Seminar Slides

A PowerPoint-style website built to **give a seminar on Decision Control in C
(conditional branching statements)**. It runs as a full-page slide deck in the
browser: 8 slides with Next/Back buttons, clickable dots, keyboard navigation,
and C syntax-highlighted code blocks.

Presented by Hrishi Tiwari & Shubham Kumar Pandey.

## The deck

| # | Slide | Topic |
|---|-------|-------|
| 1 | Title | Seminar title + presenters |
| 2 | Why Decision Control? | Sequential vs branching flow, flowchart symbols |
| 3 | if Statement | Syntax, example + flowchart |
| 4 | if-else Statement | Two-way choice, else-pairing rule + flowchart |
| 5 | Nested if | Decision inside a decision + flowchart |
| 6 | else-if Ladder | Ranges + ladder vs separate-ifs table |
| 7 | switch Statement | Menu-style branching, break/default + flowchart |
| 8 | Ternary, Pitfalls & Summary | `?:` operator, common mistakes, comparison table |

## Navigation

- **Next / Back** buttons in the footer of every slide
- **Keyboard:** `→` / `Space` next, `←` previous, `Home` / `End` first/last
- **Dots** in the footer jump to any slide
- **URL hash** (`#/3`) deep-links a slide and survives refresh

## Tech

React 19 + Vite + Tailwind CSS v4. C highlighting via Prism (`prismjs`,
Tomorrow theme) with font ligatures disabled so `>=` and `==` render exactly
as typed. No slide framework — slides are plain components in `src/slides/`,
wired through `src/App.jsx` with metadata in `src/data/slidesMeta.js`.

## Run it

```sh
npm install
npm run dev    # presenting? press F11 for fullscreen
npm run build  # static output in dist/
npm run lint
```

## Editing the content

Each slide lives in its own file under `src/slides/` (e.g.
`Slide06Ladder.jsx`). Theory text, code samples, and flowchart captions are
inline — just edit and save. Shared pieces (slide frame, nav buttons, progress
bar, dark code window) are in `src/components/`. Raw teaching notes for the
later slides are kept in `data.txt`.
