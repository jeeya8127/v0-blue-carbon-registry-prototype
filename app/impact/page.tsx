import { TopNav } from "@/components/top-nav"
import { ImpactCounters } from "@/components/impact-counters"
import { MapView } from "@/components/map-view"

export default function Impact() {
  return (
    <main className="min-h-dvh bg-gradient-to-b from-sky-50 to-teal-50">
      <TopNav />
      <div className="px-4 py-6 mx-auto max-w-5xl grid gap-6">
        <h1 className="text-2xl font-semibold">Impact Dashboard</h1>
        <ImpactCounters personal />
        <MapView />
      </div>
    </main>
  )
}
