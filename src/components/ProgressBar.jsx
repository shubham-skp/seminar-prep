export default function ProgressBar({ current, total, dark = false }) {
  const pct = ((current + 1) / total) * 100;
  return (
    <div className={`h-1.5 w-full overflow-hidden ${dark ? "bg-white/10" : "bg-slate-200"}`}>
      <div
        className="h-full bg-gradient-to-r from-emerald-400 via-sky-500 to-indigo-600 shadow-[0_0_12px_rgba(56,189,248,0.7)] transition-all duration-500 ease-out"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
