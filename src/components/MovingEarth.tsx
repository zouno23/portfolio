import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
//@ts-ignore
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const MovingEarth = ({path,position,scale}:{path:string,position:{x:number,y:number,z:number},scale:{x:number,y:number,z:number}}) => {
  const mesh = useRef<THREE.Mesh>(null!);
  const gltf = useLoader(GLTFLoader, path);
  gltf.scene.position.set(position.x, position.y, position.z); // Adjust the y position as needed
  gltf.scene.scale.set(scale.x, scale.y, scale.z);
  useFrame(() => {
    if (mesh.current && gltf.scene) {
      // adding small rotation animation
      mesh.current.rotation.y += 0.0001;
      mesh.current.rotation.x += 0.001;
      mesh.current.rotation.z += 0.0001;
    }
  },1)
  return (
    <mesh ref={mesh}>
      <primitive object={gltf.scene} />
    </mesh>
  );
};

export default MovingEarth;
