export function Tutorial() {
  const steps = [
    {
      t: "Blockchain-secured",
      d: "Transparent mint → transfer → retirement trail for carbon credits.",
    },
    {
      t: "End-to-end MRV",
      d: "Upload satellite, drone, and field data for verification and trust scoring.",
    },
    {
      t: "Buy with confidence",
      d: "Filter projects by region and SDGs; pay via crypto or fiat.",
    },
  ]
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {steps.map((s, i) => (
        <div key={i} className="rounded-lg border bg-card p-4">
          <div className="text-sm font-medium">{s.t}</div>
          <div className="text-sm text-muted-foreground mt-2">{s.d}</div>
        </div>
      ))}
    </div>
  )
}
