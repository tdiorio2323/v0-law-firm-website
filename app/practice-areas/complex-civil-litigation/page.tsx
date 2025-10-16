import Link from "next/link";
export const metadata = { title: "Complex Civil Litigation" };
export default function Complex() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Complex Civil Litigation</h1>
      <p className="mt-3 text-white/70">High-stakes disputes requiring precise pleadings, discovery management, and trial strategy.</p>
      <div className="grid gap-4 mt-6">
        <Link className="rounded-xl border border-white/10 bg-white/5 p-4 hover:shadow" href="/practice-areas/civil-rights">Civil Rights</Link>
        <Link className="rounded-xl border border-white/10 bg-white/5 p-4 hover:shadow" href="/practice-areas/employment-law">Employment Law</Link>
      </div>
    </div>
  );
}
