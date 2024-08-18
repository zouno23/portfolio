import React, { useEffect, useState } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import { usePath } from "../store/position";

const CameraAnimation = () => {
  const { camera } = useThree();
  const path = usePath((state) => state.path);
  const paths ={"Chat":{x:100,y:0,z:0}, "About Me":{x:-100,y:0,z:55},"Professional Experiences":{x:-100,y:100,z:-55},"":{x:-15,y:0,z:-20}}
  useEffect(() => {
    const targetPosition = new THREE.Vector3(-15, 0, -20); // Define the target position
    const initialPosition = camera.position.clone();
    const duration = 4; // Duration of the animation in seconds
    const startTime = performance.now();

    const animate = () => {
      const elapsedTime = (performance.now() - startTime) / 1000; // Convert to seconds
      if (elapsedTime < duration) {
        const progress = elapsedTime / duration;
        camera.position.lerpVectors(initialPosition, targetPosition, progress);
        requestAnimationFrame(animate);
      } else {
        camera.position.copy(targetPosition); // Ensure the final position is set
      }
    };

    requestAnimationFrame(animate);
  }, [camera]);

  useEffect(() => {
    //@ts-expect-error
    if (paths[path]) {
      //@ts-expect-error
      const {x,y,z}=paths[path]
      const targetPosition = new THREE.Vector3(x, y, z); // Define the target position
      const initialPosition = camera.position.clone();
  
      const targetRotation = new THREE.Euler(Math.PI / 2, 0 , 0); // Define the target rotation (adjust as needed)
      const initialRotation = camera.rotation.clone();
  
      const duration = 3; // Duration of the animation in seconds
      const startTime = performance.now();
  
      const animate = () => {
        const elapsedTime = (performance.now() - startTime) / 1000; // Convert to seconds
        if (elapsedTime < duration) {
          const progress = elapsedTime / duration;
  
          // Interpolate position
          camera.position.lerpVectors(initialPosition, targetPosition, progress);
  
          // Interpolate rotation
          camera.rotation.set(
            THREE.MathUtils.lerp(initialRotation.x, targetRotation.x, progress),
            THREE.MathUtils.lerp(initialRotation.y, targetRotation.y, progress),
            THREE.MathUtils.lerp(initialRotation.z, targetRotation.z, progress)
          );
  
          requestAnimationFrame(animate);
        } else {
          // Ensure the final position and rotation are set
          camera.position.copy(targetPosition);
          camera.rotation.copy(targetRotation);
        }
      };
  
      requestAnimationFrame(animate);
    }
  }, [camera, path]);

  return null;
};

export default CameraAnimation;
