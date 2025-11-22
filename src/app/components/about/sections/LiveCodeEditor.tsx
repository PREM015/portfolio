'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function LiveCodeEditor() {
  const [code, setCode] = useState(`function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet('World'));`);
  const [output, setOutput] = useState('');

  const runCode = () => {
    try {
      const logs: string[] = [];
      const customConsole = {
        log: (...args: any[]) => logs.push(args.join(' ')),
      };
      
      const func = new Function('console', code);
      func(customConsole);
      
      setOutput(logs.join('\n') || 'Code executed successfully!');
    } catch (error: any) {
      setOutput(`Error: ${error.message}`);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="my-16 p-8 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-cyan-500/30"
    >
      <h2 className="text-3xl font-bold mb-6 text-cyan-300">Live Code Editor</h2>
      
      <div className="grid lg:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center justify-between bg-slate-800 px-4 py-2 rounded-t-lg border-b border-slate-700">
            <span className="text-sm text-gray-400">JavaScript</span>
            <button
              onClick={runCode}
              className="px-4 py-1 bg-green-500 text-black rounded hover:bg-green-600 transition-colors text-sm font-semibold"
            >
              ▶ Run
            </button>
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-64 p-4 bg-slate-900 text-gray-100 font-mono text-sm rounded-b-lg border border-slate-700 focus:border-cyan-500 focus:outline-none resize-none"
            spellCheck={false}
          />
        </div>

        <div>
          <div className="bg-slate-800 px-4 py-2 rounded-t-lg border-b border-slate-700">
            <span className="text-sm text-gray-400">Output</span>
          </div>
          <div className="w-full h-64 p-4 bg-black text-green-400 font-mono text-sm rounded-b-lg border border-slate-700 overflow-auto whitespace-pre-wrap">
            {output || 'Click "Run" to execute code...'}
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-cyan-500/10 rounded-lg border border-cyan-500/30">
        <p className="text-sm text-cyan-300">
          💡 Try modifying the code and click "Run" to see the output in real-time!
        </p>
      </div>
    </motion.div>
  );
}
