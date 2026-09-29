import ProgressBar from "./ProgressBar";
import SlideNav from "./SlideNav";

export default function SlideShell({
  kicker,
  title,
  subtitle,
  current,
  total,
  onBack,
  onNext,
  onDot,
  dark = false,
  accent = "bg-sky-100 text-sky-700",
  children,
}) {
  return (
    <div
      className={`slide-enter flex min-h-screen flex-col transition-colors ${
        dark
          ? "bg-slate-950 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(52,211,153,0.18),transparent),radial-gradient(ellipse_60%_50%_at_80%_10%,rgba(56,189,248,0.12),transparent)] text-slate-100"
          : "bg-linear-to-br from-sky-50 via-indigo-50 to-white"
      }`}
    >
      {/* top progress — full bleed */}
      <ProgressBar current={current} total={total} dark={dark} />

      {/* header */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-6 pt-6 sm:px-12 lg:px-16">
        <span
          className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-sm ${accent}`}
        >
          {kicker}
        </span>
        <span
          className={`font-mono text-xs tabular-nums ${
            dark ? "text-slate-500" : "text-slate-400"
          }`}
        >
          {current + 1} / {total}
        </span>
      </div>

      <div className="px-6 pt-4 sm:px-12 lg:px-16">
        <h1
          className={`text-2xl font-extrabold tracking-tight sm:text-4xl ${
            dark ? "text-white" : "text-slate-900"
          }`}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={`mt-1 text-sm sm:text-base ${
              dark ? "text-slate-400" : "text-slate-500"
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>

      {/* body — fills remaining page height */}
      <div className="flex-1 px-6 py-6 sm:px-12 sm:py-8 lg:px-16">{children}</div>

      {/* footer nav — pinned to bottom */}
      <div
        className={`mt-auto flex flex-wrap items-center justify-between gap-4 border-t px-6 py-4 backdrop-blur sm:px-12 lg:px-16 ${
          dark
            ? "border-white/10 bg-slate-950/80"
            : "border-slate-200 bg-white/80"
        }`}
      >
          <div className="flex items-center gap-2">
            {Array.from({ length: total }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => onDot(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === current
                    ? "w-8 bg-indigo-600"
                    : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
          <SlideNav current={current} total={total} onBack={onBack} onNext={onNext} />
      </div>
    </div>
  );
}
