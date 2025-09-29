import Link from "next/link"
import { Button } from "@/components/ui/button"
import { RoleSelector } from "@/components/role-selector"
import { Tutorial } from "@/components/tutorial"
import { TopNav } from "@/components/top-nav"

export default function Home() {
  return (
    <main className="min-h-dvh bg-gradient-to-b from-sky-50 to-teal-50">
      <TopNav />
      <section className="px-4 py-8 md:py-12">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl md:text-5xl font-semibold text-balance">BlueCarbon Registry</h1>
          <p className="mt-3 text-muted-foreground text-pretty">
            A blockchain-based Blue Carbon Registry & MRV system to track, verify, and scale ocean restoration impact.
          </p>

          <div className="mt-6">
            <RoleSelector />
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <Link href="/onboarding" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700 text-white">Start Onboarding</Button>
            </Link>
            <Link href="/dashboard" className="w-full sm:w-auto">
              <Button variant="secondary" className="w-full sm:w-auto">
                View Registry
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16">
        <div className="mx-auto max-w-4xl">
          <Tutorial />
        </div>
      </section>
    </main>
  )
}
