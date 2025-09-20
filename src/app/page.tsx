import Scene from './components/Scene'

export default function Home() {
  return (
    <main className="relative h-screen w-screen bg-gray-900">
      {/* 3D Scene - The Background Layer */}
      <Scene />

      {/* 2D UI - The Foreground Layer */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 flex h-full w-full flex-col items-center justify-center text-white">
        <h1 className="text-5xl font-bold">Raphael Rodrigues</h1>
        <p className="mt-4 text-lg">Creative Developer Portfolio</p>
      </div>
    </main>
  )
}