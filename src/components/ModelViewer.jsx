import React, { Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment, Html } from '@react-three/drei';

function RotatingModel({ path }) {
  const { scene } = useGLTF(path);
  scene.scale.set(7.5, 7.5, 7.5);

  useFrame(() => {
    scene.rotation.y += 0.01;
  });

  return <primitive object={scene} dispose={null} />;
}

export default function ModelViewer({ modelPath }) {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 2, 5], fov: 75 }}>
        <Suspense
          fallback={
            <Html center>
              <p className="text-lg text-gray-600 animate-pulse">Loading...</p>
            </Html>
          }
        >
          <ambientLight intensity={1} />
          <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
          <OrbitControls
            enableZoom
            enablePan
            enableRotate
            target={[0, 0.5, 0]}
          />
          <RotatingModel path={modelPath} />
        </Suspense>
      </Canvas>
    </div>
  );
}
