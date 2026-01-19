export interface Tech {
  id?: string; 
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  category: string;
  color: string;
  description: string;
  level: number;
  link?: string;
  grade?: string;
}
