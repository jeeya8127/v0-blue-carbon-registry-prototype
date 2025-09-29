"use client"

import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts"

export function TrustScoreChart({ reported, verified }: { reported: number; verified: number }) {
  const data = [
    { name: "Jan", reported: reported - 80, verified: verified - 100 },
    { name: "Feb", reported: reported - 40, verified: verified - 60 },
    { name: "Mar", reported, verified },
  ]
  const trust = Math.max(0, Math.min(100, Math.round((verified / reported) * 100)))

  return (
    <div className="rounded-lg border bg-card p-4">
      <div className="flex items-center justify-between">
        <h2 className="font-medium">Reported vs Verified</h2>
        <div className="text-sm">
          Trust Score: <span className="font-semibold">{trust}%</span>
        </div>
      </div>
      <div className="mt-3 h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="reported" stroke="#38bdf8" strokeWidth={2} />
            <Line type="monotone" dataKey="verified" stroke="#0d9488" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
