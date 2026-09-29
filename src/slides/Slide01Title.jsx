// Slide 1 — Title.
const TOPICS = ["if", "if-else", "nested if", "ladder", "switch", "? :"];

export default function Slide01Title({ onNext }) {
  return (
    <div className="relative flex min-h-[58vh] flex-col items-center justify-center overflow-hidden py-8 text-center">
      {/* ambient blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-indigo-300/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-sky-300/30 blur-3xl"
      />

      <p className="relative inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-indigo-700 shadow-sm backdrop-blur">
        <span className="h-2 w-2 animate-pulse-glow rounded-full bg-emerald-500" />
        C Programming • Seminar
      </p>

      <h2 className="relative mx-auto mt-4 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl">
        Decision Control{" "}
        <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-500 bg-clip-text text-transparent">
          in C
        </span>
      </h2>
      <p className="relative mx-auto mt-4 max-w-xl text-base text-slate-500 sm:text-lg">
        How programs ask questions and choose paths — from a single{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-sm text-slate-700">
          if
        </code>{" "}
        to menus, ladders and live code.
      </p>

      {/* topic roadmap */}
      <div className="relative mt-6 flex flex-wrap items-center justify-center gap-2">
        {TOPICS.map((t, i) => (
          <span
            key={t}
            className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 font-mono text-xs font-semibold text-slate-600 shadow-sm"
          >
            <span className="mr-1.5 text-indigo-500">{String(i + 1).padStart(2, "0")}</span>
            {t}
          </span>
        ))}
        <span className="rounded-full bg-slate-900 px-3.5 py-1.5 font-mono text-xs font-semibold text-emerald-300 shadow-sm">
          + live run ⚡
        </span>
      </div>

      <div className="relative mx-auto mt-8 w-full max-w-lg overflow-hidden rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-xl shadow-indigo-100/50 backdrop-blur">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-400" />
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
          Presented by
        </p>
        <p className="mt-2 text-lg font-bold text-slate-900">
          Hrishi Tiwari <span className="font-normal text-slate-400">&</span> Shubham Kumar Pandey
        </p>
        <div className="mt-3 flex items-center justify-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-sm font-bold text-white shadow">
            H
          </span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-indigo-600 text-sm font-bold text-white shadow">
            S
          </span>
        </div>
      </div>

      <button
        type="button"
        onClick={onNext}
        className="group relative mt-8 rounded-2xl bg-slate-900 px-8 py-3.5 text-sm font-bold text-white shadow-xl shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-indigo-700 active:translate-y-0"
      >
        Start Seminar
        <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">{"->"}</span>
      </button>
      <p className="mt-3 font-mono text-[11px] text-slate-400">
        9 slides • arrow keys / space to navigate
      </p>
    </div>
  );
}
