import diamondSVG from "../assets/diamond.svg";

// Slide 2 — Why decision control?
export default function Slide02Why() {
  return (
    <div className="grid items-start gap-5 md:grid-cols-2">
      <div className="rounded-2xl border border-slate-200 bg-green-100 p-5 sm:p-6">
        <h3 className="font-bold text-slate-800">What is Decision Control?</h3>
        <p className="mt-2 text-base leading-relaxed text-slate-600">
          Decision control is the mechanism by which a C program evaluates a
          condition and, depending on whether it holds true or false, selects
          one path of execution from several possible paths, thereby departing
          from strictly sequential, top-to-bottom flow.
        </p>
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          In simple terms: normally, C reads your code line by line, in order.
          Decision control lets the program pause, ask a question, and choose
          what to do next based on the answer.
        </p>
      </div>
      <div className="grid gap-5">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <h3 className="font-bold text-slate-800">Without branching 🤖</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            The program marches through every statement in order, top to
            bottom, with no way to react to data. Every run follows the same
            single path, whatever the input.
          </p>
          <blockquote className="mt-2 border-l-2 border-slate-300 pl-3 text-sm italic text-slate-500">
            &ldquo;A program that cannot decide is merely a list. Decision
            control is what makes it think.&rdquo;
          </blockquote>
          <div className="mt-3 rounded-xl bg-white p-3 font-mono text-xs text-slate-500">
            start → step 1 → step 2 → end, that&apos;s it!
          </div>
        </div>
        <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-5">
          <h3 className="font-bold text-indigo-900">With decision control 🧠</h3>
          <p className="mt-2 text-sm leading-relaxed text-indigo-900/80">
            The program tests a condition and chooses which block to run. The
            same code can now behave differently for different inputs. <br />
            For Example: printing "Pass" for a score of 60 and "Fail"
            for 30.
          </p>
          <div className="mt-3 rounded-xl bg-white p-3 font-mono text-xs text-slate-600">
            start → condition? → yes / no → (path1 / path2) → end
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 md:col-span-2">
          <img
            src={diamondSVG}
            alt="Diamond flowchart symbol for decision"
            className="h-14 w-14 shrink-0 object-contain"
          />
          <p>
            <span className="font-bold">Flowchart symbol for decision: </span>
            the diamond means a yes/no question - each answer takes a
            different path.
          </p>
        </div>
      </div>
    </div>
  );
}
