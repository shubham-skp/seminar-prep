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
                    <p className="text-xs font-bold uppercase tracking-widest text-indigo-600">
                        01 · One-way choice
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                        The{" "}
                        <span className="rounded bg-indigo-100 px-1.5 py-0.5 font-mono font-semibold text-indigo-800">
                            if
                        </span>{" "}
                        statement is the simplest form of conditional control in C.
                        It evaluates a given expression, and if the result is
                        non-zero (
                        <span className="font-mono font-semibold text-slate-800">
                            true
                        </span>
                        ), the block associated with it is executed; if
                        the result is zero (
                        <span className="font-mono font-semibold text-slate-800">
                            false
                        </span>
                        ), that block is bypassed and execution continues with the
                        next statement after it.
                    </p>
                    <p className="mt-3 rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-violet-50 p-4 text-sm leading-relaxed text-indigo-950 shadow-sm">
                        <span className="font-bold">In simple terms: </span>
                        an if statement says, &ldquo;If this is true, do this.
                        Otherwise, just move on.&rdquo; There is no
                        &ldquo;otherwise&rdquo; here — if the condition fails,
                        the program simply skips the block.
                    </p>

                    <h3 className="mt-5 text-xs font-bold uppercase tracking-widest text-slate-500">
                        Syntax
                    </h3>
                    <div className="mt-2 rounded-2xl border border-slate-200 bg-slate-950 p-4 font-mono text-sm leading-relaxed text-slate-200 shadow-lg">
                        <span className="text-violet-300">if</span>{" "}
                        <span className="text-slate-400">(condition)</span>{" "}
                        {"{"}
                        <br />
                        <span className="text-slate-500">
                            &nbsp;&nbsp;// runs only if condition is true
                        </span>
                        <br />
                        {"}"}
                    </div>
                    <ul className="mt-4 space-y-2 text-sm text-slate-600">
                        <li className="flex gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm">
                            <span className="font-bold text-indigo-600">{"->"}</span>
                            Condition = any expression {"->"} 0 is false, non-zero is
                            true.
                        </li>
                    </ul>
                </div>

                {/* Right: code + try card */}
                <div className="space-y-4 lg:sticky lg:top-4">
                    <CodeBlock code={CODE} title="if_demo.c" showOutput={OUTPUT} />
                    <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm shadow-sm">
                        <p className="font-bold text-slate-800">
                            🧪 Try it live
                        </p>
                        <p className="mt-1 text-slate-500">
                            Change{" "}
                            <code className="rounded bg-slate-100 px-1 font-mono text-slate-700">
                                age = 19
                            </code>{" "}
                            to{" "}
                            <code className="rounded bg-slate-100 px-1 font-mono text-slate-700">
                                16
                            </code>{" "}
                            — the output disappears. Jump to the{" "}
                            <span className="font-semibold text-emerald-600">
                                Live Playground
                            </span>{" "}
                            on the last slide to run it.
                        </p>
                    </div>
                </div>
            </div>

            {/* Flowchart centered below theory + code */}
            <div className="flex justify-center">
                <figure className="w-full max-w-lg overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="mb-3 flex items-center justify-between">
                        <span className="rounded-full bg-indigo-100 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-indigo-700">
                            Flowchart
                        </span>
                        <span className="font-mono text-[11px] text-slate-400">
                            age = 19
                        </span>
                    </div>
                    <img
                        src={ifSVG}
                        alt="if statement flowchart: diamond checks condition, true runs code, false skips"
                        className="mx-auto h-auto w-full max-w-md object-contain"
                    />
                    <figcaption className="mt-3 rounded-xl bg-slate-50 p-3 text-center text-xs leading-relaxed text-slate-500">
                        Diamond checks age {">="} 18 {"->"}{" "}
                        <span className="rounded bg-emerald-100 px-1.5 py-0.5 font-semibold text-emerald-700">
                            true
                        </span>{" "}
                        prints message,{" "}
                        <span className="rounded bg-slate-200 px-1.5 py-0.5 font-semibold text-slate-600">
                            false
                        </span>{" "}
                        skips.
                    </figcaption>
                </figure>
            </div>
        </div>
    );
}
