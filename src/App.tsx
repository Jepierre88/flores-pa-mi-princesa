import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Text3D, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';
import helvetiker from 'three/examples/fonts/helvetiker_regular.typeface.json?url';

// Componente que carga el modelo GLB desde /public/models/model.glb
function TulipModel() {
  const { scene } = useGLTF('/models/model.glb');
  return <primitive object={scene} position={[0, -1.5, 0]} />;
}

// Precarga del modelo para mejor rendimiento
useGLTF.preload('/models/model.glb');

// Escena 3D completa
export default function App() {
  return (
    <Canvas camera={{ position: [0, 1.5, 5], fov: 50 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 2, 5]} intensity={1} />

      <Suspense fallback={null}>
        <TulipModel />

        <Text3D
          font={helvetiker}
          size={0.5}
          height={0.1}
          position={[-2, 1, 0]}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelSegments={5}
        >
          Me encantas
          <meshStandardMaterial color="white" />
        </Text3D>


        <Environment preset="sunset" />
      </Suspense>

      <OrbitControls />
    </Canvas>
  );
}
