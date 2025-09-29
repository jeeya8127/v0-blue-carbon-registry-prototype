"use client"

import { TopNav } from "@/components/top-nav"
import { Filters } from "@/components/filters"
import { projects } from "@/lib/data"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Marketplace() {
  const addToCart = (id: string) => {
    const cart = JSON.parse(localStorage.getItem("bc-cart") || "[]")
    const existing = cart.find((c: any) => c.id === id)
    if (existing) existing.qty += 1
    else cart.push({ id, qty: 1 })
    localStorage.setItem("bc-cart", JSON.stringify(cart))
    alert("Added to cart")
  }

  return (
    <main className="min-h-dvh bg-gradient-to-b from-sky-50 to-teal-50">
      <TopNav />
      <div className="px-4 py-6 mx-auto max-w-6xl grid gap-6">
        <h1 className="text-2xl font-semibold">Marketplace</h1>
        <Filters />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div key={p.id} className="rounded-lg border bg-card p-4">
              <h2 className="font-medium">{p.name}</h2>
              <p className="text-sm text-muted-foreground">{p.location}</p>
              <div className="mt-2 text-sm">Price: ${p.price}/credit</div>
              <div className="mt-3 flex gap-2">
                <button
                  className="inline-flex items-center justify-center h-9 px-4 rounded-md bg-teal-600 text-white hover:bg-teal-700"
                  onClick={() => addToCart(p.id)}
                >
                  Add to Cart
                </button>
                <Link href="/checkout">
                  <Button variant="secondary">Checkout</Button>
                </Link>
              </div>
              <div className="mt-3 text-xs text-muted-foreground">Badges: Biodiversity • Community Benefit</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
