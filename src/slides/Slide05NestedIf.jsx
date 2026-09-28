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
          <p className="text-sm leading-relaxed text-slate-600 sm:text-[15px]">
            A{" "}
            <span className="font-mono font-semibold text-slate-800">
              nested if
            </span>{" "}
            statement is a conditional construct in which one if (or if-else)
            statement is placed inside the body of another. The inner condition
            is evaluated only when the outer condition is satisfied, so the
            program descends through successive layers of decision-making, each
            layer refining the choice made by the one before it. The same
            nesting may be applied within an{" "}
            <span className="font-mono font-semibold text-slate-800">else</span>{" "}
            block, allowing a further decision to be made when the outer
            condition fails.
          </p>
          <p className="mt-3 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm leading-relaxed text-amber-900">
            In simple terms: a nested if is a decision inside a decision. The
            program first asks one question, and only if the answer leads it
            into that block does it ask a second, more specific question. Think
            of it like a security check followed by a ticket check: you only
            reach the second if you pass the first.
          </p>
          <div className="mt-3 rounded-xl bg-slate-100 p-4 font-mono text-sm text-slate-700">
            if (outer) {"{"}
            <br />
            &nbsp;&nbsp;if (inner) {"{"} ... {"}"} else {"{"} ... {"}"}
            <br />
            {"}"} else {"{"} ... {"}"}
          </div>
        </div>

        {/* Code on the right */}
        <CodeBlock code={CODE} title="nested_if.c" showOutput={OUTPUT} />
      </div>

      {/* Flowchart centered below theory + code */}
      <div className="flex justify-center">
        <figure className="w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <img
            src={nestedSVG}
            alt="nested if flowchart: outer condition true leads to inner decision, false skips to else"
            className="mx-auto h-auto w-full object-contain"
          />
          <figcaption className="mt-3 rounded-xl bg-slate-50 p-3 text-center text-xs leading-relaxed text-slate-500">
            Flowchart: outer diamond checks num &gt; 0 →{" "}
            <span className="font-semibold text-slate-700">true</span> reaches
            the inner (nested) decision,{" "}
            <span className="font-semibold text-slate-700">false</span> goes
            straight to else.
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
