"use client";
import React, { useEffect, useRef, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import MovingEarth from "../components/MovingEarth";
import Assisstant from "../components/Assisstant";
import CameraAnimation from "../components/CameraAnimation";
import PostProcessing from "../components/PostProcessing";
import * as THREE from "three";
import { DirectionalLightHelper } from "three";
import SpaceMan from "../components/SpaceMan";
import { usePath } from "../store/position";

const FirstScene = () => {
  const path = usePath((state) => state.path);

  return (
    <Canvas className="absolute z-0 h-screen w-screen">
      <CameraAnimation />
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 20]} intensity={0.8} />
      <directionalLight
        position={[-14, 10, -18]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        color={new THREE.Color("skyblue")}
      />
      <MovingEarth
        path="/stylized_planet/scene.gltf"
        position={{ x: 15, y: 0, z: -5 }}
        scale={{ x: 10, y: 10, z: 10 }}
      />
      <Assisstant />
      {path === "About Me" && <SpaceMan />}
      <PostProcessing />
    </Canvas>
  );
};

export default FirstScene;
