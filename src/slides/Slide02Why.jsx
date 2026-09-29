import diamondSVG from "../assets/diamond.svg";

// Slide 2 — Why decision control?
export default function Slide02Why() {
  return (
    <div className="space-y-5">
      <div className="grid items-stretch gap-5 lg:grid-cols-5">
        {/* Definition hero */}
        <div className="relative overflow-hidden rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 p-6 sm:p-7 lg:col-span-3">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-200/50 blur-2xl"
          />
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">
            The big idea
          </p>
          <h3 className="mt-1 text-xl font-extrabold tracking-tight text-slate-900">
            What is Decision Control?
          </h3>
          <p className="mt-3 leading-relaxed text-slate-600">
            Decision control is the mechanism by which a C program evaluates a
            condition and, depending on whether it holds{" "}
            <span className="font-semibold text-slate-800">true</span> or{" "}
            <span className="font-semibold text-slate-800">false</span>, selects
            one path of execution from several possible paths — departing from
            strictly sequential, top-to-bottom flow.
          </p>
          <div className="mt-4 rounded-xl border border-emerald-200/70 bg-white/80 p-4 text-[15px] leading-relaxed text-emerald-950 backdrop-blur">
            <span className="font-bold">In simple terms: </span>
            normally C reads your code line by line, in order. Decision control
            lets the program pause, ask a question, and choose what to do next
            based on the answer.
          </div>
        </div>

        {/* Without / with */}
        <div className="grid gap-5 lg:col-span-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="flex items-center gap-2 font-bold text-slate-800">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 text-sm">
                🤖
              </span>
              Without branching
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              The program marches through every statement in order. Every run
              follows the same single path, whatever the input.
            </p>
            <blockquote className="mt-3 border-l-2 border-slate-300 pl-3 text-sm italic text-slate-500">
              &ldquo;A program that cannot decide is merely a list. Decision
              control is what makes it think.&rdquo;
            </blockquote>
            <div className="mt-3 rounded-xl bg-slate-950 p-3 font-mono text-xs text-slate-300">
              <span className="text-slate-500">path {">"}</span> start {"->"} step 1 {"->"}
              step 2 {"->"} end
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-600 to-violet-600 p-5 text-white shadow-lg shadow-indigo-200">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/20 blur-2xl"
            />
            <h3 className="flex items-center gap-2 font-bold">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/20 text-sm">
                🧠
              </span>
              With decision control
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-indigo-100">
              The program tests a condition and chooses which block to run. Same
              code, different behaviour — e.g.{" "}
              <span className="rounded bg-white/20 px-1.5 py-0.5 font-mono text-xs font-semibold">
                Pass
              </span>{" "}
              for 60,{" "}
              <span className="rounded bg-white/20 px-1.5 py-0.5 font-mono text-xs font-semibold">
                Fail
              </span>{" "}
              for 30.
            </p>
            <div className="mt-3 rounded-xl bg-slate-950/60 p-3 font-mono text-xs text-emerald-300 ring-1 ring-white/20">
              <span className="text-slate-400">path {">"}</span> start {"->"} condition?
              {"->"} yes / no {"->"} end
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 rounded-2xl border border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50 p-4 text-sm text-amber-950 shadow-sm">
        <div className="animate-float-slow flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white p-2 shadow-sm ring-1 ring-amber-200">
          <img
            src={diamondSVG}
            alt="Diamond flowchart symbol for decision"
            className="h-full w-full object-contain"
          />
        </div>
        <p className="leading-relaxed">
          <span className="font-bold">Flowchart symbol for decision: </span>
          the diamond means a yes/no question — each answer takes a different
          path. You&apos;ll see this diamond on every flowchart from here on.
        </p>
      </div>
    </div>
  );
}
