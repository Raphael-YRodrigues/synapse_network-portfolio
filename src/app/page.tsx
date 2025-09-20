import Scene from './components/Scene' // Import the Scene

export default function Home() {
  return (
    <main className="h-screen w-screen bg-gray-900">
      {/* This will be our 3D canvas */}
      <Scene />
    </main>
  )
}