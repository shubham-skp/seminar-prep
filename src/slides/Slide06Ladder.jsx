import CodeBlock from "../components/CodeBlock";

const CODE = `#include <stdio.h>

int main() {
  int marks = 80;

  if (marks >= 90) {
    printf("Grade A\\n");
  } else if (marks >= 75) {
    printf("Grade B\\n");
  } else if (marks >= 40) {
    printf("Grade C\\n");
  } else {
    printf("Fail\\n");
  }
  return 0;
}`;

const CODE1 = `#include <stdio.h>

int main() {
  int marks = 80;

  if (marks >= 90) {            // False, skip to next
    printf("Grade A\\n");
  } else if (marks >= 75) {     // True, print and exit ladder
    printf("Grade B\\n");
  } else if (marks >= 40) {     
    printf("Grade C\\n");
  } else {
    printf("Fail\\n");
  }
  return 0;
}`;

// separate if statements
const CODE2 = `#include <stdio.h>

int main() {
  int marks = 80;

  if (marks >= 90) {        // False, skip to next
    printf("Grade A\\n");
  }
  if (marks >= 75) {        // True, print and continue to next
    printf("Grade B\\n");
  }
  if (marks >= 40) {        // True, print and continue to next
    printf("Grade C\\n");
  }
  if (marks < 40) {         // False, skip to next
    printf("Fail\\n");
  }
  return 0;
}`;

const OUTPUT = "Grade B";
const OUTPUT2 = `Grade B
Grade C`;

const COMPARE_ROWS = [
    [
        "Relationship between conditions",
        "Linked; each depends on the previous failing",
        "Independent of one another",
    ],
    [
        "Blocks executed",
        "Exactly one (at most one with a final else)",
        "None, one, or many",
    ],
    [
        "Conditions evaluated",
        "Stops at the first true one",
        "Every condition is always checked",
    ],
    ["Default action", "Possible with a final else", "No built-in default"],
    [
        "Best used when",
        "Choices are mutually exclusive (grades, categories)",
        "Checks are unrelated or can all apply together",
    ],
];

const TRACE_STEPS = [
    {
        check: "marks >= 90 -> 80 >= 90",
        result: "false",
        action: "skip, go to next",
        state: "miss",
    },
    {
        check: "marks >= 75 -> 80 >= 75",
        result: "true",
        action: "print “Grade B”, exit ladder",
        state: "hit",
    },
    {
        check: "marks >= 40 / else",
        result: "skipped",
        action: "never evaluated",
        state: "skipped",
    },
];

function stepStyles(state) {
    if (state === "hit")
        return {
            dot: "bg-emerald-500",
            badge: "bg-emerald-100 text-emerald-800",
            row: "border-emerald-200 bg-emerald-50/60",
        };
    if (state === "miss")
        return {
            dot: "bg-rose-400",
            badge: "bg-rose-100 text-rose-700",
            row: "border-slate-200 bg-white",
        };
    return {
        dot: "bg-slate-300",
        badge: "bg-slate-100 text-slate-500",
        row: "border-slate-200 bg-slate-50/60 opacity-75",
    };
}

