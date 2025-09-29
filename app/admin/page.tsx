"use client"

import { TopNav } from "@/components/top-nav"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function Admin() {
  const [pending, setPending] = useState(["Mangrove-Delta-09", "Seagrass-Bay-02"])
  const [fraud, setFraud] = useState(["Unusual transfer pattern on BC-0002"])

  const approve = (name: string) => setPending((p) => p.filter((x) => x !== name))
  const reject = (name: string) => setPending((p) => p.filter((x) => x !== name))

  return (
    <main className="min-h-dvh bg-gradient-to-b from-sky-50 to-teal-50">
      <TopNav />
      <div className="px-4 py-6 mx-auto max-w-6xl grid gap-6">
        <h1 className="text-2xl font-semibold">Admin Control Panel</h1>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border bg-card p-4">
            <h2 className="font-medium">Approve New Projects</h2>
            <ul className="mt-2 text-sm text-muted-foreground grid gap-2">
              {pending.map((name) => (
                <li key={name} className="flex items-center justify-between">
                  <span>{name}</span>
                  <span className="flex gap-2">
                    <Button size="sm" onClick={() => approve(name)}>
                      Approve
                    </Button>
                    <Button size="sm" variant="secondary" onClick={() => reject(name)}>
                      Reject
                    </Button>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border bg-card p-4">
            <h2 className="font-medium">Verification Tracking</h2>
            <ul className="mt-2 text-sm text-muted-foreground list-disc pl-5">
              <li>Wetland-03: Awaiting satellite imagery</li>
              <li>Delta-12: Verifier review scheduled</li>
            </ul>
          </div>

          <div className="rounded-lg border bg-card p-4">
            <h2 className="font-medium">Fraud Detection</h2>
            <ul className="mt-2 text-sm text-muted-foreground grid gap-2">
              {fraud.map((f, i) => (
                <li key={i} className="flex items-center justify-between">
                  <span>{f}</span>
                  <Button size="sm" variant="secondary">
                    Investigate
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex gap-3">
          <a href="/dashboard">
            <Button variant="secondary">Back to Registry</Button>
          </a>
          <a href="/explorer">
            <Button>Open Explorer</Button>
          </a>
        </div>
      </div>
    </main>
  )
}
