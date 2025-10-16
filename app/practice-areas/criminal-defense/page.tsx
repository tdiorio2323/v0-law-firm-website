export const metadata = { title: "Criminal Defense" };
export default function CriminalDefense() {
  const bullets = [
    "State and federal prosecutions",
    "Investigations and grand jury practice",
    "Motions to suppress/dismiss",
    "Trial, sentencing, appeals"
  ];
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Criminal Defense</h1>
      <p className="mt-3 text-white/70">Aggressive defense with precise motion practice and trial readiness.</p>
      <ul className="mt-6 grid gap-3">
        {bullets.map(b=> <li key={b} className="rounded-xl border border-white/10 bg-white/5 p-4">{b}</li>)}
      </ul>
    </div>
  );
}
