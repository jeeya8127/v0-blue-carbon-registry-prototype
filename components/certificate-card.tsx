"use client"

import Image from "next/image"

export function CertificateCard({ id }: { id: string }) {
  const download = () => {
    const content = `BlueCarbon Certificate\nID: ${id}\nContract: 0xBC123...`
    const blob = new Blob([content], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `certificate-${id}.txt`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="rounded-lg border bg-card p-4">
      <div className="flex items-center justify-between">
        <h3 className="font-medium">Certificate {id}</h3>
        <button onClick={download} className="h-9 px-3 rounded-md border">
          Download
        </button>
      </div>
      <div className="mt-3 flex items-center gap-3">
        <Image
          src={"/placeholder.svg?height=120&width=120&query=qr%20code%20placeholder"}
          alt={`QR for certificate ${id}`}
          width={120}
          height={120}
        />
        <div className="text-sm text-muted-foreground">
          Contract: <span className="underline">0xBC123...a9</span>
          <br />
          Unique ID: {id}
        </div>
      </div>
    </div>
  )
}
