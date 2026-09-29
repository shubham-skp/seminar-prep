import { useMemo, useRef, useState } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-c";

const PRESETS = {
  "if vote": `#include <stdio.h>

int main() {
  int age = 19;
  if (age >= 18) {
    printf("You can vote.\\n");
  } else {
    printf("Too young.\\n");
  }
  return 0;
}`,
  "ladder grades": `#include <stdio.h>

int main() {
  int marks = 80;
  if (marks >= 90) printf("Grade A\\n");
  else if (marks >= 75) printf("Grade B\\n");
  else if (marks >= 40) printf("Grade C\\n");
  else printf("Fail\\n");
  return 0;
}`,
  "switch menu": `#include <stdio.h>

int main() {
  int day = 3;
  switch (day) {
    case 1: printf("Monday\\n"); break;
    case 2: printf("Tuesday\\n"); break;
    case 3: printf("Wednesday\\n"); break;
    default: printf("Invalid day\\n");
  }
  return 0;
}`,
  "scanf demo": `#include <stdio.h>

int main() {
  int marks;
  printf("Enter marks: ");
  if (scanf("%d", &marks) != 1) return 1;
  if (marks >= 40) printf("Pass\\n");
  else printf("Fail\\n");
  return 0;
}`,
};

const DEFAULT_STDIN = {
  "scanf demo": "67\n",
};

