export default function ProgressBar({ current, total }) {
  const pct = ((current + 1) / total) * 100;
  return (
    <div className="h-1.5 w-full overflow-hidden bg-slate-200">
      <div
        className="h-full bg-gradient-to-r from-sky-500 to-indigo-600 transition-all duration-300"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
