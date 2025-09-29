import Image from "next/image"

export function MapView() {
  return (
    <div className="rounded-lg border bg-card p-4">
      <div className="flex items-center justify-between">
        <h2 className="font-medium">Map View</h2>
        <div className="text-xs text-muted-foreground">Mangroves • Seagrass • Wetlands</div>
      </div>
      <div className="mt-3 relative aspect-[16/9] overflow-hidden rounded-md border">
        <Image
          src={"/placeholder.svg?height=360&width=640&query=world%20map%20with%20ocean%20tone"}
          alt="World map placeholder"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 h-3 w-3 rounded-full bg-teal-600" />
          <div className="absolute top-1/2 left-1/2 h-3 w-3 rounded-full bg-sky-600" />
          <div className="absolute top-2/3 left-2/3 h-3 w-3 rounded-full bg-emerald-600" />
        </div>
      </div>
    </div>
  )
}
