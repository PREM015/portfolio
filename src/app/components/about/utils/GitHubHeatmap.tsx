'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function GitHubHeatmap() {
  const weeks = 52;
  const days = 7;
  
  const generateActivity = () => {
    const activity = [];
    for (let week = 0; week < weeks; week++) {
      const weekData = [];
      for (let day = 0; day < days; day++) {
        weekData.push(Math.floor(Math.random() * 5));
      }
      activity.push(weekData);
    }
    return activity;
  };

  const [activity] = useState(generateActivity());

  const getColor = (level: number) => {
    const colors = [
      'rgba(255,255,255,0.05)',
      'rgba(6, 182, 212, 0.3)',
      'rgba(6, 182, 212, 0.5)',
      'rgba(6, 182, 212, 0.7)',
      'rgba(6, 182, 212, 1)',
    ];
    return colors[level];
  };

  return (
    <div className="overflow-x-auto">
      <div className="inline-flex gap-1">
        {activity.map((week, weekIndex) => (
          <div key={weekIndex} className="flex flex-col gap-1">
            {week.map((level, dayIndex) => (
              <motion.div
                key={`${weekIndex}-${dayIndex}`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: (weekIndex * 7 + dayIndex) * 0.001 }}
                whileHover={{ scale: 1.5 }}
                className="w-3 h-3 rounded-sm cursor-pointer"
                style={{ backgroundColor: getColor(level) }}
                title={`${level} contributions`}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 mt-4 text-xs text-gray-400">
        <span>Less</span>
        {[0, 1, 2, 3, 4].map((level) => (
          <div
            key={level}
            className="w-3 h-3 rounded-sm"
            style={{ backgroundColor: getColor(level) }}
          />
        ))}
        <span>More</span>
      </div>
    </div>
  );
}