export default function Slide06Ladder() {
    return (
        <div className="space-y-8">
            {/* ── Top: theory + code ─────────────────────────── */}
            <div className="grid items-start gap-6 lg:grid-cols-2">
                {/* Theory on the left with violet accents */}
                <div>
                    <p className="text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                        The{" "}
                        <span className="font-mono font-semibold text-slate-800">
                            if-else ladder
                        </span>
                        , also called the else-if ladder, is a multi-way
                        conditional construct in C in which several conditions
                        are arranged in a sequence, each introduced by{" "}
                        <span className="font-mono font-semibold text-slate-800">
                            else if
                        </span>{" "}
                        after the initial{" "}
                        <span className="font-mono font-semibold text-slate-800">
                            if
                        </span>
                        . The conditions are evaluated from top to bottom; as
                        soon as one evaluates to non-zero (true), its associated
                        block is executed and the remainder of the ladder is
                        bypassed. If none of the conditions holds, the optional
                        final{" "}
                        <span className="font-mono font-semibold text-slate-800">
                            else
                        </span>{" "}
                        block is executed as a default.
                    </p>
                    <p className="mt-3 rounded-xl border border-violet-200 bg-violet-50 p-3 text-sm leading-relaxed text-violet-900">
                        In simple terms: an if-else ladder is a list of
                        questions asked one after another. The program starts at
                        the top, and the first question that gets a
                        &ldquo;yes&rdquo; wins. It runs that block and skips
                        everything below. If every answer is &ldquo;no&rdquo;,
                        the final else acts as the fallback.
                    </p>
                    <h3 className="mt-5 text-sm font-bold tracking-wide text-slate-800 uppercase">
                        Syntax
                    </h3>
                    <div className="mt-2 rounded-xl border border-slate-200 bg-slate-100 p-4 font-mono text-sm leading-relaxed text-slate-700 shadow-sm">
                        if (condition1) {"{"} ... {"}"}
                        <br />
                        else if (condition2) {"{"} ... {"}"}
                        <br />
                        else {"{"} ... {"}"}{" "}
                        <span className="text-slate-400">// default</span>
                    </div>
                </div>

                {/* Code on the right + execution trace */}
                <div className="space-y-4">
                    <CodeBlock
                        code={CODE}
                        title="ladder.c"
                        showOutput={OUTPUT}
                    />

                    {/* Trace card: what happens with marks = 80 */}
                    <div className="overflow-hidden rounded-2xl border border-violet-200 bg-white shadow-sm">
                        <div className="flex items-center justify-between gap-2 bg-violet-600 px-4 py-2.5">
                            <p className="text-xs font-bold tracking-wide text-white uppercase">
                                Live trace · marks = 80
                            </p>
                            <span className="rounded-full bg-white/20 px-2 py-0.5 font-mono text-[11px] font-semibold text-white">
                                top {"->"} bottom
                            </span>
                        </div>
                        <ol className="space-y-2 p-3">
                            {TRACE_STEPS.map((s) => {
                                const st = stepStyles(s.state);
                                return (
                                    <li
                                        key={s.check}
                                        className={`flex items-start gap-3 rounded-xl border px-3 py-2 ${st.row}`}
                                    >
                                        <span
                                            className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${st.dot}`}
                                        />
                                        <div className="min-w-0 flex-1">
                                            <p className="font-mono text-[13px] font-semibold text-slate-800">
                                                {s.check}
                                            </p>
                                            <p className="mt-0.5 text-xs text-slate-500">
                                                {s.action}
                                            </p>
                                        </div>
                                        <span
                                            className={`shrink-0 rounded-full px-2 py-0.5 font-mono text-[11px] font-bold uppercase ${st.badge}`}
                                        >
                                            {s.result}
                                        </span>
                                    </li>
                                );
                            })}
                        </ol>
                        <p className="border-t border-violet-100 bg-violet-50/60 px-4 py-2.5 text-xs leading-relaxed text-violet-900">
                            <span className="font-bold">
                                Order matters:
                            </span>{" "}
                            put the strictest condition first. 80
                            fails <code className="rounded bg-violet-100 px-1 font-mono">{">= 90"}</code>,
                            hits <code className="rounded bg-violet-100 px-1 font-mono">{">= 75"}</code> {"->"}
                            Grade B, rest skipped.
                        </p>
                    </div>
                </div>
            </div>

            {/* ── Ladder vs separate ifs ─────────────────────── */}
            <section>
                <div className="flex flex-wrap items-end justify-between gap-2">
                    <div>
                        <p className="text-xs font-bold tracking-widest text-violet-600 uppercase">
                            Key comparison
                        </p>
                        <h3 className="mt-1 text-lg font-extrabold text-slate-900 sm:text-xl">
                            Ladder vs separate if statements
                        </h3>
                        <p className="mt-1 text-sm text-slate-500">
                            Same conditions, different meaning - one ladder
                            stops at the first match, separate ifs ask every
                            question.
                        </p>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold">
                        <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-emerald-800">
                            ✓ ladder {"->"} 1 output
                        </span>
                        <span className="rounded-full bg-amber-100 px-2.5 py-1 text-amber-800">
                            ⚠ separate {"->"} 2 outputs
                        </span>
                    </div>
                </div>

                <div className="mt-4 grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr]">
                    <div className="min-w-0 rounded-2xl">
                        <CodeBlock
                            code={CODE1}
                            title="ladder.c"
                            showOutput={OUTPUT}
                        />
                    </div>

                    <div className="flex items-center justify-center">
                        <span className="rounded-full border border-slate-200 bg-slate-900 px-4 py-1.5 text-sm font-extrabold tracking-wide text-white uppercase shadow-sm">
                            vs
                        </span>
                    </div>

                    <div className="min-w-0 rounded-2xl ring-2 ">
                        <CodeBlock
                            code={CODE2}
                            title="separate_ifs.c"
                            showOutput={OUTPUT2}
                        />
                    </div>
                </div>

                <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                    <div className="border-b border-slate-200 bg-slate-100 px-4 py-2.5 text-sm font-bold text-slate-700">
                        Differences in behavior
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-2xl text-left text-sm">
                            <thead>
                                <tr className="bg-slate-50 text-[11px] tracking-wider text-slate-500 uppercase">
                                    <th className="px-4 py-2.5 font-bold">
                                        Feature
                                    </th>
                                    <th className="px-4 py-2.5 font-bold text-emerald-700">
                                        if-else ladder
                                    </th>
                                    <th className="px-4 py-2.5 font-bold">
                                        Separate if statements
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {COMPARE_ROWS.map((r, i) => (
                                    <tr
                                        key={r[0]}
                                        className={`border-t border-slate-100 align-top transition-colors hover:bg-violet-50/50 ${
                                            i % 2 === 1 ? "bg-slate-50/50" : "bg-white"
                                        }`}
                                    >
                                        <td className="px-4 py-2.5 font-semibold text-slate-700">
                                            {r[0]}
                                        </td>
                                        <td className="px-4 py-2.5 font-medium text-emerald-800">
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
                    <p className="border-t border-amber-200 bg-amber-50 px-4 py-2.5 text-xs leading-relaxed text-amber-900">
                        <span className="font-bold">In short: </span>a
                        ladder is one question with several possible answers -
                        it stops at the first match. Separate ifs are several
                        unrelated questions - the program asks every one of
                        them.
                    </p>
                </div>
            </section>
        </div>
    );
}