export default function Slide09Playground() {
  const [preset, setPreset] = useState("if vote");
  const [code, setCode] = useState(PRESETS["if vote"]);
  const [stdin, setStdin] = useState("");
  const [output, setOutput] = useState("Press Run (or Ctrl+Enter) to compile & execute with gcc.\n");
  const [status, setStatus] = useState("idle"); // idle | running | ok | error
  const [meta, setMeta] = useState(null);
  const editorRef = useRef(null);
  const highlightRef = useRef(null);
  const gutterRef = useRef(null);

  const lineCount = code.split("\n").length;

  // Prism-highlighted HTML behind the transparent textarea (overlay editing)
  const highlighted = useMemo(
    () => Prism.highlight(code + "\n", Prism.languages.c, "c"),
    [code]
  );

  function syncScroll() {
    const el = editorRef.current;
    if (!el) return;
    if (highlightRef.current) {
      highlightRef.current.scrollTop = el.scrollTop;
      highlightRef.current.scrollLeft = el.scrollLeft;
    }
    if (gutterRef.current) gutterRef.current.scrollTop = el.scrollTop;
  }

  function loadPreset(name) {
    setPreset(name);
    setCode(PRESETS[name]);
    setStdin(DEFAULT_STDIN[name] || "");
    setOutput(`Loaded "${name}" — press Run to execute.\n`);
    setStatus("idle");
    setMeta(null);
  }

  function handleTab(e) {
    if (e.key === "Tab") {
      e.preventDefault();
      const el = editorRef.current;
      if (!el) return;
      const { selectionStart, selectionEnd } = el;
      const next =
        code.slice(0, selectionStart) + "  " + code.slice(selectionEnd);
      setCode(next);
      requestAnimationFrame(() => {
        el.selectionStart = el.selectionEnd = selectionStart + 2;
      });
    }
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      runCode();
    }
  }

  async function runCode() {
    if (status === "running") return;
    setStatus("running");
    setOutput("Compiling with gcc...\n");
    setMeta(null);
    const t0 = performance.now();
    try {
      const res = await fetch("https://wandbox.org/api/compile.json", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          compiler: "gcc-head-c",
          code,
          options: "-Wall",
          stdin,
        }),
      });
      if (!res.ok) throw new Error(`API responded ${res.status}`);
      const data = await res.json();
      const ms = Math.round(performance.now() - t0);
      const progOut = data.program_output || "";
      const progErr = data.program_error || "";
      const compErr = data.compiler_error || data.compiler_output || "";
      const exit = parseInt(data.status, 10);
      let text = "";
      if (compErr.trim()) text += `[compiler]\n${compErr}\n`;
      if (progOut) text += progOut + (progOut.endsWith("\n") ? "" : "\n");
      if (progErr && progErr !== progOut) text += `\n[stderr]\n${progErr}`;
      if (!text.trim())
        text = "(no output — program compiled but printed nothing)\n";
      text += `\n— exit ${Number.isNaN(exit) ? "?" : exit} · ${ms}ms · gcc via Wandbox —`;
      setOutput(text);
      setStatus(exit === 0 ? "ok" : "error");
      setMeta({ exit, ms, compiler: "gcc-head-c" });
    } catch (err) {
      setOutput(
        `Could not reach the run API.\n${err.message}\n\nTip: check internet, then try again. The slides still work offline — only Run needs network.`
      );
      setStatus("error");
    }
  }

  function copyCode() {
    navigator.clipboard?.writeText(code).catch(() => {});
  }

  const statusPill =
    status === "running"
      ? "bg-amber-400/15 text-amber-300 ring-amber-400/30 animate-pulse"
      : status === "ok"
        ? "bg-emerald-400/15 text-emerald-300 ring-emerald-400/30"
        : status === "error"
          ? "bg-rose-400/15 text-rose-300 ring-rose-400/30"
          : "bg-white/10 text-slate-300 ring-white/15";

  const statusLabel =
    status === "running"
      ? "● Running..."
      : status === "ok"
        ? "● Exit 0 · success"
        : status === "error"
          ? "● Finished with issues"
          : "● Ready";

  return (
    <div className="space-y-4 text-slate-200">
      {/* toolbar */}
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex flex-wrap gap-2">
          {Object.keys(PRESETS).map((name) => (
            <button
              key={name}
              type="button"
              onClick={() => loadPreset(name)}
              className={`rounded-full px-3.5 py-1.5 font-mono text-xs font-semibold transition active:scale-95 ${
                preset === name
                  ? "bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/25"
                  : "bg-white/5 text-slate-300 ring-1 ring-white/10 hover:bg-white/10 hover:text-white"
              }`}
            >
              {name}
            </button>
          ))}
        </div>
        <div className="ml-auto flex items-center gap-2">
          <span className={`rounded-full px-3 py-1.5 font-mono text-[11px] font-bold ring-1 ${statusPill}`}>
            {statusLabel}
          </span>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {/* Editor */}
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#020617] shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              <span className="ml-2 font-mono text-xs text-slate-400">
                main.c
              </span>
              <span className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[10px] text-slate-400">
                {lineCount} lines
              </span>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={copyCode}
                className="rounded-md bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-slate-300 transition hover:bg-white/20 hover:text-white active:scale-95"
              >
                Copy
              </button>
              <button
                type="button"
                onClick={() => loadPreset(preset)}
                className="rounded-md bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-slate-300 transition hover:bg-white/20 hover:text-white active:scale-95"
              >
                Reset
              </button>
              <button
                type="button"
                onClick={runCode}
                disabled={status === "running"}
                className="rounded-md bg-emerald-400 px-3.5 py-1 text-[11px] font-extrabold text-slate-950 shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-300 active:scale-95 disabled:opacity-50"
              >
                {status === "running" ? "Running..." : "▶ Run"}
              </button>
            </div>
          </div>
          <div className="flex">
            {/* line numbers (synced with editor scroll) */}
            <div
              aria-hidden
              ref={gutterRef}
              className="h-[380px] w-12 shrink-0 overflow-hidden border-r border-white/10 bg-white/[0.02] py-4 text-right font-mono text-xs leading-6 text-slate-600 select-none"
            >
              {code.split("\n").map((_, i) => (
                <div key={i} className="px-3">
                  {i + 1}
                </div>
              ))}
            </div>
            {/* highlighted overlay editor */}
            <div className="playground-editor relative min-w-0 flex-1">
              <pre
                aria-hidden
                ref={highlightRef}
                className="dark-scroll pointer-events-none absolute inset-0 h-[380px] overflow-hidden p-4 font-mono text-[13px] leading-6 whitespace-pre"
              >
                <code
                  className="language-c"
                  dangerouslySetInnerHTML={{ __html: highlighted }}
                />
              </pre>
              <textarea
                ref={editorRef}
                value={code}
                onChange={(e) => setCode(e.target.value)}
                onKeyDown={handleTab}
                onScroll={syncScroll}
                spellCheck={false}
                autoCapitalize="off"
                autoCorrect="off"
                wrap="off"
                className="dark-scroll relative h-[380px] w-full resize-none overflow-auto bg-transparent p-4 font-mono text-[13px] leading-6 whitespace-pre text-transparent caret-emerald-400 outline-none selection:bg-emerald-400/30 placeholder:text-slate-600"
                placeholder="// write C here..."
              />
            </div>
          </div>
          <div className="flex items-center justify-between border-t border-white/10 px-4 py-2 font-mono text-[11px] text-slate-500">
            <span>Tab = 2 spaces · Ctrl+Enter = run</span>
            <span>{code.length} chars</span>
          </div>
        </div>

        {/* stdin + output */}
        <div className="flex flex-col gap-4">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
            <div className="border-b border-white/10 px-4 py-2.5">
              <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-400">
                stdin <span className="font-normal normal-case text-slate-500">— piped to scanf (optional)</span>
              </p>
            </div>
            <textarea
              value={stdin}
              onChange={(e) => setStdin(e.target.value)}
              spellCheck={false}
              rows={3}
              placeholder={"e.g.\n67"}
              className="dark-scroll w-full resize-y bg-transparent p-4 font-mono text-[13px] leading-6 text-slate-100 caret-emerald-400 outline-none placeholder:text-slate-600"
            />
          </div>

          <div className="flex-1 overflow-hidden rounded-2xl border border-white/10 bg-[#020617] shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
              <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-400">
                ▷ terminal
              </p>
              {meta && (
                <span className="font-mono text-[11px] text-slate-500">
                  {meta.compiler} · exit {meta.exit} · {meta.ms}ms
                </span>
              )}
            </div>
            <pre className="dark-scroll max-h-[320px] min-h-[220px] overflow-auto p-4 font-mono text-[13px] leading-relaxed whitespace-pre-wrap text-emerald-300">
              {output}
              <span className="terminal-caret text-emerald-400">▊</span>
            </pre>
          </div>

          <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.06] p-4 text-xs leading-relaxed text-emerald-200/80">
            <span className="font-bold text-emerald-300">🎤 Demo script: </span>
            run <span className="font-mono">ladder grades</span>, change 80 {"->"} 95
            and re-run. Then load{" "}
            <span className="font-mono">scanf demo</span>, type a number in
            stdin, and show Pass/Fail flipping live.
          </div>
        </div>
      </div>

      <p className="text-center font-mono text-[11px] text-slate-500">
        Compiled with gcc via the Wandbox API (needs internet) · your code is sent only to execute it
      </p>
    </div>
  );
}
