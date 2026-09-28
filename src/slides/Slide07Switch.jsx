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
        <div className="order-1">
          <CodeBlock code={CODE} title="switch.c" showOutput={OUTPUT} />
          <div className="mt-3 rounded-xl border border-red-200 bg-red-50 p-3 text-xs leading-relaxed text-red-800">
            <span className="font-bold">Fall-through warning:</span>{" "}
            <span className="font-mono">break</span> stops the slide into the
            next case. Forgetting it runs the following cases too — try
            deleting a break live and watch Wednesday print extra lines.
          </div>
        </div>

        {/* Theory on the right with cyan accents */}
        <div className="order-2">
          <p className="text-sm leading-relaxed text-slate-600 sm:text-[15px]">
            The{" "}
            <span className="font-mono font-semibold text-slate-800">
              switch
            </span>{" "}
            statement is a multi-way selection construct in C that compares the
            value of a single integral expression (of type{" "}
            <span className="font-mono font-semibold text-slate-800">
              int
            </span>
            ,{" "}
            <span className="font-mono font-semibold text-slate-800">char</span>,
            or an enumeration) against a series of constant{" "}
            <span className="font-mono font-semibold text-slate-800">case</span>{" "}
            labels. When a match is found, execution begins at that label and
            continues until a{" "}
            <span className="font-mono font-semibold text-slate-800">break</span>{" "}
            statement or the end of the switch is reached. If no label matches,
            control transfers to the optional{" "}
            <span className="font-mono font-semibold text-slate-800">
              default
            </span>{" "}
            label.
          </p>
          <p className="mt-3 rounded-xl border border-cyan-200 bg-cyan-50 p-3 text-sm leading-relaxed text-cyan-900">
            In simple terms: a switch is a menu. You give it one value, and it
            jumps straight to the option that matches. Each option is a case,
            and default is the &ldquo;none of the above&rdquo; choice.
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600">
            <li>
              Works on <code className="rounded bg-slate-100 px-1 font-mono">int / char</code> — not ranges or floats.
            </li>
            <li>
              <code className="rounded bg-slate-100 px-1 font-mono">default</code> is like the final else of a ladder.
            </li>
          </ul>
        </div>
      </div>

      {/* Syntax strip + flowchart centered below */}
      <div className="flex flex-col items-center gap-5">
        <div className="w-full max-w-2xl rounded-xl bg-slate-950 p-4 font-mono text-[13px] leading-relaxed text-slate-200 shadow-lg">
          <pre className="m-0 bg-transparent p-0">
            <code className="language-c">{SYNTAX}</code>
          </pre>
        </div>
        <figure className="w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <img
            src={switchSVG}
            alt="switch flowchart: expression matches a case label, default catches the rest"
            className="mx-auto h-auto w-full object-contain"
          />
          <figcaption className="mt-3 rounded-xl bg-slate-50 p-3 text-center text-xs leading-relaxed text-slate-500">
            Flowchart: day = 3 jumps straight to{" "}
            <span className="font-semibold text-slate-700">case 3</span> →
            prints Wednesday. No match would land on{" "}
            <span className="font-semibold text-slate-700">default</span>.
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
