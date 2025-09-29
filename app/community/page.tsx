"use client"

import { TopNav } from "@/components/top-nav"
import { useState } from "react"

export default function Community() {
  const [uploads, setUploads] = useState<string[]>([])
  const [fileName, setFileName] = useState<string>("")

  const addUpload = () => {
    if (!fileName) return
    setUploads((u) => [fileName, ...u])
    setFileName("")
  }

  return (
    <main className="min-h-dvh bg-gradient-to-b from-sky-50 to-teal-50">
      <TopNav />
      <div className="px-4 py-6 mx-auto max-w-5xl grid gap-6">
        <h1 className="text-2xl font-semibold">Community Portal</h1>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-4">
            <h2 className="font-medium">Upload Photos/Videos</h2>
            <div className="mt-3 flex gap-2">
              <input
                className="h-10 px-3 rounded-md border w-full"
                placeholder="mangrove-planting.mp4"
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
              />
              <button className="h-10 px-4 rounded-md bg-teal-600 text-white" onClick={addUpload}>
                Upload
              </button>
            </div>
            <ul className="mt-4 text-sm text-muted-foreground grid gap-1">
              {uploads.map((u, i) => (
                <li key={i}>Uploaded: {u}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border bg-card p-4">
            <h2 className="font-medium">Rewards & Leaderboard</h2>
            <div className="mt-2 text-sm text-muted-foreground">Badges earned: Wave Starter, Community Ally</div>
            <ol className="mt-3 list-decimal pl-4 text-sm text-muted-foreground">
              <li>Asha — 120 pts</li>
              <li>Ravi — 96 pts</li>
              <li>Mei — 88 pts</li>
            </ol>
          </div>
        </div>
      </div>
    </main>
  )
}
