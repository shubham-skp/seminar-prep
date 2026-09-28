import CodeBlock from "../components/CodeBlock";

const CODE = `#include <stdio.h>

int main() {
  int marks = 67;

  // one-line if-else that gives back a value
  int status = (marks >= 40) ? 1 : 0;
  printf("status = %d\\n", status);

  int a = 10, b = 25;
  int max = (a > b) ? a : b;
  printf("max = %d\\n", max);
  return 0;
}`;

const OUTPUT = "status = 1, max = 25";

const ROWS = [
  ["if", "Single condition", "Skips block when false"],
  ["if-else", "Two-way choice", "Always runs one of two blocks"],
  ["Nested if", "Layered decisions", "Inner runs only if outer passes"],
  ["else-if ladder", "Exclusive ranges", "Stops at first true"],
  ["switch", "Fixed int/char values", "Needs break; has default"],
  ["?: ternary", "Short 2-way assign", "Expression, not statement"],
];

export default function Slide08Summary() {
  return (
    <div className="space-y-6">
      <div className="grid items-start gap-6 lg:grid-cols-2">
        {/* Theory on the left */}
        <div>
          <p className="text-sm leading-relaxed text-slate-600 sm:text-[15px]">
            The conditional operator{" "}
            <span className="font-mono font-semibold text-slate-800">?:</span>,
            commonly called the ternary operator, is the only operator in C
            that takes three operands. It evaluates the first operand as a
            condition; if the result is non-zero (true), the second operand is
            evaluated and becomes the value of the entire expression, otherwise
            the third operand is evaluated and becomes that value. It is
            therefore an expression that yields a value, in contrast to if-else,
            which is a statement.
          </p>
          <p className="mt-3 rounded-xl border border-indigo-200 bg-indigo-50 p-3 text-sm leading-relaxed text-indigo-900">
            In simple terms: the ternary operator is a one-line if-else that
            hands you back an answer. It reads as: &ldquo;Is this true? Then
            give me this value, otherwise give me that one.&rdquo;
          </p>
          <div className="mt-3 rounded-xl bg-slate-100 p-4 font-mono text-sm text-slate-700">
            condition ? value_if_true : value_if_false;
          </div>
        </div>

        {/* Code + pitfalls on the right */}
        <div className="grid gap-5">
          <CodeBlock code={CODE} title="ternary.c" showOutput={OUTPUT} />
          <div className="rounded-2xl border border-red-200 bg-red-50 p-4">
            <h3 className="font-bold text-red-900">⚠️ Common pitfalls</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-red-900/90">
              <li>
                <code className="font-mono">=</code> vs{" "}
                <code className="font-mono">==</code> — assignment inside if is
                almost always a bug (<code className="font-mono">if (x = 5)</code> is always true).
              </li>
              <li>
                Dangling else — <code className="font-mono">else</code> binds
                to the nearest unmatched <code className="font-mono">if</code>;
                use braces to be explicit.
              </li>
              <li>
                Missing <code className="font-mono">break</code> in switch →
                silent fall-through into the next case.
              </li>
              <li>
                Skipping braces <code className="font-mono">{"{ }"}</code> on
                multi-line blocks — only the first line stays conditional.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Full comparison table */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
        <div className="bg-slate-100 px-4 py-2 text-sm font-bold text-slate-700">
          Whole chapter at a glance
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-2">Statement</th>
                <th className="px-4 py-2">Best for</th>
                <th className="px-4 py-2">Note</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r[0]} className="border-t border-slate-100">
                  <td className="px-4 py-2 font-mono font-semibold text-indigo-700">{r[0]}</td>
                  <td className="px-4 py-2 text-slate-600">{r[1]}</td>
                  <td className="px-4 py-2 text-slate-600">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick check + thanks */}
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
          <span className="font-bold">One-minute check ✏️ </span>
          What prints when marks = 35? Trace it through the ladder, then
          through the ternary — both should agree.
        </div>
        <p className="flex items-center justify-center text-center text-xl font-bold text-slate-800">
          Thank You! <span className="ml-2 text-indigo-600">Questions?</span>
        </p>
      </div>
    </div>
  );
}
