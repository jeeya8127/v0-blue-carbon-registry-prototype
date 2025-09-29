import { TopNav } from "@/components/top-nav"
import { ProjectGrid } from "@/components/project-grid"
import { MapView } from "@/components/map-view"

export default function Dashboard() {
  return (
    <main className="min-h-dvh bg-gradient-to-b from-sky-50 to-teal-50">
      <TopNav />
      <div className="px-4 py-6 mx-auto max-w-6xl grid gap-6">
        <h1 className="text-2xl font-semibold">Registry</h1>
        <MapView />
        <ProjectGrid />
      </div>
    </main>
  )
}
