import { TopNav } from "@/components/top-nav"
import { Timeline } from "@/components/timeline"
import { CertificateCard } from "@/components/certificate-card"

export default function Explorer() {
  return (
    <main className="min-h-dvh bg-gradient-to-b from-sky-50 to-teal-50">
      <TopNav />
      <div className="px-4 py-6 mx-auto max-w-5xl grid gap-6">
        <h1 className="text-2xl font-semibold">Blockchain Explorer</h1>
        <Timeline />
        <div className="grid gap-4 md:grid-cols-2">
          <CertificateCard id="BC-0001" />
          <CertificateCard id="BC-0002" />
        </div>
      </div>
    </main>
  )
}
