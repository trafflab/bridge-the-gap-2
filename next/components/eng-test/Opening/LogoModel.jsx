import * as React from "react";

import { useLoader, useFrame, Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";
// import CanvasLoader from "@/components/ui/CanvasLoader/CanvasLoader";
// import d3 from './logo-en.glb';

const Model = () => {
  const ref = React.useRef()
  const gltf = useLoader(GLTFLoader, d3);
  useFrame((state, delta) => (ref.current.rotation.y += 0.004));
  return (
    <>
      <primitive
      ref={ref}
      object={gltf.scene}
      scale={0.019}
      />
    </>
  );
};

export default function LogoModel() {

  return (
    <Canvas camera={{ fov: 1.45, position: [0, 0, 8] }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[30, 30, 30]} angle={0.15} penumbra={1} />
      <pointLight position={[-30, -30, -30]} />
      <Suspense>
        <Model />
        {/* <OrbitControls /> */}
      </Suspense>
    </Canvas>
  );
}