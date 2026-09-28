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
        <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-950 shadow-lg">
            {/* window bar */}
            <div className="flex items-center justify-between bg-slate-900 px-4 py-2">
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
                        className="rounded bg-slate-800 px-2 py-0.5 text-[11px] font-medium text-slate-300 transition hover:bg-slate-700"
                    >
                        {copied ? "Copied!" : "Copy"}
                    </button>
                </div>
            </div>
            {/* code */}
            <pre className="!m-0">
                <code className="language-c">{code}</code>
            </pre>
            {/* optional output strip */}
            {showOutput && (
                <div className="border-t border-slate-800 bg-slate-900/60 px-4 py-2 font-mono text-xs text-green-300">
                    <span className="text-slate-500">Output → </span>
                    {showOutput}
                </div>
            )}
        </div>
    );
}
