export default function Project({ p }) {
  return (
    <article className="rounded-lg border border-line bg-panel p-5 sm:p-7 transition hover:border-accent">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-xl font-semibold">{p.name}</h3>
        <span className="font-mono text-xs text-accent">{p.tag}</span>
      </div>
      <p className="mt-2 flex flex-wrap gap-2">
        {p.tools.map(t => <span key={t} className="rounded border border-line px-2 py-0.5 font-mono text-xs text-mute">{t}</span>)}
      </p>
      <div className="mt-5 grid gap-6 md:grid-cols-5">
        <div className="md:col-span-3 space-y-4 text-sm leading-relaxed">
          <p><b>Problem. </b><span className="text-mute">{p.problem}</span></p>
          <p><b>Approach. </b><span className="text-mute">{p.approach}</span></p>
          <div><b>My contribution</b>
            <ul className="mt-1 list-disc space-y-1 pl-5 text-mute">{p.contribution.map(c => <li key={c}>{c}</li>)}</ul>
          </div>
        </div>
        <table className="md:col-span-2 h-fit w-full text-sm">
          <caption className="pb-2 text-left font-mono text-xs uppercase tracking-widest text-mute">Outcome</caption>
          <tbody>{p.results.map(([k, v]) => (
            <tr key={k} className="border-t border-line align-top">
              <td className="py-2 pr-3 text-mute">{k}</td>
              <td className="py-2 text-right font-mono font-semibold text-accent">{v}</td>
            </tr>))}</tbody>
        </table>
      </div>
      <p className="mt-5 border-t border-line pt-3 text-xs text-mute">Data note: {p.note}</p>
    </article>
  );
}
