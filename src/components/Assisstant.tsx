import React, { useEffect, useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
//@ts-ignore
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Assisstant = () => {
  const fileUrl = "/assisstant/scene.gltf"; // Path to your hovering model
  const mesh = useRef<THREE.Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);
  const [startTime] = useState(() => performance.now());
 
  useEffect(() => {
    if (gltf.scene) {
      // Start at (100, 0, 100)
      gltf.scene.position.set(100, 0, 100);
      gltf.scene.scale.set(5, 5, 5);
      gltf.scene.rotation.set(Math.PI - Math.PI / 16, -Math.PI / 32, 0);
    }
  }, [gltf]);

  useFrame(() => {
    if (mesh.current && gltf.scene) {
      const elapsedTime = (performance.now() - startTime) / 1000; // Convert to seconds

      // First phase: Move from (100, 0, 100) to (0, 0, -5) in the first 4 seconds
      if (elapsedTime <= 2.5) {
        const progress = elapsedTime / 2.5; // Normalize progress for this phase
        gltf.scene.position.x = THREE.MathUtils.lerp(500, 20, progress);
        gltf.scene.position.y = 0;
        // gltf.scene.position.z = THREE.MathUtils.lerp(100, -5, progress);
      }
      // Second phase: Move from (0, 0, -5) to (-14, 0.5, -14) in the next 2.5 seconds
      else if (elapsedTime <= 4) {
        const progress = (elapsedTime - 2.5) / 1.5; // Normalize progress for this phase
        gltf.scene.position.x = THREE.MathUtils.lerp(20, -14, progress);
        gltf.scene.position.y = THREE.MathUtils.lerp(0, 0.5, progress);
        gltf.scene.position.z = THREE.MathUtils.lerp(100, -14, progress);
      }
      // Final phase: Hover at (-14, 0.5, -14)
      else {
        const hoverHeight = 0.5; // Hovering range
        const hoverSpeed = 0.5; // Hovering speed
        gltf.scene.position.y = 0.5 + Math.sin(performance.now() * 0.001 * hoverSpeed) * hoverHeight;
      }
    }
  });

  return  (
    <mesh ref={mesh}>
      <primitive object={gltf.scene} />
    </mesh>
  ) 
};

export default Assisstant;
