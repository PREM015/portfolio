'use client';
import { useState } from 'react';

interface CodeSnippetProps {
  snippet: {
    title: string;
    language: string;
    code: string;
    description: string;
  };
}

export default function CodeSnippet({ snippet }: CodeSnippetProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(snippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#1e1e1e] rounded-xl overflow-hidden border border-white/10" role="region" aria-label="Code snippet">
      <div className="flex items-center justify-between bg-[#2d2d2d] px-4 py-2 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="flex gap-2" aria-hidden="true">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-sm text-gray-400 ml-3">{snippet.title}</span>
        </div>
        <button
          onClick={handleCopy}
          className="text-xs bg-white/10 hover:bg-white/20 px-3 py-1 rounded transition-all"
          aria-label={copied ? 'Copied to clipboard' : 'Copy code to clipboard'}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm" tabIndex={0}>
        <code className="text-gray-300 font-mono">{snippet.code}</code>
      </pre>
      <div className="bg-[#2d2d2d] px-4 py-2 border-t border-white/10">
        <p className="text-xs text-gray-400">{snippet.description}</p>
      </div>
    </div>
  );
}
