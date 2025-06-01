import { useRef, useMemo } from 'react'
import { Canvas, useFrame, extend } from '@react-three/fiber'
import { Line, OrbitControls, Effects } from '@react-three/drei'
import * as THREE from 'three'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'

extend({ UnrealBloomPass })

function HexGrid({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 1, color = 'white', opacity = 0.1 }) {
  const points = useMemo(() => {
    const pts = []
    const hexRadius = 1 * scale
    const gridSize = 4

    for (let row = -gridSize; row <= gridSize; row++) {
      for (let col = -gridSize; col <= gridSize; col++) {
        const x = (col + (row % 2) * 0.5) * hexRadius * 1.75
        const y = row * hexRadius * 1.5
        
        // Create hexagon
        for (let i = 0; i < 6; i++) {
          const angle1 = (i / 6) * Math.PI * 2
          const angle2 = ((i + 1) / 6) * Math.PI * 2
          
          pts.push(
            new THREE.Vector3(
              x + Math.cos(angle1) * hexRadius,
              y + Math.sin(angle1) * hexRadius,
              0
            ),
            new THREE.Vector3(
              x + Math.cos(angle2) * hexRadius,
              y + Math.sin(angle2) * hexRadius,
              0
            )
          )
        }

        // Add connecting lines
        if (row > -gridSize && col > -gridSize) {
          const centerX = x
          const centerY = y
          pts.push(
            new THREE.Vector3(centerX, centerY, 0),
            new THREE.Vector3(centerX - hexRadius * 1.75, centerY, 0)
          )
        }
      }
    }
    return pts
  }, [scale])

  const lineRef = useRef()

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    lineRef.current.rotation.z = Math.sin(time * 0.1) * 0.1
  })

  return (
    <group position={position} rotation={rotation}>
      <Line
        ref={lineRef}
        points={points}
        color={color}
        lineWidth={0.5}
        opacity={opacity}
        transparent
      />
    </group>
  )
}

function GeometricBackground() {
  const groupRef = useRef()

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    groupRef.current.rotation.z = time * 0.05
  })

  return (
    <group ref={groupRef}>
      <HexGrid scale={4} color="#ffffff" opacity={0.1} />
      <HexGrid position={[20, 0, -10]} rotation={[0, Math.PI * 0.25, 0]} scale={3} color="#64748b" opacity={0.05} />
      <HexGrid position={[-20, 0, -10]} rotation={[0, -Math.PI * 0.25, 0]} scale={3} color="#64748b" opacity={0.05} />
      <HexGrid position={[0, 20, -5]} rotation={[Math.PI * 0.15, 0, 0]} scale={2} color="#94a3b8" opacity={0.03} />
      <HexGrid position={[0, -20, -5]} rotation={[-Math.PI * 0.15, 0, 0]} scale={2} color="#94a3b8" opacity={0.03} />
    </group>
  )
}

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_50%,rgba(0,0,0,1)_100%)]" />
      <Canvas
        camera={{ position: [0, 0, 50], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <color attach="background" args={['#000000']} />
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} intensity={0.2} />
        <GeometricBackground />
        <Effects disableGamma>
          <unrealBloomPass threshold={0.1} strength={0.5} radius={1} />
        </Effects>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
      </Canvas>
    </div>
  )
}
