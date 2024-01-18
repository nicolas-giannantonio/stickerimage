import StickerPlacer from "@/components/StickerPlacer"
import Pattern from "@/illustrations/Pattern"

export default function Home() {
  return (
    <main className="w-full h-screen bg-white flex items-center justify-center">
      <div className="w-96 h-72 z-10 relative">
        <StickerPlacer />
      </div>
      <Pattern className="pointer-events-none absolute inset-0" />
    </main>
  )
}
