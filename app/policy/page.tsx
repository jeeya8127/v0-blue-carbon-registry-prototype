"use client"

import { TopNav } from "@/components/top-nav"
import { PolicyCharts } from "@/components/policy-charts"

export default function Policy() {
  const exportCSV = () => {
    const rows = [
      ["Metric", "Value"],
      ["Carbon Locked (tCO2e)", "124,500"],
      ["Projects", "36"],
      ["CBAM Compliance", "Yes"],
    ]
    const csv = rows.map((r) => r.join(",")).join("\n")
    const blob = new Blob([csv], { type: "text/csv" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "policy-report.csv"
    a.click()
    URL.revokeObjectURL(url)
  }

  const exportPDF = () => {
    // Simple print-to-PDF for demo
    window.print()
  }

  return (
    <main className="min-h-dvh bg-gradient-to-b from-sky-50 to-teal-50">
      <TopNav />
      <div className="px-4 py-6 mx-auto max-w-6xl grid gap-6">
        <h1 className="text-2xl font-semibold">Policy Maker Dashboard</h1>
        <PolicyCharts />
        <div className="flex gap-3">
          <button className="h-10 px-4 rounded-md border" onClick={exportCSV}>
            Export Excel (CSV)
          </button>
          <button className="h-10 px-4 rounded-md bg-teal-600 text-white" onClick={exportPDF}>
            Export PDF
          </button>
        </div>
        <div className="rounded-lg border bg-card p-4">
          <h2 className="font-medium">Alerts</h2>
          <ul className="mt-2 text-sm text-muted-foreground list-disc pl-5">
            <li>Regional imbalance detected: Southeast overrepresented</li>
            <li>Leakage risk: Project SE-11 overlaps adjacent basin</li>
          </ul>
        </div>
      </div>
    </main>
  )
}
