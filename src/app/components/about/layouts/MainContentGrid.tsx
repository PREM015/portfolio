export default function MainContentGrid({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">{children}</div>;
}
