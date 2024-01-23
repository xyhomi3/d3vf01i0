'use client'

import { BakeShadows, MeshReflectorMaterial } from '@react-three/drei'
import { Bloom, DepthOfField, EffectComposer } from '@react-three/postprocessing'
import { Canvas, useFrame } from '@react-three/fiber'
import { Computers, Instances } from '@/components/molecules/canvas/monitors/computers'

import { easing } from 'maath'
import { useTheme } from 'next-themes'

export default function CodeRoom() {
  const { theme } = useTheme()
  const color = theme === 'dark' ? 'Black' : 'Silver'
  const intensity = theme === 'dark' ? 0.13 : 1
  const spotlight = theme === 'dark' ? 1000 : 3000

  return (
    <Canvas shadows dpr={[1, 1.5]} camera={{ position: [-1.5, 1, 5.5], fov: 45, near: 1, far: 20 }}>
      {/* Lights */}
      <color attach='background' args={[color]} />
      <hemisphereLight intensity={intensity} groundColor={color} />
      <spotLight position={[10, 20, 10]} angle={0.12} penumbra={1} intensity={spotlight} castShadow shadow-mapSize={700} />
      {/* Main scene */}
      <group position={[-0, -1, 0]}>
        {/* Auto-instanced sketchfab model */}
        <Instances>
          <Computers scale={0.7} />
        </Instances>
        {/* Plane reflections + distance blur */}
        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[50, 50]} />
          <MeshReflectorMaterial
            blur={[300, 30]}
            resolution={512}
            mixBlur={1}
            mixStrength={80}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color='#202020'
            metalness={1}
          />
        </mesh>
        {/* Light give it more realism */}
        <pointLight distance={1.5} intensity={2} position={[0, 0.7, 0]} color='orange' />
      </group>
      {/* Postprocessing */}
      <EffectComposer disableNormalPass>
        <Bloom luminanceThreshold={0} mipmapBlur luminanceSmoothing={0.3} intensity={1.5} />
        <DepthOfField target={[0, 0, 13]} focalLength={0.3} bokehScale={15} height={1024} />
      </EffectComposer>
      {/* Camera movements */}
      <CameraRig />
      {/* <DarkModeAdjuster meshRef={meshRef} /> */}
      {/* Small helper that freezes the shadows for better performance */}
      <BakeShadows />
    </Canvas>
  )
}

function CameraRig() {
  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [-1 + (state.pointer.x * state.viewport.width) / 3, (1 + state.pointer.y) / 2, 5.5], 0.5, delta)
    state.camera.lookAt(0, 0, 0)
  })
}
