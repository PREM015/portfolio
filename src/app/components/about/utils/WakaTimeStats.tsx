'use client';
import { motion } from 'framer-motion';

export default function WakaTimeStats() {
  const mockData = {
    human_readable_total: '42 hrs 30 mins',
    human_readable_daily_average: '6 hrs 4 mins',
    languages: [
      { name: 'TypeScript', percent: 45 },
      { name: 'JavaScript', percent: 30 },
      { name: 'CSS', percent: 15 },
      { name: 'HTML', percent: 10 },
    ],
  };

  return (
    <div className="space-y-3">
      <div className="flex justify-between text-sm">
        <span className="text-gray-400">Total Hours (7 days):</span>
        <span className="text-cyan-300 font-bold">{mockData.human_readable_total}</span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-gray-400">Daily Average:</span>
        <span className="text-green-300 font-bold">{mockData.human_readable_daily_average}</span>
      </div>
      <div className="space-y-2 mt-4">
        {mockData.languages.map((lang) => (
          <div key={lang.name}>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-gray-300">{lang.name}</span>
              <span className="text-cyan-400">{lang.percent}%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${lang.percent}%` }}
                viewport={{ once: true }}
                className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
