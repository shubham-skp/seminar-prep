import CodeBlock from "../components/CodeBlock";

const CODE = `#include <stdio.h>

int main() {
  int num = 67;

  // one-line if-else that gives back a value
  int status = (num >= 40) ? 1 : 0;
  printf("status = %d\\n", status);

  // can also be nested, but readability suffers
  int max = (num < 40) ? 40 : ((num > 100) ? 100 : num);
  printf("max = %d\\n", max);

  return 0;
}`;

const OUTPUT = `status = 1
max = 67`;

const ROWS = [
    ["if", "Single condition", "Skips block when false", "bg-indigo-100 text-indigo-700"],
    ["if-else", "Two-way choice", "Always runs one of two blocks", "bg-emerald-100 text-emerald-700"],
    ["Nested if", "Layered decisions", "Inner runs only if outer passes", "bg-amber-100 text-amber-800"],
    ["else-if ladder", "Exclusive ranges", "Stops at first true", "bg-violet-100 text-violet-700"],
    ["switch", "Fixed int/char values", "Needs break; has default", "bg-cyan-100 text-cyan-800"],
    ["? : ternary", "Short 2-way assign", "Expression, not statement", "bg-fuchsia-100 text-fuchsia-700"],
];

const PITFALLS = [
    {
        title: "= vs ==",
        body: "A single = assigns and is always truthy (non-zero). Use == to compare.",
        bad: `if (x = 5) {\n  printf("hi\\n"); // always runs!\n}`,
        good: `if (x == 5) {\n  printf("hi\\n");\n}`,
    },
    {
        title: "Dangling else",
        body: "else binds to the nearest unmatched if. Braces make it explicit.",
        bad: `if (marks >= 40)\n  if (marks >= 75)\n    printf("B\\n");\n  else  // -> inner if!\n    printf("Fail?\\n");`,
        good: `if (marks >= 40) {\n  if (marks >= 75) {\n    printf("B\\n");\n  }\n} else {\n  printf("Fail\\n");\n}`,
    },
    {
        title: "Missing break",
        body: "switch falls through without break and runs the next case too.",
        bad: `switch (day) {\n  case 3:\n    printf("Wed\\n");\n    // no break -> falls through!\n  case 4:\n    printf("Thu\\n");\n}`,
        good: `switch (day) {\n  case 3:\n    printf("Wed\\n");\n    break;  // stops here\n  case 4:\n    printf("Thu\\n");\n    break;\n}`,
    },
    {
        title: "Nested ternary",
        body: "It compiles, but nobody can read it. Prefer if-else past one level.",
        bad: `int r = a ? b\n        : c ? d\n              : e;  // confusing`,
        good: `int r;\nif (a)      r = b;\nelse if (c) r = d;\nelse        r = e;`,
    },
];

