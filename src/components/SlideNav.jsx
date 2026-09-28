export default function SlideNav({ current, total, onBack, onNext }) {
  const isFirst = current === 0;
  const isLast = current === total - 1;

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={onBack}
        disabled={isFirst}
        className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
      >
        ← Back
      </button>
      <button
        type="button"
        onClick={onNext}
        disabled={isLast}
        className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-indigo-200 transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-40"
      >
        {isLast ? "Finish ✓" : "Next →"}
      </button>
    </div>
  );
}
