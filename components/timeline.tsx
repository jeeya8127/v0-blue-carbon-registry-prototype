export function Timeline() {
  const items = [
    { id: "tx1", t: "Mint", d: "1,000 credits minted for Mangrove-Delta-09" },
    { id: "tx2", t: "Transfer", d: "250 credits transferred to Buyer 0xA1..." },
    { id: "tx3", t: "Retirement", d: "250 credits retired on behalf of Company X" },
  ]
  return (
    <div className="rounded-lg border bg-card p-4">
      <h2 className="font-medium">Transactions</h2>
      <ol className="mt-3 grid gap-2">
        {items.map((it) => (
          <li key={it.id} className="flex items-start gap-3">
            <div className="mt-1 h-2 w-2 bg-teal-600 rounded-full" />
            <div>
              <div className="text-sm font-medium">{it.t}</div>
              <div className="text-sm text-muted-foreground">{it.d}</div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
