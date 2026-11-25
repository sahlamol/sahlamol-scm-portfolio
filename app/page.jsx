import Nav from "../components/Nav";
import Section from "../components/Section";
import Project from "../components/Project";
import { profile, kpis, projects, rootCause, actions, experience, skills, learning, education, certifications } from "../data/content";

const btn = "rounded-md px-4 py-2 text-sm font-medium transition";

export default function Home() {
  const p = profile;
  return (
    <main id="top">
      <Nav name={p.name} />

      <section className="mx-auto max-w-5xl px-5 pt-14 pb-10 sm:pt-24">
        <div className="reveal">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">{p.title}</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-6xl">{p.name}</h1>
          <p className="mt-5 max-w-2xl text-lg sm:text-xl text-mute">{p.headline}</p>
          <p className="mt-4 flex flex-wrap gap-2">
            {p.targetRoles.map(r => <span key={r} className="rounded-full border border-line bg-panel px-3 py-1 text-xs">{r}</span>)}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#projects" className={`${btn} bg-accent text-bg hover:opacity-90`}>See S&amp;OP projects</a>
            <a href="#contact" className={`${btn} border border-line hover:border-accent`}>Contact</a>
          </div>
        </div>
        <dl className="reveal mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line lg:grid-cols-4">
          {kpis.map(k => (
            <div key={k.label} className="bg-panel p-4">
              <dd className="font-mono text-2xl font-bold text-accent sm:text-3xl">{k.value}</dd>
              <dt className="mt-1 text-sm font-medium">{k.label}</dt>
              <p className="text-xs text-mute">{k.note}</p>
            </div>))}
        </dl>
        <p className="mt-2 text-xs text-mute">Project figures use synthetic data and demonstrate method, not real company performance.</p>
      </section>

      <Section id="about" label="About" title="Planner mindset, analyst toolkit">
        <p className="max-w-3xl leading-relaxed text-mute">{p.intro}</p>
      </Section>

      <Section id="projects" label="Case studies" title="Planning projects">
        <div className="space-y-8">{projects.map(x => <Project key={x.id} p={x} />)}</div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-3 font-semibold">Why stockouts happened (1,178 stockout days)</h3>
            <ul className="space-y-3">
              {rootCause.map(r => (
                <li key={r.label} className="text-sm">
                  <div className="mb-1 flex justify-between"><span>{r.label}</span><span className="font-mono">{r.pct}%</span></div>
                  <div className="h-2 rounded bg-line"><div className="h-2 rounded bg-accent" style={{ width: `${r.pct * 2}%` }} /></div>
                </li>))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold">Monthly S&amp;OP review: recommended actions</h3>
            <table className="w-full text-sm">
              <tbody>{actions.map(([a, o], i) => (
                <tr key={a} className="border-t border-line align-top">
                  <td className="py-2 pr-2 font-mono text-mute">{i + 1}</td>
                  <td className="py-2 pr-3">{a}</td>
                  <td className="py-2 text-right text-xs text-mute">{o}</td>
                </tr>))}</tbody>
            </table>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a className={`${btn} border border-line hover:border-accent`} href={p.files.report}>Read project report (PDF)</a>
          <a className={`${btn} border border-line hover:border-accent`} href={p.files.deck} download>Download S&amp;OP review pack (PPTX)</a>
        </div>
      </Section>

      <Section id="experience" label="Experience" title="Hands-on supply chain internships">
        <ol className="space-y-8 border-l border-line pl-6">
          {experience.map(e => (
            <li key={e.role} className="relative">
              <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
              <p className="font-mono text-xs text-mute">{e.when}</p>
              <h3 className="font-semibold">{e.role}</h3>
              <p className="text-sm text-mute">{e.org}</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-mute">{e.points.map(x => <li key={x}>{x}</li>)}</ul>
            </li>))}
        </ol>
      </Section>

      <Section id="skills" label="Skills" title="Tools and methods">
        <div className="grid gap-5 sm:grid-cols-2">
          {skills.map(g => (
            <div key={g.group} className="rounded-lg border border-line bg-panel p-5">
              <h3 className="mb-3 text-sm font-semibold">{g.group}</h3>
              <p className="flex flex-wrap gap-2">{g.items.map(i => <span key={i} className="rounded border border-line px-2 py-1 text-xs text-mute">{i}</span>)}</p>
            </div>))}
        </div>
        <p className="mt-4 text-sm text-mute">{learning}</p>
      </Section>

      <Section id="education" label="Education" title="Education and certifications">
        <div className="grid gap-10 md:grid-cols-2">
          <ul className="space-y-4">{education.map(e => (
            <li key={e.name}><p className="font-semibold">{e.name}</p><p className="text-sm text-mute">{e.org} · {e.when}</p></li>))}</ul>
          <ul className="space-y-3">{certifications.map(([n, o, y]) => (
            <li key={n} className="flex justify-between gap-3 border-b border-line pb-2 text-sm">
              <span>{n} <span className="text-mute">· {o}</span></span><span className="font-mono text-mute">{y}</span>
            </li>))}</ul>
        </div>
      </Section>

      <Section id="contact" label="Contact" title="Let's talk about planning roles">
        <p className="mb-6 max-w-xl text-mute">{p.location}.</p>
        <div className="flex flex-wrap gap-3">
          <a className={`${btn} bg-accent text-bg hover:opacity-90`} href={`mailto:${p.email}`}>{p.email}</a>
          <a className={`${btn} border border-line hover:border-accent`} href={p.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </Section>

      <footer className="border-t border-line py-8 text-center text-xs text-mute">© {new Date().getFullYear()} {p.name}</footer>
    </main>
  );
}
