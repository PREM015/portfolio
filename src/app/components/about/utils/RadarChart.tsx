'use client';
import { motion } from 'framer-motion';

interface RadarChartProps {
  data: Array<{ skill: string; level: number }>;
}

export default function RadarChart({ data }: RadarChartProps) {
  const centerX = 150;
  const centerY = 150;
  const maxRadius = 120;
  const levels = 5;

  const angleStep = (Math.PI * 2) / data.length;

  const getPoint = (index: number, value: number) => {
    const angle = angleStep * index - Math.PI / 2;
    const radius = (value / 100) * maxRadius;
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
    };
  };

  const polygonPoints = data
    .map((item, i) => {
      const point = getPoint(i, item.level);
      return `${point.x},${point.y}`;
    })
    .join(' ');

  return (
    <svg width="300" height="300" className="mx-auto" role="img" aria-label="Skills radar chart">
      {[...Array(levels)].map((_, i) => (
        <circle
          key={i}
          cx={centerX}
          cy={centerY}
          r={(maxRadius / levels) * (i + 1)}
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
        />
      ))}

      {data.map((_, i) => {
        const point = getPoint(i, 100);
        return (
          <line
            key={i}
            x1={centerX}
            y1={centerY}
            x2={point.x}
            y2={point.y}
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
          />
        );
      })}

      <motion.polygon
        points={polygonPoints}
        fill="url(#radarGradient)"
        stroke="rgba(6, 182, 212, 0.8)"
        strokeWidth="2"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 1 }}
      />

      {data.map((item, i) => {
        const labelPoint = getPoint(i, 130);
        return (
          <text
            key={i}
            x={labelPoint.x}
            y={labelPoint.y}
            fill="rgba(255,255,255,0.8)"
            fontSize="12"
            textAnchor="middle"
            className="font-medium"
          >
            {item.skill}
          </text>
        );
      })}

      <defs>
        <linearGradient id="radarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgb(6, 182, 212)" />
          <stop offset="100%" stopColor="rgb(168, 85, 247)" />
        </linearGradient>
      </defs>
    </svg>
  );
}
