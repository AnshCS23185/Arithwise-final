import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import Robot from "./robot-ansh";

export default function RobotCanvas() {
  const mouse = useRef({ x: 0, y: 0 });

  return (
    <div
      className="w-full h-full"
      onMouseMove={(e) => {
        mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
        mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
      }}
    >
      <Canvas camera={{ position: [0, 1.5, 4], fov: 45 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />

        <Robot mouse={mouse} />

        <Environment preset="studio" />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
