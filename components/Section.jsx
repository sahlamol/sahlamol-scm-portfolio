export default function Section({ id, label, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-5 py-14 sm:py-20 scroll-mt-14">
      <p className="font-mono text-xs uppercase tracking-widest text-accent">{label}</p>
      <h2 className="mt-2 mb-8 text-2xl sm:text-3xl font-semibold tracking-tight">{title}</h2>
      {children}
    </section>
  );
}
