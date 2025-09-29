import Link from "next/link"
import { notFound } from "next/navigation"
import { projects } from "@/lib/data"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function ProjectDetails({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id)
  if (!project) return notFound()

  return (
    <main className="min-h-dvh bg-gradient-to-b from-sky-50 to-teal-50">
      <div className="px-4 py-6 mx-auto max-w-4xl">
        <h1 className="text-2xl font-semibold">{project.name}</h1>
        <p className="text-muted-foreground mt-1">
          {project.location} • {project.type} • {project.credits} credits available
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-4">
            <h2 className="font-medium">Details</h2>
            <ul className="mt-2 text-sm text-muted-foreground grid gap-1">
              <li>Status: {project.status}</li>
              <li>Verification: {project.verification}</li>
              <li>Price: ${project.price} / credit</li>
            </ul>
            <div className="mt-4 flex gap-2">
              <Link href="/explorer">
                <Button variant="secondary">View on Explorer</Button>
              </Link>
              <Link href="/marketplace">
                <Button className="bg-teal-600 hover:bg-teal-700 text-white">Buy Credits</Button>
              </Link>
            </div>
          </div>

          <div className="rounded-lg border bg-card p-4">
            <h2 className="font-medium">Blockchain Certificate</h2>
            <p className="text-sm text-muted-foreground">Scan to view on-chain proof for this project</p>
            <div className="mt-3">
              <Image
                src={"/placeholder.svg?height=200&width=200&query=qr%20code%20placeholder"}
                alt="QR code certificate placeholder"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
