"use client"

import { useState } from "react"
import { TopNav } from "@/components/top-nav"
import { Button } from "@/components/ui/button"

export default function Login() {
  const [biometricOk, setBiometricOk] = useState(false)
  const [code, setCode] = useState("")
  const [authed, setAuthed] = useState(false)

  const simulateBiometric = async () => {
    // In real app, use WebAuthn. Here we simulate success.
    await new Promise((r) => setTimeout(r, 500))
    setBiometricOk(true)
  }

  const verify2FA = () => {
    if (code.trim().length >= 4) setAuthed(true)
    else alert("Enter the 2FA code sent to your device.")
  }

  return (
    <main className="min-h-dvh bg-gradient-to-b from-sky-50 to-teal-50">
      <TopNav />
      <div className="px-4 py-10 mx-auto max-w-sm">
        <h1 className="text-2xl font-semibold">Secure Login</h1>
        <div className="mt-4 rounded-lg border bg-card p-4 grid gap-3">
          <Button className="bg-teal-600 hover:bg-teal-700 text-white" onClick={simulateBiometric}>
            {biometricOk ? "Biometric Verified ✓" : "Use Biometric"}
          </Button>
          <div className="grid gap-2">
            <label className="text-sm">2FA Code</label>
            <input
              className="h-10 px-3 rounded-md border"
              placeholder="123456"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>
          <Button onClick={verify2FA} variant="secondary">
            Verify
          </Button>

          {authed && (
            <div className="text-sm text-teal-700">
              Authentication successful. Proceed to your dashboard.
              <div className="mt-2">
                <a href="/dashboard" className="underline">
                  Go to Registry
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
