import React, { useEffect, useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
//@ts-ignore
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const SpaceMan = () => {
  const fileUrl = "/spaceman_model/scene.gltf"; // Path to your hovering model
  const mesh = useRef<THREE.Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);
  const [startTime] = useState(() => performance.now());
  const [hasReachedTarget, setHasReachedTarget] = useState(false);
  useEffect(() => {
    if (gltf.scene) {
      gltf.scene.position.set(-95, -20, 55);
      gltf.scene.scale.set(0.5, 0.5, 0.5); // Scale the model down
    }
  }, [gltf]);

  useFrame(({ camera }) => {
    if (mesh.current && gltf.scene) {
      const elapsedTime = (performance.now() - startTime) / 1000; // Convert to seconds

      // Set initial position below the camera
      if (!hasReachedTarget) {
        const targetYPosition = -2; // Target Y position (below the camera)
        const targetZPosition = 55; // Target Z position (in front of the camera)
        const moveSpeed = 1; // Movement speed

        // Move the model up towards the target position
        gltf.scene.position.lerp(
          new THREE.Vector3(-95, targetYPosition, targetZPosition),
          moveSpeed * elapsedTime,
        );

        // Check if the model has reached the target position
        if (gltf.scene.position.y >= targetYPosition) {
          setHasReachedTarget(true);
        }
      } else {
        // Once the model reaches the target position, start rotating it away
        gltf.scene.rotation.x -= 0.0001;
        gltf.scene.rotation.y -= 0.0001;
        gltf.scene.rotation.z -= 0.00001;
      }
    }
  });

  return (
     (
      <mesh ref={mesh}>
        <spotLight
          intensity={100}
          position={[
            gltf.scene.position.x - 1,
            gltf.scene.position.y + 5,
            gltf.scene.position.z,
          ]}
          angle={3}
          penumbra={0.2}
          distance={100}
          decay={2}
          castShadow
        />{" "}
        <primitive object={gltf.scene} />
      </mesh>
    )
  );
};

export default SpaceMan;
