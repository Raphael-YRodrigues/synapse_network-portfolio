'use client' // This is a required directive for components that use client-side features.

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Box } from '@react-three/drei'

export default function Scene() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Box args={[3, 3, 3]}>
        <meshStandardMaterial color="hotpink" />
      </Box>
      <OrbitControls />
    </Canvas>
  )
}