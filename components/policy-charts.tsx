"use client"

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, PieChart, Pie, Cell } from "recharts"

const COLORS = ["#0ea5e9", "#14b8a6", "#10b981", "#0ea5e9"]

export function PolicyCharts() {
  const carbon = [
    { name: "Q1", value: 28000 },
    { name: "Q2", value: 30000 },
    { name: "Q3", value: 33000 },
    { name: "Q4", value: 33500 },
  ]
  const distribution = [
    { name: "Mangroves", value: 45 },
    { name: "Seagrass", value: 30 },
    { name: "Wetlands", value: 25 },
  ]
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="rounded-lg border bg-card p-4">
        <h2 className="font-medium">Carbon Locked (Quarterly)</h2>
        <div className="mt-3 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={carbon}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#0ea5e9" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="rounded-lg border bg-card p-4">
        <h2 className="font-medium">Project Distribution</h2>
        <div className="mt-3 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={distribution} dataKey="value" nameKey="name" outerRadius={90} label>
                {distribution.map((_, idx) => (
                  <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
