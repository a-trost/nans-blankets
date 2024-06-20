"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  Float,
  Environment,
  Center,
  PresentationControls,
} from "@react-three/drei";
import VHS from "./VHS";

export default function Stage({ product }) {
  return (
    <div className="h-[80vh] w-[50vw]">
      <Canvas
        height="500"
        shadows
        gl={{ antialias: false }}
        dpr={[1, 1.5]}
        camera={{ position: [2, 3, 5], fov: 30, near: 1, far: 40 }}
      >
        <Center>
          <Float speed={1} rotationIntensity={1} floatIntensity={1}>
            <PresentationControls
              enabled={true} // the controls can be disabled by setting this to false
              global={false} // Spin globally or by dragging the model
              cursor={true} // Whether to toggle cursor style on drag
              snap={false} // Snap-back to center (can also be a spring config)
              speed={1} // Speed factor
              zoom={1} // Zoom factor when half the polar-max is reached
              rotation={[0, 0, 0]} // Default rotation
              polar={[0, Math.PI / 2]} // Vertical limits
              azimuth={[-Infinity, Infinity]} // Horizontal limits
              config={{ mass: 1, tension: 170, friction: 26 }} // Spring config
            >
              <VHS product={product} />
            </PresentationControls>
            <ContactShadows
              position={[0, -1, 0]}
              opacity={0.3}
              scale={20}
              blur={1}
              far={9}
            />
          </Float>
        </Center>
        <Environment preset="studio" environmentIntensity={0.5} />
      </Canvas>
    </div>
  );
}
