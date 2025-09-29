"use client"

import { useEffect, useState } from "react"

export function ImpactCounters({ personal = false }: { personal?: boolean }) {
  const [co2, setCo2] = useState(124_500)
  const [mangroves, setMangroves] = useState(2_450_000)
  const [communities, setCommunities] = useState(36)

  useEffect(() => {
    const id = setInterval(() => {
      setCo2((v) => v + 3)
      setMangroves((v) => v + 1)
    }, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="rounded-lg border bg-card p-4 grid gap-4 sm:grid-cols-3">
      <Counter label={`${personal ? "Your " : ""}CO2 Offset (tCO2e)`} value={co2} />
      <Counter label="Mangroves Planted" value={mangroves} />
      <Counter label="Communities Benefitted" value={communities} />
    </div>
  )
}

function Counter({ label, value }: { label: string; value: number }) {
  return (
    <div className="text-center">
      <div className="text-sm text-muted-foreground">{label}</div>
      <div className="text-2xl font-semibold mt-1">{value.toLocaleString()}</div>
    </div>
  )
}
