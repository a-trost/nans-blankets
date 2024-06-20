"use client";

import React, { useRef } from "react";
import { useGLTF, Text } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";

const tapeColors = [
  "hsl(230, 50%, 30%)",
  "hsl(30, 100%, 40%)",
  "hsl(115, 70%, 35%)",
  "hsl(60, 100%, 50%)",
  "hsl(0, 70%, 30%)",
];

export default function VHS({ product, ...props }) {
  console.log("🚀 ~ VHS ~ props:", product);
  const { nodes, materials } = useGLTF("/vhs-tape.gltf");

  const tapeMaterial = new THREE.MeshStandardMaterial({
    roughness: 0.5,
    color: gsap.utils.random(tapeColors),
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sleeve.geometry}
        material={materials["VHS Sleeve"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_1.geometry}
        material={tapeMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_2.geometry}
        material={materials["Front Label"]}
      />
      <Text
        color="black"
        anchorX="left"
        anchorY="middle"
        position={[-0.8, 0.33, 0.57]}
        fontSize={0.12}
        font="/fonts/marker.ttf"
      >
        {product.title}
      </Text>
    </group>
  );
}

useGLTF.preload("/vhs-tape.gltf");
