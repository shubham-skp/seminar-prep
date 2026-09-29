import CodeBlock from "../components/CodeBlock";
import nestedSVG from "../assets/nested-if-flowchart.svg";

const CODE = `#include <stdio.h>

int main() {
  int num = 67;

  if (num > 0) {
    if (num % 2 == 0) {
      printf("%d is a positive even number\\n", num);
    } else {
      printf("%d is a positive odd number\\n", num);
    }
  } else {
    printf("%d is not a positive number\\n", num);
  }
  return 0;
}`;

const OUTPUT = "67 is a positive odd number";

export default function Slide05NestedIf() {
  return (
    <div className="space-y-6">
      <div className="grid items-start gap-6 lg:grid-cols-2">
        {/* Theory on the left with amber accents */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-amber-600">
            03 · Layered decisions
          </p>
          <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
            A{" "}
            <span className="rounded bg-amber-100 px-1.5 py-0.5 font-mono font-semibold text-amber-800">
              nested if
            </span>{" "}
            is a conditional construct in which one if (or if-else)
            statement is placed inside the body of another. The inner condition
            is evaluated only when the outer condition is satisfied, so the
            program descends through successive layers — each layer refining
            the choice made by the one before it.
          </p>
          <p className="mt-3 rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 p-4 text-sm leading-relaxed text-amber-950 shadow-sm">
            <span className="font-bold">In simple terms: </span>
            a decision inside a decision. Like a security check followed by a
            ticket check — you only reach the second if you pass the first.
          </p>
          <h3 className="mt-5 text-xs font-bold uppercase tracking-widest text-slate-500">
            Pattern
          </h3>
          <div className="mt-2 rounded-2xl border border-slate-200 bg-slate-950 p-4 font-mono text-sm leading-relaxed text-slate-200 shadow-lg">
            <span className="text-amber-300">if</span> (outer) {"{"}
            <br />
            &nbsp;&nbsp;<span className="text-amber-300">if</span> (inner) {"{"}{" "}
            <span className="text-slate-500">... </span>
            {"}"} <span className="text-amber-300">else</span> {"{"}{" "}
            <span className="text-slate-500">...</span> {"}"}
            <br />
            {"}"} <span className="text-amber-300">else</span> {"{"}{" "}
            <span className="text-slate-500">...</span> {"}"}
          </div>
          
        </div>

        {/* Code on the right */}
        <div className="space-y-4 lg:sticky lg:top-4">
          <CodeBlock code={CODE} title="nested_if.c" showOutput={OUTPUT} />
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-3.5 text-xs leading-relaxed text-amber-900 shadow-sm">
            <span className="font-bold">💡 Readability tip: </span>
            deep nesting gets confusing fast. Beyond 2–3 levels, prefer a
            ladder, a switch, or a helper function.
          </div>
        </div>
      </div>

      {/* Flowchart centered below theory + code */}
      <div className="flex justify-center">
        <figure className="w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="mb-3 flex items-center justify-between">
            <span className="rounded-full bg-amber-100 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-800">
              Flowchart
            </span>
            <span className="font-mono text-[11px] text-slate-400">
              outer {"->"} inner
            </span>
          </div>
          <img
            src={nestedSVG}
            alt="nested if flowchart: outer condition true leads to inner decision, false skips to else"
            className="mx-auto h-auto w-full object-contain"
          />
          <figcaption className="mt-3 rounded-xl bg-slate-50 p-3 text-center text-xs leading-relaxed text-slate-500">
            Outer diamond checks num {">"} 0 {"->"}{" "}
            <span className="rounded bg-emerald-100 px-1.5 py-0.5 font-semibold text-emerald-700">true</span> reaches
            the inner decision,{" "}
            <span className="rounded bg-slate-200 px-1.5 py-0.5 font-semibold text-slate-600">false</span> goes
            straight to else.
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
