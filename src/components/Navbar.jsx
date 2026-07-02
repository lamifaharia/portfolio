export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      <div className="flex-1">
        <a className="text-xl font-bold">Lami Faharia</a>
      </div>
      <div className="flex-none gap-4">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}