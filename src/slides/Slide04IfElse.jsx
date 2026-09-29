import CodeBlock from "../components/CodeBlock";
import ifElseSVG from "../assets/if-else-statement-flowchart.svg";

const CODE = `#include <stdio.h>

int main() {
  int num = 67;

  if (num % 2 == 0) {
    printf("%d is an even number\\n", num);
  } else {
    printf("%d is an odd number\\n", num);
  }
  return 0;
}`;

const OUTPUT = "67 is an odd number";

export default function Slide04IfElse() {
  return (
    <div className="space-y-6">
      <div className="grid items-start gap-6 lg:grid-cols-2">
        {/* Code FIRST on the left — mirrored vs the if slide */}
        <div className="order-1 space-y-4 lg:sticky lg:top-4">
          <CodeBlock code={CODE} title="if_else.c" showOutput={OUTPUT} />
          <div className="rounded-2xl border border-slate-200 bg-slate-950 p-4 font-mono text-sm leading-relaxed text-slate-200 shadow-lg">
            <span className="text-violet-300">if</span> (condition) {"{"} ...{" "}
            {"}"} <span className="text-violet-300">else</span> {"{"} ... {"}"}
          </div>
          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-3 py-2.5">
              <p className="font-mono text-xs font-bold text-emerald-700">TRUE</p>
              <p className="mt-0.5 text-xs text-emerald-900">runs if-block</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white px-3 py-2.5 shadow-sm">
              <p className="font-mono text-xs font-bold text-slate-500">FALSE</p>
              <p className="mt-0.5 text-xs text-slate-600">runs else-block</p>
            </div>
          </div>
        </div>

        {/* Theory on the right with emerald accents */}
        <div className="order-2">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">
            02 · Two-way choice
          </p>
          <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
            The{" "}
            <span className="rounded bg-emerald-100 px-1.5 py-0.5 font-mono font-semibold text-emerald-800">
              if-else
            </span>{" "}
            statement is a two-way conditional construct in C. It evaluates a
            given expression; if the result is non-zero (
            <span className="font-mono font-semibold text-slate-800">true</span>
            ), the block following{" "}
            <span className="font-mono font-semibold text-slate-800">if</span>{" "}
            is executed, and if the result is zero (
            <span className="font-mono font-semibold text-slate-800">
              false
            </span>
            ), the block following{" "}
            <span className="font-mono font-semibold text-slate-800">else</span>{" "}
            is executed instead. Exactly one of the two blocks runs, never both
            and never neither.
          </p>
          <p className="mt-3 rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 p-4 text-sm leading-relaxed text-emerald-950 shadow-sm">
            <span className="font-bold">In simple terms: </span>
            &ldquo;If this is true, do this. Otherwise, do that.&rdquo; Unlike
            a plain if, the program always takes one of two paths.
          </p>
          <div className="mt-3 rounded-2xl border border-amber-200 bg-amber-50 p-3.5 text-xs leading-relaxed text-amber-900 shadow-sm">
            <span className="font-bold">⚠ Dangling-else rule: </span>
            every <code className="rounded bg-amber-100 px-1 font-mono font-semibold">else</code> pairs
            with the nearest unmatched{" "}
            <code className="rounded bg-amber-100 px-1 font-mono font-semibold">if</code>.
            Indentation is for humans, not the compiler.
          </div>
        </div>
      </div>

      {/* Flowchart centered below theory + code */}
      <div className="flex justify-center">
        <figure className="w-full max-w-lg overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="mb-3 flex items-center justify-between">
            <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-700">
              Flowchart
            </span>
            <span className="font-mono text-[11px] text-slate-400">num = 67</span>
          </div>
          <img
            src={ifElseSVG}
            alt="if-else flowchart: diamond checks condition, true runs if code, false runs else code"
            className="mx-auto h-auto w-full max-w-sm object-contain"
          />
          <figcaption className="mt-3 rounded-xl bg-slate-50 p-3 text-center text-xs leading-relaxed text-slate-500">
            Diamond checks num % 2 == 0 {"->"}{" "}
            <span className="rounded bg-emerald-100 px-1.5 py-0.5 font-semibold text-emerald-700">true</span> prints
            even, <span className="rounded bg-slate-200 px-1.5 py-0.5 font-semibold text-slate-600">false</span>{" "}
            prints odd.
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
