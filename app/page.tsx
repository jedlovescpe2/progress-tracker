// app/page.tsx

import { ProgressTracker } from "@/components/ProgressTracker";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100">
      <ProgressTracker />
    </main>
  );
}