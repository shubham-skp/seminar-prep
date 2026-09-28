// Slide 1 — Title.
export default function Slide01Title({ onNext }) {
  return (
    <div className="flex min-h-[55vh] flex-col items-center justify-center py-6 text-center">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">
        C Programming • Seminar
      </p>
      <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
        Decision Control <span className="text-indigo-600">in C</span>
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-slate-500">
        Conditional branching statements - how programs make choices.
      </p>

      <div className="mx-auto mt-8 w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 text-base text-slate-600 shadow-sm">
        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
          Presented by
        </p>
        <p className="mt-1 text-lg font-semibold text-slate-800">
          Hrishi Tiwari &amp; Shubham Kumar Pandey
        </p>
      </div>

      <button
        type="button"
        onClick={onNext}
        className="mt-8 rounded-xl bg-indigo-600 px-8 py-3 text-sm font-semibold text-white shadow-md shadow-indigo-200 transition hover:bg-indigo-700"
      >
        Start Seminar →
      </button>
      <p className="mt-3 font-mono text-xs text-slate-400">
        Tip: use ← → keys to navigate
      </p>
    </div>
  );
}
