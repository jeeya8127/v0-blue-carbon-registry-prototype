"use client"

import { useState } from "react"
import { TopNav } from "@/components/top-nav"
import { Button } from "@/components/ui/button"

export default function Chat() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([])

  const send = async () => {
    if (!input) return
    const prompt = input
    setMessages((m) => [...m, { role: "user", content: prompt }])
    setInput("")
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    })
    const data = await res.json()
    setMessages((m) => [...m, { role: "assistant", content: data.text }])
  }

  return (
    <main className="min-h-dvh bg-gradient-to-b from-sky-50 to-teal-50">
      <TopNav />
      <div className="px-4 py-6 mx-auto max-w-3xl">
        <h1 className="text-2xl font-semibold">AI Assistant</h1>
        <div className="mt-4 rounded-lg border bg-card p-4 h-[60vh] overflow-auto">
          {messages.length === 0 ? (
            <p className="text-sm text-muted-foreground">Ask anything about projects, MRV, or credits.</p>
          ) : (
            <div className="grid gap-3">
              {messages.map((m, i) => (
                <div key={i} className={m.role === "user" ? "text-right" : "text-left"}>
                  <div
                    className={`inline-block rounded-lg px-3 py-2 ${m.role === "user" ? "bg-teal-600 text-white" : "bg-secondary"}`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-4 flex gap-2">
          <input
            className="h-10 px-3 rounded-md border w-full"
            placeholder="How many credits are available in Mangrove-Delta-09?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button className="bg-teal-600 hover:bg-teal-700 text-white" onClick={send}>
            Send
          </Button>
        </div>
      </div>
    </main>
  )
}
