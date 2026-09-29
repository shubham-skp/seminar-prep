import { useCallback, useEffect, useState } from "react";
import { slidesMeta } from "./data/slidesMeta";
import SlideShell from "./components/SlideShell";
import Slide01Title from "./slides/Slide01Title";
import Slide02Why from "./slides/Slide02Why";
import Slide03If from "./slides/Slide03If";
import Slide04IfElse from "./slides/Slide04IfElse";
import Slide05NestedIf from "./slides/Slide05NestedIf";
import Slide06Ladder from "./slides/Slide06Ladder";
import Slide07Switch from "./slides/Slide07Switch";
import Slide08Summary from "./slides/Slide08Summary";
import Slide09Playground from "./slides/Slide09Playground";

const slides = [
  Slide01Title,
  Slide02Why,
  Slide03If,
  Slide04IfElse,
  Slide05NestedIf,
  Slide06Ladder,
  Slide07Switch,
  Slide08Summary,
  Slide09Playground,
];

function indexFromHash() {
  const m = window.location.hash.match(/^#\/(\d+)$/);
  if (!m) return 0;
  const i = parseInt(m[1], 10) - 1;
  return Number.isNaN(i) ? 0 : Math.min(Math.max(i, 0), slides.length - 1);
}

function App() {
  const [current, setCurrent] = useState(() => indexFromHash());

  const goTo = useCallback(
    (i) => {
      const clamped = Math.min(Math.max(i, 0), slides.length - 1);
      setCurrent(clamped);
      window.location.hash = `#/${clamped + 1}`;
    },
    []
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const back = useCallback(() => goTo(current - 1), [current, goTo]);

  // Keep state in sync with hash (back button / manual edit / refresh)
  useEffect(() => {
    const onHashChange = () => setCurrent(indexFromHash());
    window.addEventListener("hashchange", onHashChange);
    // Set initial hash if missing so refresh keeps slide
    if (!window.location.hash) window.location.hash = `#/${current + 1}`;
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [current]);

  // Keyboard: Left/Right Space PgUp PgDn Home End (ignored while typing)
  useEffect(() => {
    const onKey = (e) => {
      const t = e.target;
      const typing =
        t instanceof HTMLElement &&
        (t.tagName === "INPUT" ||
          t.tagName === "TEXTAREA" ||
          t.isContentEditable);
      if (typing) return; // let inputs / editor handle their own keys
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        back();
      } else if (e.key === "Home") {
        e.preventDefault();
        goTo(0);
      } else if (e.key === "End") {
        e.preventDefault();
        goTo(slides.length - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, back, goTo]);

  const ActiveSlide = slides[current];
  const meta = slidesMeta[current];

  const isDark = Boolean(meta.dark);

  return (
    <div
      className={`min-h-screen ${
        isDark ? "bg-slate-950" : "bg-linear-to-br from-sky-50 via-indigo-50 to-white"
      }`}
    >
      <SlideShell
        key={current}
        kicker={`Slide ${current + 1} • ${meta.title}`}
        title={meta.title}
        subtitle={meta.subtitle}
        current={current}
        total={slides.length}
        onBack={back}
        onNext={next}
        onDot={goTo}
        dark={isDark}
        accent={meta.accent}
      >
        <ActiveSlide onNext={next} onBack={back} />
      </SlideShell>
    </div>
  );
}

export default App;
