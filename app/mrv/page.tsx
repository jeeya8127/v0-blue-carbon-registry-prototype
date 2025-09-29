"use client"

import { TopNav } from "@/components/top-nav"
import { MRVUploader } from "@/components/mrv-uploader"
import { TrustScoreChart } from "@/components/trust-score-chart"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function MRVPage() {
  const [estimated, setEstimated] = useState<number | null>(null)
  const [reported, setReported] = useState<number>(1200)
  const [verified, setVerified] = useState<number>(1100)

  return (
    <main className="min-h-dvh bg-gradient-to-b from-sky-50 to-teal-50">
      <TopNav />
      <div className="px-4 py-6 mx-auto max-w-5xl grid gap-6">
        <h1 className="text-2xl font-semibold">MRV System</h1>
        <MRVUploader
          onEstimate={(v) => {
            setEstimated(v)
            setVerified(Math.round((reported + v) / 2))
          }}
        />
        <div className="grid gap-4 md:grid-cols-2">
          <TrustScoreChart reported={reported} verified={verified} />
          <div className="rounded-lg border bg-card p-4">
            <h2 className="font-medium">Notifications</h2>
            <ul className="text-sm mt-2 list-disc pl-5 text-muted-foreground">
              <li>2 projects pending verification</li>
              <li>Missing survey data for Wetland-03</li>
            </ul>
            <div className="mt-4 flex gap-2">
              <Button variant="secondary">Review Pending</Button>
              <Button className="bg-teal-600 hover:bg-teal-700 text-white">Request Data</Button>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <a href="/explorer">
            <Button variant="secondary">Update Blockchain</Button>
          </a>
          <a href="/dashboard">
            <Button>Back to Registry</Button>
          </a>
        </div>
      </div>
    </main>
  )
}
