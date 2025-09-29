import { projects } from "@/lib/data"
import Link from "next/link"

export function ProjectGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p) => (
        <Link key={p.id} href={`/projects/${p.id}`} className="rounded-lg border bg-card p-4 hover:shadow-sm">
          <h2 className="font-medium">{p.name}</h2>
          <p className="text-sm text-muted-foreground">
            {p.location} • {p.type}
          </p>
          <div className="mt-2 text-sm">
            {p.credits} credits • ${p.price}/credit
          </div>
          <div className="mt-1 text-xs text-muted-foreground">Verification: {p.verification}</div>
        </Link>
      ))}
    </div>
  )
}
