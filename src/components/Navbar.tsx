export default function Navbar() {
  return (
    <nav className="p-4 shadow-md bg-white">
      <ul className="flex space-x-4">
        <li><a href="/about">About</a></li>
        <li><a href="/projects">Projects</a></li>
      </ul>
    </nav>
  );
}
