import CodexInterface from "@/components/CodexInterface";
import MasterMindCouncil from "@/components/MasterMindCouncil";
import SnapshotsInterface from "@/components/SnapshotsInterface";

export default function Page() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <header className="mb-10">
          <h1 className="text-2xl font-semibold tracking-tight">Master Mind Council</h1>
          <p className="text-sm text-neutral-400">Council Codex • Council • Snapshots</p>
        </header>

        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-5">
            <h2 className="mb-3 text-lg font-medium">Codex</h2>
            <CodexInterface />
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-5 lg:col-span-2">
            <h2 className="mb-3 text-lg font-medium">Council</h2>
            <MasterMindCouncil />
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-5 lg:col-span-3">
            <h2 className="mb-3 text-lg font-medium">Snapshots</h2>
            <SnapshotsInterface />
          </div>
        </section>
      </div>
    </main>
  );
}
