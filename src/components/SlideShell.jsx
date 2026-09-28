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
  children,
}) {
  return (
    <div className="slide-enter flex min-h-screen flex-col bg-linear-to-br from-sky-50 via-indigo-50 to-white">
      {/* top progress — full bleed */}
      <ProgressBar current={current} total={total} />

      {/* header */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-6 pt-6 sm:px-12 lg:px-16">
        <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-sky-700">
          {kicker}
        </span>
        <span className="font-mono text-xs text-slate-400">
          {current + 1} / {total}
        </span>
      </div>

      <div className="px-6 pt-4 sm:px-12 lg:px-16">
        <h1 className="text-2xl font-extrabold text-slate-900 sm:text-4xl">{title}</h1>
        {subtitle && <p className="mt-1 text-sm text-slate-500 sm:text-base">{subtitle}</p>}
      </div>

      {/* body — fills remaining page height */}
      <div className="flex-1 px-6 py-6 sm:px-12 sm:py-8 lg:px-16">{children}</div>

      {/* footer nav — pinned to bottom */}
      <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 bg-white/80 px-6 py-4 backdrop-blur sm:px-12 lg:px-16">
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
