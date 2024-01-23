import { useCursor, useGLTF } from '@react-three/drei'
import { useRef, useState } from 'react'

import { useFrame } from '@react-three/fiber'

const Btc = () => {
  const btc = useGLTF('/obj/neon_pixel_btc/scene.gltf')

  return <primitive object={btc.scene} scale={0.5} position-y={0} rotation-y={-90} />
}

export function SpinningBox({ scale, ...props }) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  useCursor(hovered)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) => (ref.current.rotation.x = ref.current.rotation.y += delta))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? scale * 0.2 : scale * 0.1}
      onClick={event => click(!clicked)}
      onPointerOver={event => hover(true)}
      onPointerOut={event => hover(false)}
    >
      {/* <boxGeometry /> */}
      <Btc />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'indianred'} />
    </mesh>
  )
}
