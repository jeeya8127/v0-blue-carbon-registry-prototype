import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ImpactStory() {
  return (
    <main className="min-h-dvh bg-gradient-to-b from-sky-50 to-teal-50">
      <div className="px-4 py-10 mx-auto max-w-2xl text-center">
        <h1 className="text-2xl font-semibold">Your Impact Story</h1>
        <p className="mt-2 text-muted-foreground">
          Congratulations! Your credits are recorded on-chain and your wallet is updated. Explore your contribution and
          share the story.
        </p>
        <div className="mt-6 flex gap-3 justify-center">
          <Link href="/explorer">
            <Button variant="secondary">View On-chain</Button>
          </Link>
          <Link href="/impact">
            <Button className="bg-teal-600 hover:bg-teal-700 text-white">View Dashboard</Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
