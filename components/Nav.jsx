const links = [["projects","Projects"],["experience","Experience"],["skills","Skills"],["education","Education"],["contact","Contact"]];
export default function Nav({ name }) {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-bg/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3 text-sm">
        <a href="#top" className="font-semibold">{name}</a>
        <ul className="hidden gap-5 sm:flex text-mute">
          {links.map(([id, l]) => (<li key={id}><a className="transition hover:text-accent" href={`#${id}`}>{l}</a></li>))}
        </ul>
      </nav>
    </header>
  );
}