export default function Slide08Summary() {
    return (
        <div className="space-y-6">
            <div className="grid items-start gap-6 lg:grid-cols-2">
                {/* Theory on the left */}
                <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-fuchsia-600">
                        06 · Expression power + wrap-up
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                        The conditional operator{" "}
                        <span className="rounded bg-fuchsia-100 px-1.5 py-0.5 font-mono font-semibold text-fuchsia-800">
                            ?:
                        </span>
                        , commonly called the ternary operator, is the only
                        operator in C that takes three operands. It evaluates
                        the condition; if non-zero (true), the second operand
                        becomes the value of the whole expression, otherwise
                        the third does. It is an{" "}
                        <span className="font-semibold text-slate-800">
                            expression that yields a value
                        </span>
                        , unlike if-else, which is a statement.
                    </p>
                    <p className="mt-3 rounded-2xl border border-fuchsia-200 bg-gradient-to-br from-fuchsia-50 to-violet-50 p-4 text-sm leading-relaxed text-fuchsia-950 shadow-sm">
                        <span className="font-bold">In simple terms: </span>
                        a one-line if-else that hands you back an answer:
                        &ldquo;True? Give me this, otherwise that.&rdquo;
                    </p>
                    <div className="mt-3 rounded-2xl border border-slate-200 bg-slate-950 p-4 font-mono text-sm text-slate-200 shadow-lg">
                        condition <span className="text-fuchsia-300">?</span> value_if_true{" "}
                        <span className="text-fuchsia-300">:</span> value_if_false;
                    </div>
                </div>

                {/* Code on the right */}
                <div className="space-y-4 lg:sticky lg:top-4">
                    <CodeBlock
                        code={CODE}
                        title="ternary.c"
                        showOutput={OUTPUT}
                    />
                </div>
            </div>

            {/* Full comparison table */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 bg-slate-950 px-4 py-3">
                    <p className="text-sm font-bold text-white">
                        Whole chapter at a glance
                    </p>
                    <span className="rounded-full bg-white/10 px-2.5 py-1 font-mono text-[11px] font-semibold text-slate-300">
                        6 constructs · 1 idea
                    </span>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[560px] text-left text-sm">
                        <thead>
                            <tr className="bg-slate-50 text-[11px] uppercase tracking-wider text-slate-500">
                                <th className="px-4 py-2.5 font-bold">Statement</th>
                                <th className="px-4 py-2.5 font-bold">Best for</th>
                                <th className="px-4 py-2.5 font-bold">Note</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ROWS.map((r, i) => (
                                <tr
                                    key={r[0]}
                                    className={`border-t border-slate-100 transition-colors hover:bg-indigo-50/50 ${
                                        i % 2 === 1 ? "bg-slate-50/50" : "bg-white"
                                    }`}
                                >
                                    <td className="px-4 py-2.5">
                                        <span className={`rounded-full px-2.5 py-1 font-mono text-xs font-bold ${r[3]}`}>
                                            {r[0]}
                                        </span>
                                    </td>
                                    <td className="px-4 py-2.5 text-slate-600">
                                        {r[1]}
                                    </td>
                                    <td className="px-4 py-2.5 text-slate-600">
                                        {r[2]}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Pitfalls */}
            <div>
                <p className="text-xs font-bold uppercase tracking-widest text-rose-500">
                    Avoid these · live demo material
                </p>
                <h3 className="mt-1 text-lg font-extrabold tracking-tight text-slate-900">
                    4 classic mistakes
                </h3>
                <div className="mt-3 grid gap-4 md:grid-cols-2">
                    {PITFALLS.map((p, i) => (
                        <div
                            key={p.title}
                            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                        >
                            <div className="flex items-center gap-2 p-4 pb-0">
                                <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-rose-100 text-xs font-extrabold text-rose-600">
                                    {i + 1}
                                </span>
                                <p className="text-sm font-bold text-slate-800">
                                    {p.title}
                                </p>
                            </div>
                            <p className="px-4 pt-1.5 text-xs leading-relaxed text-slate-500">
                                {p.body}
                            </p>
                            <div className="grid gap-2 p-4">
                                {(() => {
                                    const isConfusing = i === PITFALLS.length - 1;
                                    return (
                                        <div
                                            className={`overflow-hidden rounded-xl border ${
                                                isConfusing
                                                    ? "border-amber-300"
                                                    : "border-rose-200"
                                            }`}
                                        >
                                            <p
                                                className={`px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider ${
                                                    isConfusing
                                                        ? "bg-amber-50 text-amber-600"
                                                        : "bg-rose-50 text-rose-500"
                                                }`}
                                            >
                                                {isConfusing ? "? Confusing" : "✗ Bug"}
                                            </p>
                                            <pre
                                                className={`overflow-x-auto bg-slate-950 px-3 py-2.5 font-mono text-[12px] leading-relaxed ${
                                                    isConfusing
                                                        ? "text-amber-300"
                                                        : "text-rose-300"
                                                }`}
                                            >
                                                {p.bad}
                                            </pre>
                                        </div>
                                    );
                                })()}
                                <div className="overflow-hidden rounded-xl border border-emerald-200">
                                    <p className="bg-emerald-50 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-600">
                                        ✓ Fix
                                    </p>
                                    <pre className="overflow-x-auto bg-slate-950 px-3 py-2.5 font-mono text-[12px] leading-relaxed text-emerald-300">
                                        {p.good}
                                    </pre>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Thanks */}
            <div className="relative overflow-hidden rounded-2xl bg-slate-950 p-8 text-center shadow-xl">
                <div
                    aria-hidden
                    className="pointer-events-none absolute -top-16 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-indigo-500/30 blur-3xl"
                />
                <p className="relative text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                    Thank You!{" "}
                    <span className="bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text text-transparent">
                        Questions?
                    </span>
                </p>
                <p className="relative mt-2 text-sm text-slate-400">
                    ...but first, let&apos;s run some C live {"->"}
                </p>
            </div>
        </div>
    );
}
