import CodeBlock from "../components/CodeBlock";
import switchSVG from "../assets/switch-statement-flowchart.svg";

const SYNTAX = `switch (expression) {
  case constant1:
    // runs if expression == constant1
    break;
  case constant2:
    // runs if expression == constant2
    break;
  default:
    // runs if no case matches
}`;

const CODE = `#include <stdio.h>

int main() {
  int day = 3;

  switch (day) {
    case 1:
      printf("Monday\\n");
      break;
    case 2:
      printf("Tuesday\\n");
      break;
    case 3:
      printf("Wednesday\\n");
      break;
    default:
      printf("Invalid day\\n");
  }
  return 0;
}`;

const OUTPUT = "Wednesday";

export default function Slide07Switch() {
  return (
    <div className="space-y-6">
      <div className="grid items-start gap-6 lg:grid-cols-2">
        {/* Code FIRST on the left — mirrored vs the ladder slide */}
        <div className="order-1 space-y-4 lg:sticky lg:top-4">
          <CodeBlock code={CODE} title="switch.c" showOutput={OUTPUT} />
          <div className="rounded-2xl border border-rose-200 bg-gradient-to-br from-rose-50 to-red-50 p-4 text-xs leading-relaxed text-rose-950 shadow-sm">
            <p className="flex items-center gap-2 font-bold">
              <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-rose-500 text-sm text-white">
                !
              </span>
              Fall-through warning
            </p>
            <p className="mt-1.5 text-rose-900/80">
              <code className="rounded bg-rose-100 px-1 font-mono font-semibold">break</code> stops
              the slide into the next case. Forget it and Wednesday prints
              extra lines — try it live in the Playground.
            </p>
          </div>
        </div>

        {/* Theory on the right with cyan accents */}
        <div className="order-2">
          <p className="text-xs font-bold uppercase tracking-widest text-cyan-600">
            05 · Menu-style branching
          </p>
          <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
            The{" "}
            <span className="rounded bg-cyan-100 px-1.5 py-0.5 font-mono font-semibold text-cyan-900">
              switch
            </span>{" "}
            statement is a multi-way selection construct that compares a single
            integral expression (of type{" "}
            <span className="font-mono font-semibold text-slate-800">
              int
            </span>
            ,{" "}
            <span className="font-mono font-semibold text-slate-800">char</span>,
            or an enumeration) against constant{" "}
            <span className="font-mono font-semibold text-slate-800">case</span>{" "}
            labels. On a match, execution jumps to that label and continues
            until a{" "}
            <span className="font-mono font-semibold text-slate-800">break</span>{" "}
            or the end of the switch. No match {"->"} optional{" "}
            <span className="font-mono font-semibold text-slate-800">
              default
            </span>
            .
          </p>
          <p className="mt-3 rounded-2xl border border-cyan-200 bg-gradient-to-br from-cyan-50 to-sky-50 p-4 text-sm leading-relaxed text-cyan-950 shadow-sm">
            <span className="font-bold">In simple terms: </span>
            a switch is a menu. You give it one value, and it jumps straight
            to the matching option. Default is &ldquo;none of the above&rdquo;.
          </p>
          <ul className="mt-3 grid gap-2 text-sm">
            <li className="flex gap-2.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-slate-600 shadow-sm">
              <span className="font-bold text-cyan-600">✓</span>
              <span>
                Works on <code className="rounded bg-slate-100 px-1 font-mono text-slate-800">int / char</code> — not ranges or floats.
              </span>
            </li>
            <li className="flex gap-2.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-slate-600 shadow-sm">
              <span className="font-bold text-cyan-600">✓</span>
              <span>
                <code className="rounded bg-slate-100 px-1 font-mono text-slate-800">default</code> is like the final else of a ladder.
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Syntax strip + flowchart centered below */}
      <div className="flex flex-col items-center gap-5">
        <div className="w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-xl">
          <div className="flex items-center justify-between border-b border-white/10 bg-slate-900 px-4 py-2">
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-cyan-300">
              syntax · switch
            </span>
            <span className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
            </span>
          </div>
          <pre className="m-0 bg-transparent p-4 font-mono text-[13px] leading-relaxed text-slate-200">
            <code className="language-c">{SYNTAX}</code>
          </pre>
        </div>
        <figure className="w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="mb-3 flex items-center justify-between">
            <span className="rounded-full bg-cyan-100 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-cyan-800">
              Flowchart
            </span>
            <span className="font-mono text-[11px] text-slate-400">day = 3</span>
          </div>
          <img
            src={switchSVG}
            alt="switch flowchart: expression matches a case label, default catches the rest"
            className="mx-auto h-auto w-full object-contain"
          />
          <figcaption className="mt-3 rounded-xl bg-slate-50 p-3 text-center text-xs leading-relaxed text-slate-500">
            day = 3 jumps straight to{" "}
            <span className="rounded bg-cyan-100 px-1.5 py-0.5 font-semibold text-cyan-800">case 3</span> {"->"}
            prints Wednesday. No match would land on{" "}
            <span className="font-semibold text-slate-700">default</span>.
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
