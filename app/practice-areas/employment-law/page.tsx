export const metadata = { title: "Employment Law" };
export default function EmploymentLaw() {
  const bullets = [
    "Discrimination and harassment",
    "Retaliation and whistleblower claims",
    "FMLA, wage & hour, separation agreements"
  ];
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Employment Law</h1>
      <p className="mt-3 text-white/70">Protecting employees and executives in sensitive workplace disputes.</p>
      <ul className="mt-6 grid gap-3">
        {bullets.map(b=> <li key={b} className="rounded-xl border border-white/10 bg-white/5 p-4">{b}</li>)}
      </ul>
    </div>
  );
}
