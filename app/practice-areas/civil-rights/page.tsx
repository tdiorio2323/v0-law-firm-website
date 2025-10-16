export const metadata = { title: "Civil Rights" };
export default function CivilRights() {
  const bullets = [
    "False arrest and malicious prosecution",
    "Excessive force and failure to intervene",
    "Due process and prosecutorial misconduct",
    "Section 1983 litigation from intake to verdict"
  ];
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Civil Rights</h1>
      <p className="mt-3 text-white/70">Accountability for government misconduct.</p>
      <ul className="mt-6 grid gap-3">
        {bullets.map(b=> <li key={b} className="rounded-xl border border-white/10 bg-white/5 p-4">{b}</li>)}
      </ul>
    </div>
  );
}
