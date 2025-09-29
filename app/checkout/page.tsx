"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { TopNav } from "@/components/top-nav"
import { Button } from "@/components/ui/button"
import { projects } from "@/lib/data"

export default function Checkout() {
  const [cart, setCart] = useState<{ id: string; qty: number }[]>([])
  const [method, setMethod] = useState<"crypto" | "fiat">("crypto")

  useEffect(() => {
    const c = JSON.parse(localStorage.getItem("bc-cart") || "[]")
    setCart(c)
  }, [])

  const total = cart.reduce((sum, item) => {
    const p = projects.find((pr) => pr.id === item.id)
    return sum + (p ? p.price * item.qty : 0)
  }, 0)

  const confirm = () => {
    // Simulate wallet update and mark purchase done
    localStorage.setItem("bc-last-purchase", JSON.stringify({ total, method, at: Date.now() }))
    localStorage.setItem("bc-cart", "[]")
    window.location.href = "/impact/story"
  }

  return (
    <main className="min-h-dvh bg-gradient-to-b from-sky-50 to-teal-50">
      <TopNav />
      <div className="px-4 py-6 mx-auto max-w-3xl">
        <h1 className="text-2xl font-semibold">Checkout</h1>
        <div className="mt-4 rounded-lg border bg-card p-4">
          <h2 className="font-medium">Order Summary</h2>
          <ul className="mt-2 text-sm text-muted-foreground">
            {cart.map((item) => {
              const p = projects.find((pr) => pr.id === item.id)
              if (!p) return null
              return (
                <li key={item.id} className="flex items-center justify-between">
                  <span>
                    {p.name} × {item.qty}
                  </span>
                  <span>${p.price * item.qty}</span>
                </li>
              )
            })}
          </ul>
          <div className="mt-3 font-medium">Total: ${total}</div>
        </div>

        <div className="mt-4 rounded-lg border bg-card p-4">
          <h2 className="font-medium">Payment Method</h2>
          <div className="mt-2 flex gap-3">
            <button
              onClick={() => setMethod("crypto")}
              className={`h-9 px-3 rounded-md border ${method === "crypto" ? "bg-teal-600 text-white border-teal-600" : ""}`}
            >
              Crypto Wallet
            </button>
            <button
              onClick={() => setMethod("fiat")}
              className={`h-9 px-3 rounded-md border ${method === "fiat" ? "bg-teal-600 text-white border-teal-600" : ""}`}
            >
              Card / Bank (Fiat)
            </button>
          </div>
        </div>

        <div className="mt-5 flex gap-3">
          <button
            onClick={confirm}
            className="inline-flex items-center justify-center h-10 px-5 rounded-md bg-teal-600 text-white hover:bg-teal-700"
          >
            Confirm Purchase
          </button>
          <Link href="/marketplace">
            <Button variant="secondary">Back to Marketplace</Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
