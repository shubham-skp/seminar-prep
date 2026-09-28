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

const OUTPUT = "Grade B";

const COMPARE_ROWS = [
  ["Relationship between conditions", "Linked; each depends on the previous failing", "Independent of one another"],
  ["Blocks executed", "Exactly one (at most one without a final else)", "None, one, or many"],
  ["Conditions evaluated", "Stops at the first true one", "Every condition is always checked"],
  ["Default action", "Possible with a final else", "No built-in default"],
  ["Best used when", "Choices are mutually exclusive (grades, categories)", "Checks are unrelated or can all apply together"],
];

export default function Slide06Ladder() {
  return (
    <div className="space-y-6">
      <div className="grid items-start gap-6 lg:grid-cols-2">
        {/* Theory on the left with violet accents */}
        <div>
          <p className="text-sm leading-relaxed text-slate-600 sm:text-[15px]">
            The{" "}
            <span className="font-mono font-semibold text-slate-800">
              if-else ladder
            </span>
            , also called the else-if ladder, is a multi-way conditional
            construct in C in which several conditions are arranged in a
            sequence, each introduced by{" "}
            <span className="font-mono font-semibold text-slate-800">
              else if
            </span>{" "}
            after the initial{" "}
            <span className="font-mono font-semibold text-slate-800">if</span>.
            The conditions are evaluated from top to bottom; as soon as one
            evaluates to non-zero (true), its associated block is executed and
            the remainder of the ladder is bypassed. If none of the conditions
            holds, the optional final{" "}
            <span className="font-mono font-semibold text-slate-800">else</span>{" "}
            block is executed as a default.
          </p>
          <p className="mt-3 rounded-xl border border-violet-200 bg-violet-50 p-3 text-sm leading-relaxed text-violet-900">
            In simple terms: an if-else ladder is a list of questions asked one
            after another. The program starts at the top, and the first question
            that gets a &ldquo;yes&rdquo; wins. It runs that block and skips
            everything below. If every answer is &ldquo;no&rdquo;, the final
            else acts as the fallback.
          </p>
          <div className="mt-3 rounded-xl bg-slate-100 p-4 font-mono text-sm leading-relaxed text-slate-700">
            if (condition1) {"{"} ... {"}"}
            <br />
            else if (condition2) {"{"} ... {"}"}
            <br />
            else {"{"} ... {"}"} <span className="text-slate-400">// default</span>
          </div>
        </div>

        {/* Code on the right */}
        <div>
          <CodeBlock code={CODE} title="ladder.c" showOutput={OUTPUT} />
          <div className="mt-3 rounded-xl border border-violet-200 bg-violet-50 p-3 text-xs leading-relaxed text-violet-900">
            Order matters: put the strictest condition first. With marks = 80,
            the check 80 &gt;= 90 fails, 80 &gt;= 75 wins — Grade B.
          </div>
        </div>
      </div>

      {/* Ladder vs separate ifs — from data.txt */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
        <div className="bg-slate-100 px-4 py-2 text-sm font-bold text-slate-700">
          Ladder vs separate if statements
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-160 text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-2">Feature</th>
                <th className="px-4 py-2">if-else ladder</th>
                <th className="px-4 py-2">Separate if statements</th>
              </tr>
            </thead>
            <tbody>
              {COMPARE_ROWS.map((r) => (
                <tr key={r[0]} className="border-t border-slate-100 align-top">
                  <td className="px-4 py-2 font-semibold text-slate-700">{r[0]}</td>
                  <td className="px-4 py-2 text-emerald-700">{r[1]}</td>
                  <td className="px-4 py-2 text-slate-600">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="border-t border-slate-100 bg-amber-50 px-4 py-2 text-xs text-amber-900">
          In short: a ladder is one question with several possible answers — it
          stops at the first match. Separate ifs are several unrelated
          questions — the program asks every one of them.
        </p>
      </div>
    </div>
  );
}
