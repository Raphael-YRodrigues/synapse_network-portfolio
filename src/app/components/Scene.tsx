'use client'

import { useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere } from '@react-three/drei'

export default function Scene() {
  // Generate a memoized array of random positions for the spheres
  const points = useMemo(() => {
    const numPoints = 500
    const range = 50
    return Array.from({ length: numPoints }, () => [
      (Math.random() - 0.5) * range,
      (Math.random() - 0.5) * range,
      (Math.random() - 0.5) * range,
    ])
  }, [])

  return (
    <Canvas camera={{ position: [0, 0, 25], fov: 75 }}>
      <ambientLight intensity={0.8} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      
      {/* Map over the points array to render a Sphere for each point */}
      {points.map((pos, i) => (
        <Sphere key={i} position={pos as [number, number, number]} args={[0.3]}>
          <meshStandardMaterial color="#6a0dad" roughness={0.5} />
        </Sphere>
      ))}

      <OrbitControls 
        enableZoom={false} 
        autoRotate 
        autoRotateSpeed={0.4}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </Canvas>
  )
}