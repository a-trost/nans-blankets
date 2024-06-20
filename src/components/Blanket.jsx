import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Blanket(props) {
  const { nodes, materials } = useGLTF("/Blanket.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials["Material.001"]}
        position={[0, 0, -0.395]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.783, 0.109, 0.109]}
      />
    </group>
  );
}

useGLTF.preload("/Blanket.gltf");
