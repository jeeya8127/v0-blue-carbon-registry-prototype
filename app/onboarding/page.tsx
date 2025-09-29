"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { TopNav } from "@/components/top-nav"

const roleNext: Record<string, string> = {
  Admin: "/admin",
  Verifier: "/mrv",
  Buyer: "/marketplace",
  "Community Member": "/community",
  "Policy Maker": "/policy",
  Researcher: "/dashboard",
}

export default function Onboarding() {
  const [role, setRole] = useState<string>("Buyer")

  useEffect(() => {
    const r = window.localStorage.getItem("bc-role")
    if (r) setRole(r)
  }, [])

  const next = roleNext[role] ?? "/dashboard"

  return (
    <main className="min-h-dvh bg-gradient-to-b from-sky-50 to-teal-50">
      <TopNav />
      <div className="px-4 py-8 mx-auto max-w-3xl">
        <h1 className="text-2xl font-semibold">Welcome</h1>
        <p className="mt-2 text-muted-foreground">
          You selected the role: <span className="font-medium">{role}</span>
        </p>

        <div className="mt-6 grid gap-4">
          <div className="rounded-lg border bg-card p-4">
            <h2 className="text-lg font-medium">1. Blockchain</h2>
            <p className="text-sm text-muted-foreground">
              Every project creates a tamper-proof record of credits: mint, transfer, retirement.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-4">
            <h2 className="text-lg font-medium">2. MRV</h2>
            <p className="text-sm text-muted-foreground">
              Upload drone, satellite and field data; verification engine calculates and scores.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-4">
            <h2 className="text-lg font-medium">3. Marketplace</h2>
            <p className="text-sm text-muted-foreground">
              Discover, filter by SDGs and region, purchase via crypto or fiat.
            </p>
          </div>
        </div>

        <div className="mt-8 flex gap-3">
          <Link href={next}>
            <Button className="bg-teal-600 hover:bg-teal-700 text-white">Continue as {role}</Button>
          </Link>
          <Link href="/dashboard">
            <Button variant="secondary">Explore Registry</Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
