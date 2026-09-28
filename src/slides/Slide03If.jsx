import CodeBlock from "../components/CodeBlock";
import ifSVG from "../assets/if-statement-flowchart.svg";

const CODE = `#include <stdio.h>

int main() {
  int age = 19;

  if (age >= 18) {
    printf("You can vote.\\n");
  }

  return 0;
}`;

const OUTPUT = "You can vote.";

export default function Slide03If() {
    return (
        <div className="space-y-6">
            <div className="grid items-start gap-6 lg:grid-cols-2">
            {/* Left: explanation + syntax */}
            <div>
                <p className="text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                    The{" "}
                    <span className="font-mono font-semibold text-slate-800">
                        if
                    </span>{" "}
                    statement is the simplest form of conditional control in C.
                    It evaluates a given expression, and if the result is
                    non-zero (
                    <span className="font-mono font-semibold text-slate-800">
                        true
                    </span>
                    ), the statement or block associated with it is executed; if
                    the result is zero (
                    <span className="font-mono font-semibold text-slate-800">
                        false
                    </span>
                    ), that block is bypassed and execution continues with the
                    next statement after it.
                </p>
                <p className="mt-3 rounded-xl border border-indigo-100 bg-indigo-50 p-3 text-sm leading-relaxed text-indigo-900">
                    In simple terms: an if statement says, "If this is
                    true, do this. Otherwise, just move on." There is no
                    "otherwise" action here - if the condition
                    fails, the program simply skips the block.
                </p>

                <h3 className="mt-5 font-bold text-slate-800">Syntax</h3>
                <div className="mt-2 rounded-xl bg-slate-100 p-4 font-mono text-sm text-slate-700">
                    if (condition) {"{"}
                    <br />
                    &nbsp;&nbsp;// runs only if given condition is true
                    <br />
                    {"}"}
                </div>
                <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-600">
                    <li>
                        Condition = any expression → 0 is false, non-zero is
                        true.
                    </li>
                </ul>
            </div>

            {/* Right: code */}
            <CodeBlock code={CODE} title="if_demo.c" showOutput={OUTPUT} />
            </div>

            {/* Flowchart centered below theory + code */}
            <div className="flex justify-center">
                <figure className="w-full max-w-lg overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <img
                        src={ifSVG}
                        alt="if statement flowchart: diamond checks condition, true runs code, false skips"
                        className="mx-auto h-auto w-full max-w-md object-contain"
                    />
                    <figcaption className="mt-3 rounded-xl bg-slate-50 p-3 text-center text-xs leading-relaxed text-slate-500">
                        Flowchart: diamond checks age ≥ 18 →{" "}
                        <span className="font-semibold text-slate-700">
                            true
                        </span>{" "}
                        prints message,{" "}
                        <span className="font-semibold text-slate-700">
                            false
                        </span>{" "}
                        skips.
                    </figcaption>
                </figure>
            </div>
        </div>
    );
}
