export default function Sidebar() {
  return (
    <aside className="lg:col-span-3 bg-white/5 p-6 rounded-lg backdrop-blur-sm">
      <h3 className="text-xl font-bold mb-4">Quick Links</h3>
      <nav className="space-y-2">
        <a href="#about" className="block hover:text-blue-400 transition-colors">About</a>
        <a href="#skills" className="block hover:text-blue-400 transition-colors">Skills</a>
        <a href="#projects" className="block hover:text-blue-400 transition-colors">Projects</a>
        <a href="#contact" className="block hover:text-blue-400 transition-colors">Contact</a>
      </nav>
    </aside>
  );
}
