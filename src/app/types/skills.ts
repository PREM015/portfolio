export interface Tech {
  name: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  category: string;
  color: string;
  description: string;
  level: number;
  link?: string;
  grade: string;
}
