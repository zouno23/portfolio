import { useEffect, useState } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

const useCameraAnimation = (onAnimationComplete: () => void) => {
  const { camera } = useThree();
  const [animationComplete, setAnimationComplete] = useState(false);

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
        setAnimationComplete(true);
        onAnimationComplete();
      }
    };

    requestAnimationFrame(animate);
  }, [camera, onAnimationComplete]);

  return animationComplete;
};

export default useCameraAnimation;
