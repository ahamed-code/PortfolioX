
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Text3D } from "@react-three/drei";
import * as THREE from "three";

const FloatingIcon = ({ position, color, children }: { position: [number, number, number], color: string, children: React.ReactNode }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshPhongMaterial color={color} />
      </mesh>
    </Float>
  );
};

const FloatingIcons = () => {
  return (
    <>
      <FloatingIcon position={[-3, 2, 0]} color="#8B5CF6">💻</FloatingIcon>
      <FloatingIcon position={[3, -1, 0]} color="#EC4899">🎨</FloatingIcon>
      <FloatingIcon position={[-2, -2, 1]} color="#3B82F6">⚡</FloatingIcon>
      <FloatingIcon position={[2, 2, -1]} color="#10B981">🚀</FloatingIcon>
      <FloatingIcon position={[0, -3, 0]} color="#F59E0B">💡</FloatingIcon>
    </>
  );
};

export default FloatingIcons;
