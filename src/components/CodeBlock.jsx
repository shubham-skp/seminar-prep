import { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-c";

export default function CodeBlock({
    code,
    language = "c",
    title = "example.c",
    showOutput = null,
}) {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        Prism.highlightAll();
    }, [code]);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch {
            setCopied(false);
        }
    };

    return (
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-xl shadow-slate-950/20 ring-1 ring-slate-950">
            {/* window bar */}
            <div className="flex items-center justify-between border-b border-white/10 bg-slate-900 px-4 py-2.5">
                <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                    <span className="ml-2 font-mono text-xs text-slate-400">
                        {title}
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="rounded bg-slate-800 px-2 py-0.5 font-mono text-[11px] font-semibold uppercase text-sky-300">
                        {language}
                    </span>
                    <button
                        type="button"
                        onClick={handleCopy}
                        className="rounded-md bg-slate-800 px-2.5 py-1 text-[11px] font-semibold text-slate-300 ring-1 ring-white/10 transition hover:bg-slate-700 hover:text-white active:scale-95"
                    >
                        {copied ? "✓ Copied" : "Copy"}
                    </button>
                </div>
            </div>
            {/* code */}
            <pre className="!m-0">
                <code className="language-c">{code}</code>
            </pre>
            {/* optional output strip */}
            {showOutput && (
                <div className="border-t border-white/10 bg-emerald-950/40 px-4 py-2.5 font-mono text-xs leading-relaxed whitespace-pre-line text-emerald-300">
                    <span className="font-sans font-bold text-emerald-500/80">▷ Output -&gt; </span>
                    {showOutput}
                </div>
            )}
        </div>
    );
}
