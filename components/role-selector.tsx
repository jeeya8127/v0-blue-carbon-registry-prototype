"use client"

import { useState, useEffect } from "react"

const ROLES = ["Admin", "Verifier", "Buyer", "Community Member", "Policy Maker", "Researcher"]

export function RoleSelector() {
  const [role, setRole] = useState("Buyer")

  useEffect(() => {
    const r = localStorage.getItem("bc-role")
    if (r) setRole(r)
  }, [])

  useEffect(() => {
    localStorage.setItem("bc-role", role)
  }, [role])

  return (
    <div className="inline-flex items-center gap-2">
      <label className="text-sm text-muted-foreground">Choose role</label>
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="h-10 px-3 rounded-md border bg-white"
        aria-label="Role"
      >
        {ROLES.map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>
    </div>
  )
}
