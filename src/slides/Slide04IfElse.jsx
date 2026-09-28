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
        <div className="order-1">
          <CodeBlock code={CODE} title="if_else.c" showOutput={OUTPUT} />
          <div className="mt-4 rounded-xl bg-slate-100 p-4 font-mono text-sm text-slate-700">
            if (condition) {"{"} ... {"}"} else {"{"} ... {"}"}
          </div>
        </div>

        {/* Theory on the right with emerald accents */}
        <div className="order-2">
          <p className="text-sm leading-relaxed text-slate-600 sm:text-[15px]">
            The{" "}
            <span className="font-mono font-semibold text-slate-800">
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
            and never neither, after which control passes to the statement
            following the construct.
          </p>
          <p className="mt-3 rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-sm leading-relaxed text-emerald-900">
            In simple terms: an if-else statement says, &ldquo;If this is true,
            do this. Otherwise, do that.&rdquo; Unlike a plain if, the program
            always takes one of two paths, so there is always an action,
            whichever way the condition turns out.
          </p>
          <div className="mt-3 rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs leading-relaxed text-amber-900">
            Rule: every <code className="font-mono">else</code> pairs with the
            nearest unmatched <code className="font-mono">if</code>.
            Indentation matters for humans, not compiler.
          </div>
        </div>
      </div>

      {/* Flowchart centered below theory + code */}
      <div className="flex justify-center">
        <figure className="w-full max-w-lg overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <img
            src={ifElseSVG}
            alt="if-else flowchart: diamond checks condition, true runs if code, false runs else code"
            className="mx-auto h-auto w-full max-w-sm object-contain"
          />
          <figcaption className="mt-3 rounded-xl bg-slate-50 p-3 text-center text-xs leading-relaxed text-slate-500">
            Flowchart: diamond checks num % 2 == 0 →{" "}
            <span className="font-semibold text-slate-700">true</span> prints
            even, <span className="font-semibold text-slate-700">false</span>{" "}
            prints odd.
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
