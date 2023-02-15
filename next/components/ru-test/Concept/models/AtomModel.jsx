'use client';

import { useLoader, useFrame, Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useRef, useState, Suspense } from "react";
import CanvasLoader from "@/components/ui/CanvasLoader/CanvasLoader";

const Model = () => {
  const ref = useRef()
  const [hovered, hover] = useState(false);
  const gltf = useLoader(GLTFLoader, "./img-ru/sphere-small2.glb");
  useFrame((state, delta) => (ref.current.rotation.y += 0.0007));
  return (
    <>
      <primitive
      ref={ref}
      object={gltf.scene}
      scale={0.019}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
      />
    </>
  );
};

export default function AtomModel() {

  return (
    <Canvas camera={{ fov: 0.43, position: [1, 4, 8] }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[30, 30, 30]} angle={0.15} penumbra={1} />
      <pointLight position={[-30, -30, -30]} />
      <Suspense fallback={<CanvasLoader />}>
        <Model />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
}