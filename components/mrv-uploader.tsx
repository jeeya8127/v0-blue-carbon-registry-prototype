"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function MRVUploader({ onEstimate }: { onEstimate: (v: number) => void }) {
  const [busy, setBusy] = useState(false)

  const simulate = async () => {
    setBusy(true)
    await new Promise((r) => setTimeout(r, 900))
    const estimate = 1150 + Math.floor(Math.random() * 100) // tCO2e estimate
    onEstimate(estimate)
    setBusy(false)
  }

  return (
    <div className="rounded-lg border bg-card p-4">
      <h2 className="font-medium">Upload Data</h2>
      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        <input className="h-10 px-3 rounded-md border" placeholder="Drone data.zip" />
        <input className="h-10 px-3 rounded-md border" placeholder="Field survey.csv" />
        <input className="h-10 px-3 rounded-md border" placeholder="Satellite imagery.tif" />
      </div>
      <div className="mt-4">
        <Button className="bg-teal-600 hover:bg-teal-700 text-white" onClick={simulate} disabled={busy}>
          {busy ? "Estimating..." : "Run AI Estimate"}
        </Button>
      </div>
    </div>
  )
}
