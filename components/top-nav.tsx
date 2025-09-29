"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

const languages = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिन्दी" },
  { code: "ta", label: "தமிழ்" },
]

export function TopNav() {
  const [lang, setLang] = useState("en")

  useEffect(() => {
    const l = localStorage.getItem("bc-lang") || "en"
    setLang(l)
  }, [])

  const changeLang = (v: string) => {
    setLang(v)
    localStorage.setItem("bc-lang", v)
  }

  return (
    <header className="w-full sticky top-0 z-10 bg-white/70 backdrop-blur border-b">
      <nav className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="font-semibold">
            BlueCarbon
          </Link>
          <div className="hidden sm:flex items-center gap-3 text-sm">
            <Link href="/dashboard" className="hover:underline">
              Registry
            </Link>
            <Link href="/mrv" className="hover:underline">
              MRV
            </Link>
            <Link href="/explorer" className="hover:underline">
              Explorer
            </Link>
            <Link href="/marketplace" className="hover:underline">
              Marketplace
            </Link>
            <Link href="/community" className="hover:underline">
              Community
            </Link>
            <Link href="/policy" className="hover:underline">
              Policy
            </Link>
            <Link href="/admin" className="hover:underline">
              Admin
            </Link>
            <Link href="/impact" className="hover:underline">
              Impact
            </Link>
            <Link href="/chat" className="hover:underline">
              AI
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <select
            aria-label="Language"
            className="h-9 px-2 rounded-md border bg-white"
            value={lang}
            onChange={(e) => changeLang(e.target.value)}
          >
            {languages.map((l) => (
              <option key={l.code} value={l.code}>
                {l.label}
              </option>
            ))}
          </select>
          <Link href="/login" className="text-sm underline">
            Login
          </Link>
        </div>
      </nav>
    </header>
  )
}
